const vm1 = new Vue({
    el: 'main',
    data: {
        mensaje: 'Instancia Vue 1',
    },

    beforeUpdate(){
      console.log('BeforeUpdate: ', this.mensaje);
    },
    updated(){
        console.log('Update: ', this.mensaje);
    },
    methods: {
        alReves: function () {
            this.mensaje = this.mensaje.split('').reverse().join('');
           // vm2.mensaje = 'Hola desde la instancia 1';
        }
    },
    computed: {
        "mensajeMayusculas"() {
            return this,mensaje.toUpperCase();
        }
    }
}), vm2 = new Vue({
    el: '#app',
    data: {
        mensaje: 'Instancia Vue 2',
    }
});
//leer el capitulo completo de instancias en la pagina