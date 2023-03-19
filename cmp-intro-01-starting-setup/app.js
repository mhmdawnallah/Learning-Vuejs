const app = Vue.createApp({
    data() {
        return {
            friends: [

                {
                    id: 'Ahmed',
                    name: 'Khaled',
                    phone: '12345 6789 123',
                    email: 'ahmedkhaled@localhost.com'
                }
            ]
        }
    }
});

app.component('friend-contact', {
    template: `
    <li>
        <h2> {{ friend.name }} </h2>
        <button @click="toggleDetails">
        {{ areDetailsVisible ? "Hide" : "Show" }} Details
        </button>
        <ul v-if="areDetailsVisible">
            <li><strong>Phone:</strong> {{ friend.phone }} </li>
            <li><strong>Email:</strong> {{ friend.email }} </li>
        </ul>
    </li>
    `,
    data() {
        return { 
            areDetailsVisible: false,
            friend: { 
                id: 'Mohamed', 
                name: 'Mohamed Awnallah',
                phone: '01234 5678 991',
                email: 'mohamedawnallah@localhost.com' 
            },
        
        };
    },
    methods: {
        toggleDetails() {
            this.areDetailsVisible = !this.areDetailsVisible;
        }
    }
});

app.mount("#app");