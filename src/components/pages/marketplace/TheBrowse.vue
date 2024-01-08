<template>
    <p class="browser-title">
        Browse Marketplace
    </p>
    <p class="browser-desc">
        Browse through more than 50k NFTs on the NFT Marketplace.
    </p>
    <base-search/>
</template>

<script>
import BaseSearch from '../../ui/input/BaseSearch.vue';
export default {
    components: { BaseSearch }
}
</script>

<style scoped>
.browser-title {
    font-size: 51px;
    font-style: normal;
    font-weight: 600;
    line-height: 110%;
    text-transform: capitalize;
}

.browser-desc {
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    margin-top: 10px;
}
</style>