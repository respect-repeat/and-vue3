<template>
    <a-layout-content class="container">
        <BreadCrumb />
        <a-layout style="padding: 24px 0; background: #fff">
            <SideBar />
            <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
    </a-layout-content>
</template>
<script setup lang="ts">
import BreadCrumb from './BreadCrumb.vue'
import SideBar from './SideBar.vue'
</script>
<style></style>
