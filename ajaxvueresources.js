new Vue({
    el: 'main',
    mounted() {
        this.cargarPersonas();
    },
    data:{
        personas: []
    },
    methods: {
        cargarPersonas: function () {
            this.$http.get('https://randomuser.me/api/?results=20')
                .then((respuesta) => {
                    //console.log(respuesta);
                    this.personas = respuesta.body.results;
                });
        }
    }
});