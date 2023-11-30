<script setup>
import navigations from "@/cms/queries/navigation";
const {data:nav, error:errors} = await useLazyAsyncQuery(navigations);
</script>
<template>
    <div>
        <div class="navigation">
            <img class="logo" :src="`${nav.navigation.logo.url}`">
            <ul>
                <li v-for="(item, index) in nav.navigation.newmenu" :key="index">
                    <a :href="`${item.lien}`">{{ item.menu }}</a>
                </li>
            </ul>
        </div>
        <NuxtPage />
        <Footer /> 
    </div>
</template>
<style>
body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.logo{
    width: auto;
    height: 50px;
}
.navigation{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    color: #fff;
    padding: 1rem;
    height: 77px;
}
ul {
    display: flex;
    justify-content: space-around;
    gap: 20px;
}
ul li {
    list-style: none;
    font-size: 22px;
    color: #000;
}
ul li a {
    text-decoration: none;
    color: #000;
}
h1 {
    font-size: 22px;
    color: #000;
}

</style>