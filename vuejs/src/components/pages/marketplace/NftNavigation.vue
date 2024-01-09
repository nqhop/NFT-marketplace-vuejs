<template>
    <div class="nft-nav-divider"></div>
    <div class="nft-nav">
        <ul>
            <li @click="changeNftsIsSelectedTrue">
                <div class="scale-transition">
                    <span class="f-s-16-22" :class="nftsIsSelected ? 'nft-nav-title-active' : ''">NFTs</span>
                    <span class="nft-nav-quality d-none-unset"
                        :class="nftsIsSelected ? 'nft-nav-quality-active' : ''">302</span>
                </div>
            </li>
            <li @click="changeNftsIsSelectedFalse">
                <div class="scale-transition">
                    <span class="f-s-16-22" :class="!nftsIsSelected ? 'nft-nav-title-active' : ''">Collecitons</span>
                    <span class="nft-nav-quality d-none-unset"
                        :class="!nftsIsSelected ? 'nft-nav-quality-active' : ''">67</span>
                </div>
            </li>
        </ul>
        <div :class="nftsIsSelected ? 'nft-nav-active-left' : ''"></div>
        <div :class="!nftsIsSelected ? 'nft-nav-active-right' : ''"></div>
    </div>
</template>

<script>
export default {
    props: ["nftsIsSelected"],
    methods: {
        changeNftsIsSelectedTrue() {
            this.$emit("change-nft-is-selected", true)
        },
        changeNftsIsSelectedFalse() {
            this.$emit("change-nft-is-selected", false)
        }
    },
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


.nft-nav ul {
    list-style-type: none;
    display: flex;
}

.nft-nav ul li {
    color: #858584;
    height: 60px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    text-transform: capitalize;
    width: 50%;
    justify-content: center;
    display: flex;
    align-items: center;
}

.nft-nav-quality {
    padding: 5px 10px;
    align-items: center;
    gap: 10px;
    border-radius: 20px;
    background: #3B3B3B;
    margin-left: 16px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    color: #fff;
}

.nft-nav-title-active {
    color: #fff;
}

.nft-nav-active-left,
.nft-nav-active-right {
    width: 50%;
    border-bottom: 2px solid #858584;
    margin-top: -6px;
}

.nft-nav-active-left {
    animation: modal-left .3s ease-out forwards;
}

.nft-nav-active-right {
    animation: modal-right .3s ease-out forwards;
}

.nft-nav-quality-active {
    background: #858584;
}

@keyframes modal-right {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(100%);
    }
}

@keyframes modal-left {
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(0%);
    }
}</style>