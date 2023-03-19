const app = Vue.createApp({
    data() {
        return {
            task: "",
            tasks: [],
            isTaskListVisible: true
        }
    },
    methods: {
        getButtonCaption() {
            return this.isTaskListVisible ? 'Hide List' : 'Show List';
        },
        addTask() {
            this.tasks.push(this.task);
        },
        removeTask(indx) {
            this.tasks.splice(indx, 1);
        },
        toggleTaskList() {
            this.isTaskListVisible = !this.isTaskListVisible;
        }
    }
});

app.mount("#assignment")