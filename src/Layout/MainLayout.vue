<template>
    <a-layout class="wrapper">
        <MainHeader />
        <MainContainer />
        <MainFooter />
    </a-layout>
</template>
<script lang="ts" setup>
import MainContainer from './components/MainContainer.vue'
import MainFooter from './components/MainFooter.vue'
import MainHeader from './components/MainHeader.vue'
</script>
<style scoped>
.wrapper {
    height: 100%;
}
.container {
    display: flex;
    flex-direction: column;
    padding: 0px 50px;
}
#components-layout-demo-top-side .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side .logo {
    float: right;
    margin: 16px 0 16px 24px;
}

.site-layout-background {
    background: #fff;
}
</style>
