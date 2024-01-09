<template>
    <div class="NFT-highlight-image">
        <!-- <img :src="NFTHighlightImage" alt=""> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            NFTHighlightImage: require("../../../assets/nfts/NFT-Highlight.png"),
        }
    }
}
</script>

<style scoped>
.NFT-highlight-image{
    height: 540px;
    width: calc(100vw - 17px) !important;
    /* background-image: linear-gradient(0deg, #333, #ccc);  */
    background-image: url("../../../assets/nfts/NFT-Highlight.png");
    background-size: 100%;
    background-repeat: no-repeat;
}
</style>