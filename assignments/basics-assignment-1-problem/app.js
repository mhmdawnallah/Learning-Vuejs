const app = Vue.createApp({
    data() {
        return {
            myName: "Mohamed Awnallah",
            myAge: 1000,
            imageUrl: "https://fastly.picsum.photos/id/964/536/354.jpg?hmac=kSsVnNTQ-6YWbc0xplnRuTFw1jcas7pI1MYuDRsMvQI"
        }
    },
    methods: {
        getRandomNumber() {
            const randomNumber = Math.random();
            return randomNumber;
        }
    }
});

app.mount("#assignment");