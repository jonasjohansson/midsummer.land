(() => {
  // ───────── Star field ─────────
  const STAR_COUNT = 150;
  const starfield = document.getElementById("starfield");
  const stars = [];
  if (starfield) {
    for (let i = 0; i < STAR_COUNT; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = 8 + Math.random() * 18;
      const delay = Math.random() * 6;
      const dur = 3 + Math.random() * 4;
      const type = Math.random() > 0.7 ? "sparkle" : Math.random() > 0.5 ? "small" : "dot";
      const hue = Math.random() > 0.5 ? "coral" : "gold";
      const depth = 0.15 + Math.random() * 0.25;
      const el = document.createElement("span");
      el.className = `star star-${type} star-${hue}`;
      el.style.left = x + "%";
      el.style.top = y + "%";
      el.style.width = size + "px";
      el.style.height = size + "px";
      el.style.animationDelay = delay + "s";
      el.style.animationDuration = dur + "s";
      el.style.setProperty("--py", "0px");
      if (type === "sparkle") {
        const fillOuter = hue === "coral" ? "#e89567" : "#d4a857";
        const fillInner = hue === "coral" ? "#ffb088" : "#ffd49a";
        const stop0 = hue === "coral" ? "#ffd9b8" : "#ffe9b8";
        const stop1 = hue === "coral" ? "#e89567" : "#d4a857";
        const stop2 = hue === "coral" ? "#d97587" : "#d4a857";
        el.innerHTML = `<svg viewBox="0 0 24 24" class="star-svg"><defs><radialGradient id="g-${i}" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="${stop0}" stop-opacity="1"/><stop offset="40%" stop-color="${stop1}" stop-opacity="0.6"/><stop offset="100%" stop-color="${stop2}" stop-opacity="0"/></radialGradient></defs><circle cx="12" cy="12" r="10" fill="url(#g-${i})" opacity="0.5"/><path d="M12 0 L13.4 10.6 L24 12 L13.4 13.4 L12 24 L10.6 13.4 L0 12 L10.6 10.6 Z" fill="${fillOuter}"/><path d="M12 4 L12.7 11.3 L20 12 L12.7 12.7 L12 20 L11.3 12.7 L4 12 L11.3 11.3 Z" fill="${fillInner}" opacity="0.9"/></svg>`;
      } else if (type === "small") {
        const fill = hue === "coral" ? "#e89567" : "#d4a857";
        el.innerHTML = `<svg viewBox="0 0 24 24" class="star-svg"><path d="M12 2 L13 11 L22 12 L13 13 L12 22 L11 13 L2 12 L11 11 Z" fill="${fill}" opacity="0.85"/></svg>`;
      }
      starfield.appendChild(el);
      stars.push({ el, depth });
    }
  }

  // ───────── Scroll-driven effects ─────────
  const heroImg = document.getElementById("hero-img");
  const heroEyebrow = document.getElementById("hero-eyebrow");
  const heroText = document.getElementById("hero-text");
  const main = document.getElementById("main");
  const sectionNav = document.getElementById("section-nav");

  let scrollY = 0;
  let ticking = false;

  function applyScroll() {
    const y = scrollY;
    if (heroImg) heroImg.style.transform = `translateY(${y * 0.08}px)`;
    if (heroEyebrow) heroEyebrow.style.transform = `translate(-50%, ${y * -0.12}px)`;
    if (heroText) heroText.style.transform = `translate(-50%, calc(-50% + ${y * -0.18}px))`;
    if (main) main.style.marginTop = `${-2 - Math.min(y * 0.12, 140)}px`;
    for (const s of stars) {
      s.el.style.setProperty("--py", `${-y * s.depth}px`);
    }
    const showNav = y > window.innerHeight * 0.7;
    if (sectionNav) {
      sectionNav.classList.toggle("section-nav-visible", showNav);
      if (showNav) sectionNav.removeAttribute("inert");
      else sectionNav.setAttribute("inert", "");
    }
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      scrollY = Math.max(0, window.scrollY);
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(applyScroll);
      }
    },
    { passive: true }
  );
  applyScroll();

  // ───────── Audio toggle ─────────
  const audio = document.getElementById("theme-audio");
  const audioBtn = document.getElementById("audio-toggle");
  if (audio && audioBtn) {
    audio.volume = 0.5;
    const label = audioBtn.querySelector(".audio-link-label");
    const setState = (playing) => {
      audioBtn.classList.toggle("is-playing", playing);
      audioBtn.setAttribute("aria-label", playing ? "Pause the theme" : "Play the theme");
      if (label) label.textContent = playing ? "Pause the theme" : "Play the theme";
    };
    audioBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play().then(() => setState(true)).catch(() => setState(false));
      } else {
        audio.pause();
        setState(false);
      }
    });
    audio.addEventListener("ended", () => setState(false));
    audio.addEventListener("pause", () => setState(false));
    audio.addEventListener("play", () => setState(true));
  }

  // ───────── Tarot cards (idle 3D wobble + hover tilt + fade-in) ─────────
  const cards = document.querySelectorAll(".tarot-card");
  if (cards.length) {
    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add("tarot-visible");
        }
      },
      { threshold: 0.5, rootMargin: "-10% 0px -10% 0px" }
    );

    const animatedCards = [];
    cards.forEach((card) => {
      visibilityObserver.observe(card);
      const inner = card.querySelector(".tarot-card-inner");
      const shine = card.querySelector(".tarot-shine");
      if (!inner) return;
      const state = {
        card,
        inner,
        shine,
        base: Math.random() * 1000,
        idleX: 0,
        idleY: 0,
        hovering: false,
        leaveTimer: null,
      };
      animatedCards.push(state);

      card.addEventListener("mouseenter", () => {
        state.hovering = true;
        inner.style.transition = "transform 0.4s cubic-bezier(0.2, 0.6, 0.3, 1)";
        clearTimeout(state.leaveTimer);
        state.leaveTimer = setTimeout(() => { inner.style.transition = "none"; }, 400);
      });

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rotY = (x - 0.5) * 30;
        const rotX = (0.5 - y) * 30;
        inner.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        if (shine) {
          shine.style.opacity = "1";
          shine.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,240,200,0.35) 0%, rgba(255,220,160,0.15) 30%, transparent 70%)`;
        }
      });

      card.addEventListener("mouseleave", () => {
        inner.style.transition = "transform 0.8s cubic-bezier(0.2, 0.6, 0.3, 1)";
        inner.style.transform = `rotateX(${state.idleX}deg) rotateY(${state.idleY}deg)`;
        if (shine) shine.style.opacity = "0";
        setTimeout(() => { state.hovering = false; }, 800);
      });
    });

    const animateCards = (time) => {
      const t = time * 0.001;
      for (const s of animatedCards) {
        if (!s.card.classList.contains("tarot-visible")) continue;
        const b = s.base;
        s.idleX = Math.sin(t * 0.7 + b) * 8 + Math.sin(t * 1.3 + b * 2) * 4 + Math.sin(t * 0.3 + b * 0.5) * 3;
        s.idleY = Math.cos(t * 0.5 + b) * 10 + Math.cos(t * 1.1 + b * 3) * 4 + Math.cos(t * 0.2 + b * 1.5) * 3;
        if (!s.hovering) {
          s.inner.style.transform = `rotateX(${s.idleX}deg) rotateY(${s.idleY}deg)`;
        }
      }
      requestAnimationFrame(animateCards);
    };
    requestAnimationFrame(animateCards);
  }

  // ───────── Inspiration carousel ─────────
  const MOOD_IMAGES = [
    "18cfd6e1029db36f3342a84e535e1553",
    "19e4efc54e6ae45ce1aa03af00bfbd6a",
    "1b9e2f4a02a06d422a90e281466fc9ef",
    "1e8bc9242e1f73bb1e9f004049ac3403",
    "1f9f5f976c5154c0b417bc856864bbbb",
    "2a9482546e492063c77b42072a5e75af",
    "2c918861d28506cdc5fa96fe7c0d7df7",
    "3079df01be0a050c2f48ac1a47e6d2c5",
    "34b50565c3192f8261f5e4041bb75db2",
    "50a1bcc59663d8eebc2a0abe72e6a190",
    "59155c2c68c755e62b24ed1b88156471",
    "683f1bb346dbf353f67f6f5a2e7e07c3",
    "6efe459c80e3178ad953412067e812ef",
    "70443e37a1a052ee90d1a7514e74c4b5",
    "740ad4406454ed1f8dec6e1f5184dd37",
    "74c6d0d097a438cf133810873a07ebcd",
    "84672406ea49b21aa47a2730008f19ec",
    "8a3f3097187fa4269af650860328e96f",
    "8de7c92712d2bf92e6717ff233aa4f7e",
    "b147684d65cf2e6274a6f8c8edc4cdeb",
    "b7afd91e4640c6dc9482dad58e3cbbcd",
    "b8efda7ea8c998a393241dcf3649a34d",
    "d631289972ad6dc2d217083af2f02de7",
    "d96a2e28333ec1196ae2396c1b1d0855",
    "edc05e2e2a526c948891ba6042cfdbfb",
    "f05cceee7622634c87362cf8817a6ff5",
    "f190825935e0ea210367f58d0155b86d",
    "f7d39582b705bdb3078166c8814c2bcb",
    "fc4cbcc76cda1e1baddbdb1f85d0a0fd",
    "fc50c761123ebd692a4464ce58218994",
  ];
  const track = document.getElementById("inspiration-track");
  if (track) {
    const doubled = MOOD_IMAGES.concat(MOOD_IMAGES);
    track.innerHTML = doubled
      .map(
        (id, i) =>
          `<div class="inspiration-item" data-index="${i}"><picture><source type="image/webp" srcset="assets/mood/${id}.webp" /><img src="assets/mood/${id}.jpg" alt="Outfit inspiration" class="inspiration-img" draggable="false" loading="lazy" decoding="async" /></picture></div>`
      )
      .join("");

    let scrollPos = 0;
    let velocity = 0;
    let pausedUntil = 0;
    let dragging = false;
    let dragMoved = false;
    let dragStartX = 0;
    let dragStartScroll = 0;
    let lastPointerX = 0;
    let lastPointerTime = 0;
    let activeIndex = null;

    const wrapScroll = () => {
      const half = track.scrollWidth / 2;
      if (half === 0) return;
      if (scrollPos >= half) scrollPos -= half;
      if (scrollPos < 0) scrollPos += half;
    };

    const tick = () => {
      if (!dragging) {
        if (Math.abs(velocity) > 0.5) {
          scrollPos += velocity;
          velocity *= 0.95;
        } else {
          velocity = 0;
          if (Date.now() > pausedUntil) scrollPos += 0.5;
        }
        wrapScroll();
        track.scrollLeft = scrollPos;
      }
      requestAnimationFrame(tick);
    };
    tick();

    track.addEventListener(
      "wheel",
      (e) => {
        if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
        e.preventDefault();
        scrollPos += e.deltaX;
        wrapScroll();
        track.scrollLeft = scrollPos;
        pausedUntil = Date.now() + 3000;
        velocity = 0;
      },
      { passive: false }
    );

    track.addEventListener("pointerdown", (e) => {
      dragging = true;
      dragMoved = false;
      velocity = 0;
      dragStartX = e.clientX;
      dragStartScroll = scrollPos;
      lastPointerX = e.clientX;
      lastPointerTime = Date.now();
      pausedUntil = Date.now() + 60000;
      track.setPointerCapture(e.pointerId);
    });

    track.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const dx = dragStartX - e.clientX;
      if (Math.abs(dx) > 5) dragMoved = true;
      scrollPos = dragStartScroll + dx;
      wrapScroll();
      track.scrollLeft = scrollPos;
      const now = Date.now();
      const dt = now - lastPointerTime;
      if (dt > 0) velocity = ((lastPointerX - e.clientX) / dt) * 16;
      lastPointerX = e.clientX;
      lastPointerTime = now;
    });

    const onUp = (e) => {
      dragging = false;
      const dt = Date.now() - lastPointerTime;
      if (dt > 100) velocity = 0;
      if (!dragMoved) {
        velocity = 0;
        pausedUntil = Date.now() + 3000;
        const item = e.target.closest(".inspiration-item");
        if (item) {
          const idx = Number(item.getAttribute("data-index"));
          if (!isNaN(idx)) {
            const next = activeIndex === idx ? null : idx;
            track.querySelectorAll(".inspiration-item.is-active").forEach((el) => el.classList.remove("is-active"));
            if (next !== null) item.classList.add("is-active");
            activeIndex = next;
          }
        }
      }
    };
    track.addEventListener("pointerup", onUp);
    track.addEventListener("pointercancel", onUp);

    document.addEventListener("pointerdown", (e) => {
      if (activeIndex === null) return;
      if (!track.contains(e.target)) {
        track.querySelectorAll(".inspiration-item.is-active").forEach((el) => el.classList.remove("is-active"));
        activeIndex = null;
      }
    });
  }
})();
