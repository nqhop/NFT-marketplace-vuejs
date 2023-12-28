<template>
    <div class="hero-section">
        <div class="hero-section-text col-half">
            <p class="title">Discover digital art & Collect NFTs</p>
            <p class="desc">
                NFT marketplace UI created with Anima for Figma. Collect, buy and sell
                art from more than 20k NFT artists.
            </p>
            <div class="get-started-btn">
                <base-button name="Get started" :icon="rocketImage" />
            </div>

            <div class="quantity-statics">
                <div class="total-sale col-third">
                    <p class="quantity">240k+</p>
                    <p class="desc">Total Sale</p>
                </div>
                <div class="auctions col-third">
                    <p class="quantity">100k+</p>
                    <p class="desc">Auctions</p>
                </div>
                <div class="artists col-third">
                    <p class="quantity">240k+</p>
                    <p class="desc">Artists</p>
                </div>
            </div>
        </div>
        <div class="hero-section-img col-half">q</div>
        
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
    display: flex;
    padding: 80px 0px;
    justify-content: center;
    align-items: center;
    gap: 30px;
    align-self: stretch;

    background: #2b2e41;
}

.hero-section .title {
    /* font-family: 'Work Sans'; */
    font-size: 67px;
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
    background: yellow;
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
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    /* 39.2px */
    text-transform: capitalize;
}

.quantity-statics .desc {
    font-size: 23.99px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    /* 38.384px */
    text-transform: capitalize;
}
</style>
