new Vue({
    el: '#desafio',
    data: {
        nome: 'Luiz Rodriguez Fantini',
        idade: 40,
        imagem: 'https://www.localizahertz.com/brasil-site/pt-br/rede-de-agencias/PublishingImages/Curitiba/curitiba-cabecalho.jpg'
    },
    methods: {
        rand: function() {
            return Math.random();
        }
    }

})