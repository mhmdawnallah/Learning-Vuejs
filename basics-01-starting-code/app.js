const app = Vue.createApp({
    data() {
        return {
            courseGoal: "Finish the course by 20 March 2023 and Learn Vue js!",
            vueLink: "https://vuejs.org/"
        };
    },
    methods: {
        outputGoal() {
            const randomnumber = Math.random();
            if (randomnumber < 0.5) {
                return "Learn Vue";
            } else {
                return "Learn Vue and Contribute!";
            }
        }
    }
});

app.mount("#user-goal");