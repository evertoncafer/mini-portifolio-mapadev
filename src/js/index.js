/*  
    OBJETIVO - quando clicarmos na aba temos que mostrar o 
    conteudo da aba que foi clicada pelo usuario e esconder o 
    conteudo da ba anterior

    - Passo 1 - Dar um jeito de pegar os elementos que representam
    as abas no HTML

    - Passo 2 - Dar um jeito de identificar o clique no elemento da aba

    - Passo 3 - quando o usuario clicar, desmarcar a aba selecionada

    - Passo 4 - Marcar a aba clicada como selecionado

    - Passo 5 - Esconder o conteudo anterior

    - Passo 6 - Mostrar o conteudo da aba selecionada

*/

// - Passo 1
//console.log(document.querySelectorAll(".aba"));

const abas = document.querySelectorAll(".aba");
//console.log(abas);

// - Passo 2
abas.forEach(aba => { 
    aba.addEventListener("click", function(){
        //console.log("cliclou na aba", aba);
        
        //clasula de guarda
        if(aba.classList.contains("selecionado")){return;}
        //true = encerra o comando
        selecionarAba(aba);
        mostrarInformacoesDaAba(aba);
        
    });
});

function selecionarAba(aba){
    // - Passo 3
    const abaSelecionada = document.querySelector(".aba.selecionado");
            
    abaSelecionada.classList.remove("selecionado");

    // - Passo 4
    aba.classList.add("selecionado");

}//FIM FUNCTION

function mostrarInformacoesDaAba(aba){
    // - Passo 5
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    //console.log("informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    // - Passo 6
    // const idDoElementoDeInformacoesDaAba = "informacao-" + aba.id;
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;
    console.log(idDoElementoDeInformacoesDaAba);
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
    informacaoASerMostrada.classList.add("selecionado");

}//FIM FUNCTION