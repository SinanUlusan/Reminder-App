<template>
    <div>
        <font-awesome-icon icon="search" class="search-icon" />
        <input type="text" placeholder="Search" @input=" event => $emit( 'setSearch', event )">
    </div>
</template>

<script>

</script>

<style scoped>
    .search-icon {
        position: absolute;
        margin-top: 7px;
        margin-left: 8px;
        color: gray;
    }
    input {
        height: 25px;
        padding-left: 30px;
        outline: none;
        width: 80%;
    }
</style>