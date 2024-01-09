<template>
    <div class="m-g-t-b-for-4-6-8">
        <p class="browser-title f-s-main-text">
            Browse Marketplace
        </p>
        <p class="browser-desc f-s-main-desc">
            Browse through more than 50k NFTs on the NFT Marketplace.
        </p>
        <base-search />
    </div>
</template>

<script>
import BaseSearch from '../../ui/input/BaseSearch.vue';
export default {
    components: { BaseSearch }
}
</script>

<style scoped>
.browser-title {
    font-style: normal;
    font-weight: 600;
    line-height: 110%;
    text-transform: capitalize;
}

.browser-desc {
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    margin-top: 10px;
}
</style>