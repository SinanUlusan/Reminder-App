<template>
    <div class="container">
        <div class="left-block">
            <search-box></search-box>
            <div v-for="widget in widgets" :key="widget" class="widget-container">
                <widgets :data="widget"></widgets>
            </div>
            <search-box @setSearch="setFilterName"></search-box>
            <div class="my-list-container">
                <div v-for="(list, index) in myList" :key="list" >
                    <my-list :data="list" :index="index"></my-list>
                </div>
            </div>
            <add-list></add-list>
        </div>
        <div class="right-block">
            No Reminders
        </div>
    </div>
</template>

<script>
    import SearchBox from "../components/SearchBox"
    import Widgets from "../components/Widgets"
    import MyList from "../components/MyList"
    import AddList from "../components/AddList"
    import { mapActions, mapGetters } from 'vuex';

    export default {
        components: {
            SearchBox,
            Widgets,
            MyList,
            AddList
        },

        data () {
          return {
             widgets: [
                 {
                    icon: 'calendar',
                    value: 1,
                    text: 'Today'
                 },
                 {
                    icon: 'calendar-day',
                    value: 12,
                    text: 'Scheduled'
                 },
                 {
                    icon: 'home',
                    value: 13,
                    text: 'All'
                 },
                 {
                    icon: 'flag',
                    value: 0,
                    text: 'Flagged'
                 }
            ],
          }
        },

        computed: {
            ...mapGetters ({
                myList: 'getFilteredList'
            })
        },

        methods: {
            ...mapActions([
                'setFilterNameForList'
            ]),

            setFilterName({ target }) {
                this.setFilterNameForList(target.value);
            }
        }
    }
</script>
<style scoped>
    .container {
        width: 960px;
        margin: auto;
        display: flex;
    }

    .left-block {
        flex: 0.5;
    }

    .right-block {
        flex: 1.5;
    }

    .left-block, .right-block {
        padding: 12px;
        border: 1px solid #000200;
    }

    .widget-container {
        margin-top: 10px;
        margin-bottom: 10px;
        width: 50%;
        display: inline-block;
        
    }
    .my-list-container {
        height: 200px;
        margin-bottom: 20px;
        overflow: scroll;
    }
</style>
