new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert('oi')
        },
        atualizar(e) {
            this.valor = e.target.value
        }
    }
})