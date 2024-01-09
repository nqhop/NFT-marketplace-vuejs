<template>
    <div class="ranking-nav">
        <ul>
            <li v-for="(duration, index) in durations" :key="index">
                {{ duration }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            durations: ["Today", "This Week", "This Month", "All Time"]
        }
    }
}
</script>

<style scoped>
.ranking-nav ul{
    list-style-type: none;
    display: flex;
}
.ranking-nav ul li {
    color: #858584;
    height: 60px;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    text-transform: capitalize;
    width: 25%;
    justify-content: center;
    display: flex;
    align-items: center;
}
</style>