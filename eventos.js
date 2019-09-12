const vm = new Vue({
    el: 'main',
    data: {
        nuevaTarea: null,
        tareas: [
            'Aprender Vue',
            'Aprender ES6',
            'Publicar algo todos los dias'
        ]
    },

    methods:{
        agregarTarea: function () {
            //this, hace referencia a la instacia Vue
            this.tareas.unshift(this.nuevaTarea);

            //eliminar lo que esta en el input
            this.nuevaTarea = null;
            // console.log('Funciona');
        }
    }
});

//Vanilla JS
/*
function agregarTareas() {
    const input = document.querySelector('input[type=text]');
    vm.tareas.unshift(input.value);
    input.value = '';
}*/
