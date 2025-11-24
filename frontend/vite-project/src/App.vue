<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')
const result = ref('')

async function sendText() {
  try {
    const res = await fetch('http://localhost:3000/api/echo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: text.value })
    })

    const data = await res.json()
    result.value = data.message
  } catch (err) {
    console.error('you angered the network gods:', err)
  }
}
</script>

<template>
  <div>
    <h1>Basic text echo app</h1>
    <p>This app run on Linux with Docker</p>
  </div>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <textarea
      id="textbox"
      placeholder="Write something..."
      v-model="text"
    ></textarea>

    <button
      type="button"
      style="width: 128px; padding: 1em;"
      @click="sendText"
    >
      submit
    </button>
  </div>
  <div>
    <p style="font-size: 24px; font-weight: 500; width: 50%;">
      {{ result }}
    </p>
  </div>
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
}
#textbox {
  width: 50%;
  height: 100px;
 }
</style>
