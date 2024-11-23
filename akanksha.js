gsap.registerPlugin(ScrollTrigger);

// Animation for image1
gsap.to(".image1", {
  x: 100, // Move 50 pixels to the right
  duration: 3, 
  scrollTrigger: {
    trigger: ".inner-1", 
    start: "top 50%", 
    end: "bottom up",
    scrub: 2,
   toggleActions:"restart reverse none none",
}
});


gsap.to(".image2", {
  x: -100, 
  duration: 3, 
  scrollTrigger: {
    trigger: ".inner-1", 
    start: "top 30%", 
    end: "bottom top", 
    scrub: 2, 
    toggleActions:"restart reverse none none",
}
});

gsap.utils.toArray(".resume-container").forEach((resumeContainer) => {
    const direction = resumeContainer.getBoundingClientRect().top < window.innerHeight / 2 ? 'right' : 'left';
    const offset = direction === 'right' ? 50 : -50;
  
    gsap.to(resumeContainer, {
      x: offset,
      duration: 2,
      scrollTrigger: {
        trigger: resumeContainer,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
        toggleActions:"restart reverse none none",
      }
    });
  });

  