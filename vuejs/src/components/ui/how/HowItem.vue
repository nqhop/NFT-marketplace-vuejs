<template>
    <div class="how-item scale-transition f-d">
        <img class="size-of-image" :src="howImage" alt="">
        <div class="how-item-info">
            <div class="how-item-info-title f-s-main-desc">
                {{ title }}
            </div>
            <div class="how-item-info-desc f-s-component-desc">
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
    /* padding: 10px 30px 30px 30px; */
    padding: 20px;
    background-color: var(--Background---Secondary);
    border-radius: 20px;
    display: flex;
    margin-bottom: 20px;
}

.how-item-info-title {
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    /* 30.8px */
    text-transform: capitalize;
    margin-bottom: 10px;
}

.how-item-info-desc {
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
}
</style>