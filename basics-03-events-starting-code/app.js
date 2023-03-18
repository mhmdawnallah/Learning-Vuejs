const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: ""
    };
  },
  methods: {
    confirmName(){
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submitted!");
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(number) {
      this.counter += number;
    },
    reduce(number) {
      this.counter -= number;
    }
  }
});

app.mount('#events');
