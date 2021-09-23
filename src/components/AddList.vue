<template>
    <div class="add-list-block">
        <font-awesome-icon icon="plus-circle" class="icon" />
        <div @click="addList">Add List</div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'addList'
            ])
        }
    }
</script>

<style scoped>
    .add-list-block {
        display: flex;
        cursor: pointer;
    }
    .icon {
        margin-right: 5px;
        color: rgb(77, 76, 76);
    }
</style>