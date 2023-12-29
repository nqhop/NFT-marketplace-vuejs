<template>
    <div class="how-item scale-transition">
        <img :src="howImage" alt="">
        <div class="how-item-info">
            <div class="how-item-info-title">
                {{ title }}
            </div>
            <div class="how-item-info-desc">
                {{ desc }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["howImage", "title", "desc"]
}
</script>

<style scoped>
.how-item {
    max-width: 315px;
    padding: 10px 30px 30px 30px;
    background-color: var(--Background---Secondary);
    border-radius: 20px;
}

.how-item img{
    width: 100%;
}
.how-item-info-title {
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    /* 30.8px */
    text-transform: capitalize;
}

.how-item-info-desc {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
}
</style>