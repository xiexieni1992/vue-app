<template>
    <div id = "page_home" v-title data-title = "Todo首页">
        <div class = "page">
            <div class="mg-b20">
                {{ pageParam }}
                <mt-button @click="handleButtonClick">vue全家桶链接</mt-button>
            </div>
        </div>
    </div>
</template>
    
<script>
    import { homeBrandList } from '@api/home'

    export default {
        data () {
            return {
                pageParam:'主页',
            }
        },

        mounted () {
            this.init();
        },

        methods:{

            init () {
                homeBrandList().then( (res) => {
                    console.log(res);
                }).catch( (res) => {

                })
            },

            handleButtonClick () {
                this.$router.push( { 'name':'page_todo' } );
            }

        }
    }
    
</script>

<style scoped>

</style>
