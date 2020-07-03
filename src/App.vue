<template>
    <div id="app" class="">
        <main>
            {{teste}}

            <form action="" @submit="save">
                <h3>form</h3>
                <div>
                    <span>logradouro</span>
                    <input type="text" v-model=endereco.logradouro>
                </div>
                <div>
                    <span>numero</span>
                    <input type="text" v-model=endereco.numero>
                </div>
                <div>
                    <span>bairro</span>
                    <input type="text" v-model=endereco.bairro>
                </div>
                <div>
                    <span>cidade</span>
                    <input type="text" v-model=endereco.cidade>
                </div>
                <button type="submit">SAVE</button>
            </form>     
        </main>
    </div>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            teste:"estou testando",
            endereco:{
                logradouro:"",
                numero: 0,
                bairro: "",
                cidade: ""
            },
            data: {}
        };
    },
    created: function() {
        let self = this;
        // this.teste = "n testei"
        // this.$http.get('http://localhost:3000/tabela').then(response => {
        //     self.data = response.body;
        // }, response => {
        //     // error callback
        // });
    },
    methods:{
        save: function(e){
            e.preventDefault();
            let self = this;
            this.$http.post('http://localhost:3000/tabela',self.endereco).then(response => {
                alert("salvo");
                console.log(response);

            }, response => {
                alert("erro");
                console.log(response);
                
            });
        }
    }
};
</script>

<style lang="css">
main{
    text-align: center;
    margin-left: 200px;
    background-color: aquamarine;
    color: black;
    font-size: 3rem;
}
</style>