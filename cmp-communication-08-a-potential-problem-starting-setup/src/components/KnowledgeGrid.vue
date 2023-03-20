<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      @select-topic="selectTopic"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  inject: ['topics', 'selectTopic']
};
</script>