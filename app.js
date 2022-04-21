new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector("h1");
        const ltitle = section.querySelector("h2");
        const tl = new TimelineMax({ delay: 0.5 });

        if(destination.index === 0) {
            tl.fromTo([title, ltitle], 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });
        }

        if(destination.index === 1) {
            const banner = document.querySelector(".banner");
            const description = document.querySelectorAll(".description");

            tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo(banner, 0.7, { x: "100%" }, { x: "-35%" })
            .fromTo(description, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });
        }

        if(destination.index === 2) {
            const army = document.querySelector(".army");
            const description = document.querySelectorAll(".description");

            tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo(army, 0.7, { x: "100%" }, { x: "-35%" })
            .fromTo(description, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });
        }
        
        if(destination.index === 3) {
            const army = document.querySelector(".armyB");
            const description = document.querySelectorAll(".description");

            tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo(army, 0.7, { x: "100%" }, { x: "-35%" })
            .fromTo(description, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });
        }

        if(destination.index === 4) {
            const army = document.querySelector(".bars2021");
            const description = document.querySelectorAll(".description");

            tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo(army, 0.7, { x: "100%" }, { x: "-35%" })
            .fromTo(description, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });
        }

        if(destination.index === 5) {
            const army = document.querySelector(".armyC");
            const description = document.querySelectorAll(".description");

            tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo(army, 0.7, { x: "100%" }, { x: "-35%" })
            .fromTo(description, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });
        }

        if(destination.index === 6) {
            const army = document.querySelector(".armyD");
            const description = document.querySelectorAll(".description");

            tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo(army, 0.7, { x: "100%" }, { x: "-35%" })
            .fromTo(description, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });
        }

        if(destination.index === 7) {
            const profileA = document.querySelector(".profileA");
            const profileB = document.querySelector(".profileB");
            const profileC = document.querySelector(".profileC");
            const nameA = document.querySelector(".nameA");
            const nameB = document.querySelector(".nameB");
            const nameC = document.querySelector(".nameC");
            const jobA = document.querySelector(".jobA");
            const jobB = document.querySelector(".jobB");
            const jobC = document.querySelector(".jobC");
            const wrapper = document.querySelector(".wrapper");

            tl.fromTo([profileA, nameA, jobA], 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo([profileB, nameB, jobB], 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo([profileC, nameC, jobC], 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo(wrapper, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });
        }
    }
})