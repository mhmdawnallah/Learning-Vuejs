<template>
    <section>
        <li>
            <h2>User name is: {{ name }}</h2>
            <h3>Age is: {{ age }}</h3>
        </li>
    </section>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        }
    },
    data(){},
    methods: {}
}
</script>