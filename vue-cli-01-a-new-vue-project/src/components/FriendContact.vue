<template>
    <li>
        <h2>{{  friend.name }}</h2>
        <button @click="toggleDetails">{{ areDetailsVisible ? 'Hide Details' : 'Show Details' }}</button>
        <ul v-if="areDetailsVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
</template>


<script>
export default {
    data(){
        return {
            areDetailsVisible: false,
            friend: {
                id: 'mohamed',
                name: "Mohamed Awnallah",
                phone: "0123 456 7121",
                email: "mohamedawnallah@localhost.com"
            },
        }
    },
    methods: {
        toggleDetails() {
            this.areDetailsVisible = !this.areDetailsVisible;
        }
    },
    compute: {}
};
</script>
