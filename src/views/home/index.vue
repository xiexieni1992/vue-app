<template>
    <div class="page">
        <div>
            {{ pageParam }}
        </div>
    </div>
</template>
    
<script>
    import { homeBrandList } from '@api/homeApi'

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
                //  console.log(res);
                homeBrandList().then( (res) => {
                    console.log(res);
                }).catch( (res) => {

                })
            },
        }
    }
    
</script>

<style scoped>

</style>
