const app = Vue.createApp({
    data() {
        return {
            userInput: "",
            userConfirmedInput: ""
        };
    },
    methods: {
        showAlert() {
            alert("Alert is shown");
        },
        setUserInput(event,) {
            this.userInput = event.target.value;
        },
        confirmUserInput(event) {
            this.userConfirmedInput = event.target.value;
        }
    }
});

app.mount("#assignment");