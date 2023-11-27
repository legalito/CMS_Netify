<script setup>
const route = useRoute()
if (route.params.test === 'admin') 
{
console.log('This is admin page')
}
</script>

<template> 
    <p>Blog - {{ $route.params.test }}</p>
</template>