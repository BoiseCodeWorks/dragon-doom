<template>
    <div class="dragons col-6">
        <div class="row">
            <div v-for="dragon in dragons" class="col-6">
                <div @click="setActiveDragon(dragon)" class="card border"
                    :class="{'border-success': dragon.id == activeDragon.id}">
                    <img :src="dragon.imgUrl" class="card-img-top">
                    <div class="card-body">
                        <hr>
                        <h5 class="card-title">{{dragon.name}}</h5>
                        <p class="card-text">HP: {{dragon.maxHP}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'dragons',
        data() {
            return {

            }
        },
        computed: {
            dragons() {
                return this.$store.state.dragons
            },
            activeDragon() {
                return this.$store.state.activeDragon
            }
        },
        methods: {
            setActiveDragon(dragon) {
                this.$store.dispatch('setActiveDragon', dragon)
            }
        }
    }

</script>

<style>


</style>