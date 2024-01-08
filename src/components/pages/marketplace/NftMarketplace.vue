<template>
    <div class="marketplace">
        <div class="grid wide">
            <the-browse-vue />
        </div>
    </div>
</template>

<script>
import TheBrowseVue from './TheBrowse.vue'
export default {
    components: { TheBrowseVue }
}
</script>

<style scoped>
.marketplace{
    margin-top: 80px;
    margin-bottom: 80px;
}
</style>