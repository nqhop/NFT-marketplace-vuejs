<template>
    <div class="marketplace">
        <div class="grid wide">
            <the-browse-vue />
            <nft-navigation-vue/>
            <!-- <router-view name="nft"></router-view> -->
        </div>
    </div>
</template>

<script>
import TheBrowseVue from './TheBrowse.vue'
import NftNavigationVue from './NftNavigation.vue';
export default {
    components: { TheBrowseVue, NftNavigationVue }
}
</script>

<style scoped>
/* .marketplace{
    margin-top: 80px;
    margin-bottom: 80px;
} */
</style>