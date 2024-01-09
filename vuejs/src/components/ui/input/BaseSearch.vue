<template>
    <div class="wrap-base-search">
        <input placeholder="Search your favourite NFTs" class="base-search" type="text">
        <img :src="MagnifyingGlass" alt="">
    </div>
</template>

<script>
export default {
    data(){
        return{
            MagnifyingGlass: require("../../../assets/icons/MagnifyingGlass.svg")
        }
    }
}
</script>

<style scoped>
.wrap-base-search {
    position: relative;
}

.base-search {
    width: 100%;
    padding: 16px 20px;
    align-items: center;
    gap: 12px;
    height: 60px;
    margin-top: 30px;

    color: #858584;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;

    border-radius: 20px;
    border: 1px solid #3B3B3B;
    background: transparent;

    outline: none;
}
.wrap-base-search img {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 20px;
    top: 50%;
}
</style>