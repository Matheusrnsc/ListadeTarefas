const button = document.querySelector(".add-task")
const input = document.querySelector(".input-task")
const listaCompleta = document.querySelector(".list-task")


let minhaListaDeItens = []

function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa:input.value,
        concluida: false
    })
    input.value = ""

    mostrarTarefas()

}

function mostrarTarefas() {

    let novaLi = ""
    minhaListaDeItens.forEach((task, index) => {
        novaLi = novaLi + `
        <li class="task ${task.concluida && 'done'}">
            <img src="./img/check-mark_5290058.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">
            <p>${task.tarefa}</p>
            <img src="./img/delete_6861362.png" alt="Tarefa-para-lixeira" onclick="deletarItem(${index})">
        <li>
        
        `
    })
    
listaCompleta.innerHTML = novaLi

localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}
function concluirTarefa(index){
console.log(index)
minhaListaDeItens[index].concluida =  !minhaListaDeItens[index].concluida
mostrarTarefas()
}

function deletarItem(index){
    minhaListaDeItens.splice(index,1)
    mostrarTarefas()
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    if(tarefasDoLocalStorage){
        minhaListaDeItens= JSON.parse(tarefasDoLocalStorage)
    }
  

    mostrarTarefas()
}
recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)   

