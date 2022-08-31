
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.second',
      start: 'center center',
      end: 'bottom top',
      //   markers: true,
      scrub: true,
      pin: true,
    },
  })
  .from('.second-text-1', {
    x: innerWidth * 1,
  })
  .from('.second-text-2', {
    x: innerWidth * -1,
  })
  .from('.second-text-3', {
    x: innerWidth * 1,
  })

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.third',
      start: 'center center',
      end: 'bottom top',
      //   markers: true,
      scrub: true,
      pin: true,
    },
  })
  .from('.third-text-1', {
    x: innerWidth * 1,
  })
  .from('.third-text-2', {
    x: innerWidth * -1,
  })
  .from('.third-text-3', {
    x: innerWidth * 1,
  })
