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
    },
    removeGoal(indx) {
      this.goals.splice(indx,1);
    }
  }
});

app.mount('#user-goals');
