Vue.component('mis-tareas', {
  //  props: ['tareas'],
    template: ` <ul><li v-for="tarea in tareas">{{ tarea.title }}</li></ul>`,
    mounted() {
        axios.get('https://jsonplaceholder.typecode.com/todos')
            .then((respuesta) => {
                this.tareas = respuesta.data;
            });
    },
    data() {
        return {
            tareas: [],
        }
    }
});
new Vue({
    el: 'main',
    /* mounted() {
         axios.get('https://jsonplaceholder.typecode.com/todos')
             .then((respuesta) => {
                 this.tareasAjax = respuesta.data;
             });
     },
     data: {
         tareasAjax: [],
         tareasLocales:[
             {title: 'Hacer la compra'},
             {title: 'Aprender Vue'},
             {title: 'Aprender JavaScript ES6'},
         ]
     }*/
});