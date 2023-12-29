<template>
    <div class="hero-section grid wide">
        <div class="row">
            <div class="col l-6 m-6 c-12 hero-section-info">
                <p class="title f-s-main-text">Discover digital art & Collect NFTs</p>
                <p class="desc f-s-main-desc">
                    NFT marketplace UI created with Anima for Figma. Collect, buy and sell
                    art from more than 20k NFT artists.
                </p>
                <div class="get-started-btn">
                    <base-button name="Get started" :icon="rocketImage" />
                </div>

                <div class="quantity-statics">
                    <div class="total-sale col-third">
                        <p class="quantity f-s-main-quantity">240k+</p>
                        <p class="desc f-s-main-quantity-desc">Total Sale</p>
                    </div>
                    <div class="auctions col-third">
                        <p class="quantity f-s-main-quantity">100k+</p>
                        <p class="desc f-s-main-quantity-desc">Auctions</p>
                    </div>
                    <div class="artists col-third">
                        <p class="quantity f-s-main-quantity">240k+</p>
                        <p class="desc f-s-main-quantity-desc">Artists</p>
                    </div>
                </div>
            </div>

            <div class="col l-6 m-6 c-12 hero-section-img">
                <p>aaa</p>
            </div>
        </div>
    </div>


</template>

<script>
import BaseButton from "@/components/ui/buttons/BaseButton.vue";
export default {
    components: {
        BaseButton,
    },
    data() {
        return {
            rocketImage: require("../../../assets/icons/Rocket.svg"),
        };
    },
};
</script>

<style scoped>
.hero-section {
    margin: auto;
    background: #2b2e41;
}

.hero-section-info{
    background-color: #0c1a77;
}


.hero-section .title {
    /* font-size: 67px; */
    font-style: normal;
    font-weight: 600;
    line-height: 110%;
    /* 73.7px */
    text-transform: capitalize;
}

.hero-section .desc {
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    /* 35.2px */
    text-transform: capitalize;
    margin-top: 20px;
}

.hero-section-text {}

.hero-section-img {
    background: rgb(185, 185, 164);
}

.get-started-btn {
    display: inline-block;
    margin-block: 30px;

    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
}

.quantity-statics {
    display: flex;
}

.quantity-statics .quantity {
    /* font-family: 'Space Mono'; */
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    /* 39.2px */
    text-transform: capitalize;
}

.quantity-statics .desc {
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    /* 38.384px */
    text-transform: capitalize;
}
</style>
