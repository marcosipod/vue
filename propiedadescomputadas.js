new Vue({
    el: 'main',
    data: {
        "mensaje": 'Hola Mundo :) !',
        "nuevaTarea": null,
        "tareas": [{
            "titulo": 'Aprender Vue.js',
            "prioridad": true,
            "antiguedad": 23,
        },
            {
                "titulo": 'Aprender ES6',
                "prioridad": false,
                "antiguedad": 135,
            },
            {
                "titulo": 'Publicar algo todos los dias',
                "prioridad": true,
                "antiguedad": 378,
            }]
    },

    method: {
        agregarTarea() {
            this.tareas.unshift({
                titulo: this.nuevaTarea,
                prioridad: false,
                antiguedad: 0,
            });
            this.nuevaTarea = null;
        }
    },
    computed: {
        mensajeAlReves: function () {
            return this.mensaje.split('').reverse().join('');

        },
        tareasConPrioridad() {
            return this.tareas.filter(function (tarea) {
                return tarea.prioridad;
            });
        },
        //ordenar de mayor a menor las tareas
        tareasPorAntiguedad(){
            return this.tareas.sort((a, b)=> b.antiguedad - a.antiguedad)
        }
    }
});