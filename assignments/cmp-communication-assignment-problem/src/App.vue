<template>
    <section>
        <header>
            <h1> My users are:</h1>
        </header>
    <ul>
        <add-user @add-user="addUser"> </add-user>
        <active-user
            v-for="user in users"
            :key="user.id"
            :id="user.id"
            :name="user.name"
            :age="user.age"
        ></active-user>
    </ul>
    </section>
</template>

<script>
export default {

    data() {
        return {
            users: []
        }
    },
    methods: {
        addUser(id, name, age) {
            const newUser = {id: id, name: name, age: age};
            this.users.push(newUser);
        }
    }
}
</script>