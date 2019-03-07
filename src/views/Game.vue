<template>
    <div class="game container-fluid">
        <div v-if="game._id && (game._dragon.currentHP>0 && game._champion.hp > 0)" class="row">
            <div class="col-6">
                <div class="card mb-3">
                    <img :src="game._champion.imgUrl" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{game._champion.name}}</h5>
                        <p class="card-text">
                            <button v-for="(damage, attackName) in game._champion.attacks"
                                @click="attack(attackName)">{{attackName}} :
                                {{damage}}</button>
                        </p>
                        <p class="card-text"><small class="text-muted">HP {{game._champion.hp}}</small></p>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card mb-3">
                    <img :src="game._dragon.imgUrl" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{game._dragon.name}}</h5>
                        <p class="card-text"><small class="text-muted">HP {{game._dragon.currentHP}} /
                                {{game._dragon.maxHP}}</small></p>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <ul>
                    <li v-for="action in game.history">{{action}}</li>
                </ul>
            </div>
        </div>
        <div class="row" v-else>
            <div v-if="game._id" class="col">
                <h3>GAME OVER!!!</h3>
                <p v-if="game._dragon.currentHP>0">YOU LOSE</p>
                <p v-else>YOU WIN</p>
                <router-link :to="{name: 'home'}">PLAY AGAIN!</router-link>
            </div>
            <div v-else>
                <p>loading.....</p>
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        name: 'game',
        props: ['id'],
        mounted() {
            if (!this.$store.state.game._id) {
                this.$store.dispatch('getGame', this.id)
            }
        },
        computed: {
            game() {
                return this.$store.state.game
            }
        },
        methods: {
            attack(name) {
                this.$store.dispatch('attack', { attack: name, id: this.id })
            }
        }
    }

</script>

<style>


</style>