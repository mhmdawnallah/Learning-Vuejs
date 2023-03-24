
export default {
    data() {
      return {
        alertIsVisible: false,
      };
    },
    methods: {
      showAlert() {
        this.alertIsVisible = true;
      },
      hideAlert() {
        this.alertIsVisible = false;
      },
    },
    mounted() {
        console.log('Alert Mixin Mounted');
    }
  };