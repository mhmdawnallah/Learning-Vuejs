const app = Vue.createApp({
  data() {
    return { 
      goalInput: "",
      goals: [] 
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goalInput);
    }
  }
});

app.mount('#user-goals');
