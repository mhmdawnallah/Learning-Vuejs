const app = Vue.createApp({
    data() {
        return {
            userInput: "",
            isParagraphToggled: true
        }
    },
    computed: {
        paragraphClasses() {
            return { user1: this.userInput === 'user1', user2: this.userInput === 'user2' };
        },
        paragraphClasses() {
            return {
                user1: this.userInput === "user1",
                user2: this.userInput === "user2",
                visible: this.isParagraphToggled,
                hidden: !this.isParagraphToggled
            }
        }
    },
    methods: {
        toggleParagraph() {
            this.isParagraphToggled = !this.isParagraphToggled;
        }
    }
});

app.mount("#assignment")