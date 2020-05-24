new Vue({
    el: "#app",
    data: {
        playerLife: 100,
        monsterLife: 100,
        running: false,
        logs: []
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        startGame() {
            this.running = true;
            this.playerLife = 100;
            this.monsterLife = 100;
        },
        endGame() {
            this.running = false;
        },
        attack(especial) {
            this.hurt('monsterLife', 6, 11, especial, 'Jogador', 'Monstro', 'player')
            if (this.monsterLife > 0)
                this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
        },
        heal() {
            const heal = this.getRandom(1, 5)
            this.playerLife = Math.min(this.playerLife + heal, 100)
        },
        getRandom(min, max) {
            const value = Math.random() * (max-min) + min
            return Math.round(value)
        },
        hurt(prop, min, max, especial, source, target, cls) {
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[prop] = Math.max(this[prop] - hurt, 0)
            this.registerLog(`${source} atingiu ${target} com ${hurt}`, cls)
        },
        registerLog(text, cls) {
            this.logs.unshift({text, cls})
        }
    },
    watch: {
        hasResult(value) {
            if (value) this.running = false
        }
    }
})