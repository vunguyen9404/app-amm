<template>
  <div>
    <a-button type="primary">test</a-button>
    <NuxtLink to="/about">link</NuxtLink>
    <MyTest />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    console.log('this is test')
  }
})
</script>
