const vm = new Vue ({
    el: 'main',
    data:{

        //matriz
       laborales : ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],

        //matriz de objetos"
       tareas: [
           {nombre: 'Hacer la compra', prioridad: 'baja'},
           {nombre: 'Aprender Vue y Firebase', prioridad: 'alta'},
           {nombre: 'Ir al gimnasio', prioridad: 'alta'}
       ],
        //Objetos
        persona: {
            nombre : 'Marcos',
            profesion: 'dev',
            ciudad: 'Caracas'
        }
    }
})