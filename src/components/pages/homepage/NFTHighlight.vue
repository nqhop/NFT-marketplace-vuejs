<template>
    <div class="NFT-highlightImage">
        <img :src="NFTHighlightImage" alt="">
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

<style scoped></style>