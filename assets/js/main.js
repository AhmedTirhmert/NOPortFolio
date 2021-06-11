/** @format */
gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from(".content", {
  y: "-10%",
  opacity: 0,
  duration: 2.5,
  ease: Power4.easeOut,
});
tl.from(
  ".stagger1",
  {
    opacity: 0,
    y: -50,
    stagger: 0.3,
    ease: Power4.easeOut,
    duration: 2,
  },
  "-=1.5"
);
tl.from(
  ".hero-design",
  {
    opacity: 0,
    y: 50,
    ease: Power4.easeOut,
    duration: 3,
  },
  "-=2"
);

gsap.from(".square-anim", {
  stagger: 0.3,
  scale: 2,
  duration: 1,
  ease: Back.easeOut.config(1.7),
});

gsap.from(".transition2", {
  scrollTrigger: {
    trigger: ".transition2",
    start: "top bottom",
  },
  y: 100,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
});

gsap.from(".transition3", {
  scrollTrigger: {
    trigger: ".transition3",
    start: "top center",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.6,
});
gsap.from(".socials-container-anim", {
  x: "250%",
  opacity: 0,
  ease: Power4.easeOut,
  stagger: 1,
  duration: 2,
  ease: Back.easeOut.config(1.7),
});
gsap.from(".header-anim", {
  x: "-100%",
  opacity: 0,
  ease: Power4.easeOut,
  stagger: 0.5,
  duration: 2,
  ease: Back.easeOut.config(1.7),
});
const featuredCircle = CSSRulePlugin.getRule(".featured:before");
gsap.from(featuredCircle, 1.5, {
  scrollTrigger: {
    trigger: this.featuredCircle,
  },
  cssRule: {
    x: "-100%",
    scale: 1.5,
    opacity: 0,
  },
});
