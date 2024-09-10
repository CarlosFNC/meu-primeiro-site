function pesquisar(){

let section = document.getElementById ("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value;

if(!campoPesquisa){
    section.innerHTML = "<p>Nada foi encontrado. Voce precisa digitar o nome de um atleta</p>"
    return;
}

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";
let tag = "";


//para cada dado dentro da lista de dados
for(let dado of dados){

    titulo =  dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tag = dado.tag.toLowerCase()

    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa)){

        resultados += `            
        <div class="item-resultado">
             <h2>
                <p>${dado.titulo}</p>
             </h2>
             <p class="descricao-meta">${dado.descricao}</p>
             <a href=${dado.link} target="_blank">Mais informações</a>

             <p><a href=${dado.social} = target="_blank">Instagram</a></p>
        </div>`;
    }

}

if(!resultados){
    resultados = "<p> Nada foi encontrado</p>"
}

section.innerHTML = resultados;
}