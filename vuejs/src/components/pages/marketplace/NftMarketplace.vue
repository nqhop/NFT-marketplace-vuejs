<template>
    <div class="marketplace">
        <div class="grid wide">
            <the-browse-vue />
            <nft-navigation-vue @change-nft-is-selected="changeNftsIsSelected" :nftsIsSelected="nftsIsSelected"/>
            <nft-list v-if="nftsIsSelected" />
            <nft-collection-vue v-else />
        </div>
    </div>
</template>

<script>
import TheBrowseVue from './TheBrowse.vue'
import NftNavigationVue from './NftNavigation.vue';
import NftList from './NftList.vue';
import NftCollectionVue from './NftCollection.vue';
export default {
    components: { TheBrowseVue, NftNavigationVue, NftList, NftCollectionVue },
    data() {
        return {
            nftsIsSelected: true
        }
    },
    methods: {
        changeNftsIsSelected(nftsIsSelected) {
            this.nftsIsSelected = nftsIsSelected
        }
    },
}
</script>