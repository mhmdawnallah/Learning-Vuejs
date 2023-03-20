<template>
    <section>
        <form @submit.prevent="submitData">
            <div >
                <label>User Name Id:</label><br>
                <input type="text" v-model="id"><br>
            </div>
            <div>
                <label>User Name:</label><br>
                <input type="text"  v-model="name"><br>
            </div>
            <div>
                <label>Age:</label><br>
                <input type="text"  v-model="age"><br>
            </div>
            <button>Add User</button>
        </form>
    </section>
    
</template>

<script>
export default {
    emits: ['add-user'],
    data(){
        return {
            id: '',
            name: '',
            age: ''
        }
    },
    methods: {
        submitData() {
            this.$emit('add-user', this.id, this.name, this.age);
        }
    }
}
</script>