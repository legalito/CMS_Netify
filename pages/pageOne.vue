<script setup>
import { ref } from 'vue'
const count = ref(0)
const isActive = ref(true)
const hasError = ref(false)
const text = ref('hello')
function increment() {
 count.value++
}
</script>
<template>
 <button @click="increment">You clicked me {{ count }} times.</button>
 <div
 class="static"
 :class="{ active: isActive, 
'text-danger': hasError }"
></div>
<div>
    <child :greeting-message="text" />
    <event @some-event="callback" />

</div>

</template>
<style>
.image img { width: 100px;}
</style>
