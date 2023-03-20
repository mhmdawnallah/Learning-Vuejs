<template>
<form @submit.prevent="submitData">
    <div >
        <label>Friend Id:</label><br>
        <input type="text" v-model="friendId"><br>
    </div>
    <div>
        <label>Friend Name:</label><br>
        <input type="text"  v-model="friendName"><br>
    </div>
    <div>
        <label>Phone Number:</label><br>
        <input type="text"  v-model="phoneNumber"><br>
    </div>
    <div>
        <label>Email Address:</label><br>
        <input type="text" v-model="emailAddress"><br>
    </div>
    <button>Add Contact</button>
</form>

</template>

<script>
export default {
    emits: ['add-contact'],
    data() {
        return {
            friendId: '',
            friendName: '',
            phoneNumber: '',
            emailAddress: ''
        }
    },
    methods: {
        submitData(){
            this.$emit("add-contact",this.friendId, this.friendName, this.phoneNumber, this.emailAddress);
        }
    }
}
</script>

