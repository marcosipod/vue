const vm1 =new Vue({
    el: 'main',
    data:{
        tareas:[
            {titulo: 'Hacer la compra', completado: false},
            {titulo: 'Aprender Vue.js', completado: false},
            {titulo: 'Aprender Firebase', completado: false},
            {titulo: 'Dominar ES6', completado: false},
            {titulo: 'Salir a correr', completado: false},
        ]
    },

    methods:{
        completarTarea: function (tarea) {
            tarea.completado = !tarea.completado;
           // console.log(tarea);
        }
    },
    computed:{
        tareasCompletadas(){
            return  this.tareas.filter((tarea) => tarea.completado);
        }
    }
});

//estudiar completo data binding