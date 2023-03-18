const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: ""
    };
  },
  watch: {
    counter(countValue) {
      if (countValue === 50) {
        this.name = "";
      }
    }

  },
  computed: {
    fullName() {
      console.log("Called at getFullName Function");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Awnallah";
    }
  },
  methods: {
    resetName() {
      console.log("Called at resetName Function")
      this.name = ""
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
