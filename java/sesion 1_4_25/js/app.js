const { createApp, ref, reactive } = Vue;

const app = createApp({
    setup(){
        const mensaje = ref('hola mundo con vue 3')
        const tituloClase = ref('titulo')
        const count = ref(0)

        function incrementar(){
            count.value++
        }
        return{ mensaje,tituloClase,count,incrementar};
        
    }
});


//app.component("mi-componente",MiComponente);


app.mount("#app");