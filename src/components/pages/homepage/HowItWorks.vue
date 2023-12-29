<template>
    <div class="how-it-works">
        <div class="how-it-works-title">
            How it works
        </div>
        <div class="how-it-works-desc">
            Find out how to get started
        </div>
        <div class="grid wide">
            <div class="row">
                <div class="col l-4 m-4 c-12">
                    <how-item-vue :howImage="walletImage" title="Setup Your wallet"
                        desc="Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner." />
                </div>
                <div class="col l-4 m-4 c-12">
                    <how-item-vue :howImage="createCollectionImage" title="Create Collection"
                        desc="Upload your work and setup your collection. Add a description, social links and floor price." />
                </div>
                <div class="col l-4 m-4 c-12">
                    <how-item-vue :howImage="startEarningImage" title="Start Earning"
                        desc="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others." />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HowItemVue from '@/components/ui/how/HowItem.vue'
import walletImage from "@/assets/hows/wallet.svg"
import createCollectionImage from "@/assets/hows/create-collection.svg"
import startEarningImage from "@/assets/hows/start-earning.svg"
export default {
    components: {
        HowItemVue
    },
    data() {
        return {
            walletImage: walletImage,
            createCollectionImage: createCollectionImage,
            startEarningImage: startEarningImage
        }
    }
}
</script>

<style scoped>
.how-it-works {
    margin: 80px auto;
}

.how-it-works-title {
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    text-transform: capitalize;
}

.how-it-works-desc {
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    /* 35.2px */
    text-transform: capitalize;
    margin-top: 10px;
}
</style>