Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoalValue: ""
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue)
    }
  }
}).mount("#app");


// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);