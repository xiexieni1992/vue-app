<template>
    <div class="page">
        <div>
            {{ pageParam }}
            <mt-button @click="handleButtonClick">Click Me</mt-button>
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
            handleButtonClick () {
                this.$toast('Hello world!');
            }
        }
    }
    
</script>

<style scoped>

</style>
