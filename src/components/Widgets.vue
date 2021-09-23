<template>
    <div class="block">
        <font-awesome-icon :icon="data.icon" class="icon" />
        <div class="text">{{ data.text }}</div>
        <div class="value">{{ data.value }}</div>
    </div>
</template>

<script>
    export default {
        props: {
            data: {
                type: Object,

            }
        },

        data () {
            return {}
        }
    }
</script>

<style scoped>
    .block {
        position: relative;
        border: 1px solid black;
        border-radius: 8px;
        padding: 10px;
        margin-right: 10px;
    }
    .value {
        position: absolute;
        margin-top: -46px;
        right: 10px;
    }
    .text {
        margin-top: 10px;
    }
</style>