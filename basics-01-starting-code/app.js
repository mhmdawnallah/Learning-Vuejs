const app = Vue.createApp({
    data() {
        return {
            courseGoalA: "Finish the course by 20 March 2023 and Learn Vue js!",
            courseGoalB: "Master Vue and Contribute to Internet Health Report!",
            vueLink: "https://vuejs.org/"
        };
    },
    methods: {
        outputGoal() {
            const randomnumber = Math.random();
            if (randomnumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount("#user-goal");