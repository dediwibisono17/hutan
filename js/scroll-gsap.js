gsap.registerPlugin(ScrollTrigger);


var targetsHeight = document.querySelectorAll(".height");




setTimeout(() => {
    targetsHeight.forEach((target, index) => {

        const pinSpacing = index === targetsHeight.length - 1 ? "true" : false;
        const end =
            index === targetsHeight.length - 1
                ? `+=${target.offsetHeight + 400}px`
                : `+=${targetsHeight[index + 1].offsetHeight + 400}px`;
        const opacityFirst = index === 0 ? 1 : 0;
        const opacitySecond = index === targetsHeight.length - 1 ? 1 : 0;
        console.log(target.offsetHeight + 100, 'end');
        const tl = gsap
            .timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: target,
                    pin: true,
                    scrub: true,
                    // scroller: '.wrapper-semua',
                    endTrigger: '.lasts',
                    start: "center center",
                    end: () => `+=${document.querySelector(".height").offsetHeight + 550}`,
                    markers: false,
                    height: 50,
                    toggleActions: "restart none reverse reset",
                    pinSpacing,
                },
            })
            .from(target, { opacity: opacityFirst, duration: 0.2 }, 0)
            .to(target, { opacity: opacitySecond, duration: 0.2 }, 0.8);
        // console.log(tl);
    });

}, 100);




// yang kedua

gsap.registerPlugin(ScrollTrigger);

const sections = Object.values(document.getElementsByClassName("sectionv"));

gsap.set(sections, { zIndex: (i, target, targets) => targets.length - i });


const animateParagraph = (section) => {

    const paragraph = section.querySelector('.paragraph')

    const timeline = gsap.timeline();

    timeline
        .from(paragraph, { opacity: 0, x: -200, lazy: false })
        .to(paragraph, { opacity: 1, x: 0, scale: 1.1, duration: 2 })
        .to(paragraph, { duration: 10 })
        .to(paragraph, { opacity: 0, scale: 1, x: 200, duration: 2 })
        .to(section, { opacity: 0, duration: 0.5 });

    return timeline;
};

ScrollTrigger.create({
    trigger: '.contentv',
    start: 'top top',
    end: '+=' + sections.length * 500,
    pin: true,
    id: 'pinning'
});

sections.forEach((section, index) => {
    const timeline = gsap.timeline({
        scrollTrigger: {
            id: `section_${index + 1}`,
            trigger: ".wrap",
            start: "top top-=" + (index * 500),
            end: "+=" + 500,
            scrub: true,
            invalidateOnRefresh: true,
            markers: false
        }
    });

    timeline.add(animateParagraph(section));

});

gsap.delayedCall(0.01, () =>
    ScrollTrigger.getAll().forEach((t) =>
        console.log("Start", t.start, "End", t.end, t.vars.id)
    )
);
