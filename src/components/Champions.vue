<template>
    <div class="champions col-6">
        <div class="row">
            <div v-for="champion in champions" class="col-6">
                <div @click="setActiveChampion(champion)" class="card border"
                    :class="{'border-danger': champion.id == activeChampion.id}">
                    <img :src="champion.imgUrl" class="card-img-top" alt="...">
                    <div class="card-body">
                        <hr>
                        <h5 class="card-title">{{champion.name}}</h5>
                        <p class="card-text">{{champion.race}} : {{champion.class}}
                            <br> HP: {{champion.hp}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'champions',
        data() {
            return {

            }
        },
        computed: {
            champions() {
                return this.$store.state.champions
            },
            activeChampion() {
                return this.$store.state.activeChampion
            }
        },
        methods: {
            setActiveChampion(champ) {
                this.$store.dispatch('setActiveChampion', champ)
            }
        }
    }

</script>

<style>
    .card {
        cursor: pointer;
    }
</style>