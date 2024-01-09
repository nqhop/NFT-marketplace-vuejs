<template>
    <div class="footer">
        <div class="grid wide">
            <div class="row">
                <div class="col l-4 m-12 footer-m-g-t">
                    <div class="row">
                        <div class="col">
                            <div class="footer-nft-marketplace">
                                <img :src="StorefrontPurpleIcon" alt="" />
                                <div class="footer-title">NFT Marketplace</div>
                            </div>
                        </div>
                    </div>
                    <div class="row footer-desc">
                        <div class="col">
                            NFT marketplace UI created with Anima for Figma.
                        </div>
                    </div>
                    <div class="row footer-desc">
                        <div class="col">Join our community</div>
                    </div>
                    <div class="row">
                        <div class="col community-logo">
                            <img :src="discordLogo" alt="">
                            <img :src="youtubeLogo" alt="">
                            <img :src="twitterLogo" alt="">
                            <img :src="instagramLogo" alt="">
                        </div>
                    </div>
                </div>
                <div class="col l-3 m-12 footer-m-g-t">
                    <div class="row footer-title">
                        <div class="col">
                            Explore
                        </div>
                    </div>
                    <div class="row footer-desc">
                        <div class="col">
                            Marketplace
                        </div>
                    </div>
                    <div class="row footer-desc">
                        <div class="col">
                            Rankings
                        </div>
                    </div>
                    <div class="row footer-desc">
                        <div class="col">
                            Connect a wallet
                        </div>
                    </div>
                </div>

                <div class="col l-5 m-12 footer-m-g-t">
                    <div class="row footer-title">
                        <div class="col">
                            Join our weekly digest
                        </div>
                    </div>
                    <div class="row footer-desc">
                        <div class="col">
                            Get exclusive promotions & updates straight to your inbox.
                        </div>
                    </div>
                    <div class="row footer-desc">
                        <div class="col l-12">
                            <base-input-vue />
                        </div>
                    </div>

                </div>
            </div>
            <div class="footer-divider m-t-divider"></div>
            <div class="copyright">
                Copyright © 2024
            </div>
        </div>
    </div>
</template>

<script>
import BaseInputVue from '../ui/input/BaseInput.vue';
export default {
    components: {
        BaseInputVue,
    },
    data() {
        return {
            StorefrontPurpleIcon: require("../../assets/icons/StorefrontPurple.svg"),
            discordLogo: require("../../assets/icons/DiscordLogo.svg"),
            youtubeLogo: require("../../assets/icons/YoutubeLogo.svg"),
            twitterLogo: require("../../assets/icons/TwitterLogo.svg"),
            instagramLogo: require("../../assets/icons/InstagramLogo.svg"),
        };
    },
};
</script>
<style scoped>
.footer {
    /* padding-top: 40px; */
    padding-bottom: 40px;
    background: #3B3B3B;
}

.footer-title {
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
    text-transform: capitalize;
}

.footer-nft-marketplace {
    display: flex;
}

.footer-nft-marketplace img {
    margin-right: 12px;
}

.footer-desc {
    margin-top: 20px;
    color: #ccc;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
}

.community-logo {
    margin-top: 15px;
}

.community-logo img {
    margin-right: 10px;
}

.footer-divider {
    height: 1px;
    background: #858584;
}

.copyright {
    margin-top: 20px;
    color: #CCC;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
}
.footer-m-g-t{
    margin-top: 30px;
}
</style>