
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutAnimation = () => {
  const section = document.querySelector("#about");

  if (!section) return;

  // Scope animations to the About section.
  const find = (selector) => section.querySelectorAll(selector);

  const has = (selector) => find(selector).length > 0;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
      toggleActions: "play none none reverse",
      invalidateOnRefresh: true,
    },
  });

  // 1. Small introductory label
  if (has(".about-kicker, .about-eyebrow")) {
    tl.from(".about-kicker, .about-eyebrow", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  }

  // 2. Main heading
  if (has(".about-title")) {
    tl.from(
      ".about-title",
      {
        y: 70,
        opacity: 0,
        duration: 0.9,
        ease: "power4.out",
      },
      "-=0.2",
    );
  } else if (has(".title")) {
    tl.from(
      ".title",
      {
        y: -60,
        opacity: 0,
        duration: 0.9,
        ease: "power4.out",
      },
      "-=0.2",
    );
  }

  // 3. Heading accent / decorative line
  if (has(".about-heading-line")) {
    tl.from(
      ".about-heading-line",
      {
        scaleX: 0,
        transformOrigin: "top center",
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.4",
    );
  }

  // 4. Supporting heading and description
  if (has(".about-copy h2")) {
    tl.from(
      ".about-copy h2",
      {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.35",
    );
  }

  if (has(".about-description")) {
    tl.from(
      ".about-description",
      {
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.3",
    );
  } else if (has(".hero-left")) {
    // Fallback for the older About.jsx layout.
    tl.from(
      ".hero-left",
      {
        x: -70,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      },
      "-=0.3",
    );
  }

  // 5. Technology tags appear sequentially.
  if (has(".about-tags span")) {
  tl.from(
    ".about-tags span",
    {
      opacity: 0,
      clipPath: "inset(100% 0% 0% 0%)",
      stagger: 0.09,
      duration: 0.5,
      ease: "power3.out",
      clearProps: "clipPath",
    },
    "-=0.3",
  );
}

  // 6. Highlighted text / callout
  if (has(".about-highlight")) {
    tl.from(
      ".about-highlight",
      {
        y: 20,
        opacity: 0,
        scale: 0.97,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.2",
    );
  }

  // 7. Code editor enters from the right.
  if (has(".about-editor")) {
    tl.from(
      ".about-editor",
      {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "<",
    );
  } else if (has(".hero-right")) {
    // Fallback for the older editor layout.
    tl.from(
      ".hero-right",
      {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "<",
    );
  }

  // 8. Stats / technology cards
  if (has(".stat-row .stat-card")) {
    tl.from(
      ".stat-row .stat-card",
      {
        y: 35,
        opacity: 0,
        stagger: 0.14,
        duration: 0.65,
        ease: "power3.out",
      },
      "-=0.45",
    );
  }

  // 9. Independent floating technology icons
  const floatingIcons = find(".float-element");

  if (floatingIcons.length) {
    gsap.to(floatingIcons, {
      y: (index) => [-18, -24, -15, -21][index % 4],
      duration: (index) => [3.5, 2.8, 4, 3.2][index % 4],
      rotation: -15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.15,
    });
  }
};