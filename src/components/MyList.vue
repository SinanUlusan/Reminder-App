<template>
    <div class="block">
        <font-awesome-icon icon="list" class="icon" />
        <div 
            v-if="!canEdit"
            class="text" 
            @click="editName">
            {{ data.name }}
        </div>
        <input 
            v-if="canEdit"
            name="text"
            class="editing-input"
            type="text"
            v-model="newItemName">
            <font-awesome-icon 
                v-if="canEdit"
                icon="save" 
                class="save-changed-name" 
                @click="saveChangedName"/>
        <div class="value">{{ data.items.length }}</div>
    </div>
</template>

<script>

    import { mapActions } from 'vuex';
    export default {
        props: {
            data: {
                type: Object
            },

            index: {
                type: Number,
                required: true
            }
        },

        data () {
            return {
                canEdit: false,
                newItemName: ''
            }
        },

        methods: {

            ...mapActions([
                'changeItemName',
                'saveChangedName'
            ]),

            editName () {
                this.canEdit = true
            },

            saveChangedName () {
                this.changeItemName( { index: this.index, listName: this.newItemName });
                this.canEdit = false;
            }
        }
    }
</script>

<style scoped>
    .block {
        display: flex;
        position: relative;
        margin-top: 15px;
    }
    .text {
        cursor: pointer;
    }
    svg {
        margin-right: 10px;
        margin-left: 5px;
    }
    .value {
        position: absolute;
        right: 17px;
    }
    .editing-input {
        position: relative;
        bottom: 3px;
    }
    .save-changed-name{
        position: relative;
        right: 25px;
    }
</style>