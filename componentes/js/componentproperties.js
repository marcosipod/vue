Vue.component('autor',{
    props: ['nombre', 'edad'],
    mounted(){
      // las props son accesibles desde this(proxy)
      // console.log(this.nombre);
        console.log(typeof this.edad);
    },
    template:`<div><h1>{{ nombre }}</h1> <button @click = "cambiarProp">Cambiar Prop</button></div>`,
    methods:{
        cambiarProp(){
            this.nombre = this.nombre.toUpperCase();
        }
    }
});
new Vue ({
    el: 'main',
    data:{
        autor:'Marcos Monasterio',
    }
});

//revisar prop en la documentación oficial, no modificar el valor oroginal no mutarlo