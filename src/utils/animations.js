import gsap from "gsap";

const tl = gsap.timeline({ repeat: -1 });
// const tl = gsap.timeline();

export const sliderAnimation = () => {
  tl.to(".s1", {
    opacity: 1,
    yPercent: -100,
    duration: 2,
    display: "block",
  })
  .to(".s1", {
    duration: 0.1,
    ease: "power3.inOut",
    opacity: 0,
  })
  .to(".s2", {
    opacity: 1,
    yPercent: -100,
    duration: 2,
    display: "block",
  })
  .to(".s2", {
    duration: 0.1,
    ease: "power3.inOut",
    opacity: 0,
  })
  .to(".s3", {
    opacity: 1,
    yPercent: -100,
    duration: 2,
    display: "block",
  })
  .to(".s3", {
    duration: 0.1,
    ease: "power3.inOut",
    opacity: 0,
  });
};
