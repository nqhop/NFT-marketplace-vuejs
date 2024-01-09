<template>
    <div class="nft-nav-divider"></div>
    <div class="nft-nav">
        <ul>
            <li>
                NFTs
            </li>
            <li>
                Collecitons
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nft-nav-divider {
    height: 1px;
    background: #858584;
    width: 100vw;
    position: relative;
    left: 50%;
    margin-left: -50vw;
}

.nft-nav {}

.nft-nav ul {
    list-style-type: none;
    display: flex;
}

.nft-nav ul li {
    color: #858584;
    height: 60px;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    text-transform: capitalize;
    width: 50%;
    justify-content: center;
    display: flex;
    align-items: center;
}
</style>