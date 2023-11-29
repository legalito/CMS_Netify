<script setup>
import navigations from "@/cms/queries/navigation";
const {data:nav, error:errors} = await useLazyAsyncQuery(navigations);
</script>
<template>
    <div>
        <div class="navigation">
            <h1>Vue 3 + Netlify CMS</h1>
            
            <ul>
                <li v-for="(item, index) in nav.allNavigations" :key="index">
                    <a href="item.lien"></a>{{ item.navLabel }}
                </li>
            </ul>
        </div>
        <NuxtPage />
        <!-- <Footer /> -->
    </div>
</template>
<style>
body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.navigation{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    color: #fff;
    padding: 1rem;
}
ul {
    display: flex;
    justify-content: space-around;
    gap: 20px;
}
ul li {
    list-style: none;
}
ul li a {
    text-decoration: none;
    color: #fff;
}

</style>