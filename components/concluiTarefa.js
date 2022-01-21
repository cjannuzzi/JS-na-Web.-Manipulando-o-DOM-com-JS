//Criando um componente (botão deletar tarefa - componete começa com maiúsculo)
const BotaoConclui = ()=>{
    //Criando um elemento
    const botaoConclui = document.createElement('button')
    //Adicionando uma classe ao botão
    botaoConclui.classList.add('check-button')
    //Adiciona um texto no botão
    botaoConclui.innerText = 'concluir'
    //Criando um evento
    botaoConclui.addEventListener('click', concluirTarefa)

    //Retornar o botão
    return botaoConclui
}

//Criando a função concluir tarefa (Arrow function - função de seta)
const concluirTarefa = (evento) => {
    //Retorna em qual elemento eu cliquei(target - alvo clicado)
    const botaoConclui = evento.target
    //Sobe um nó na árvore do DOM (parentElement - pega o pai do elemento clicado, pai do botão é li)
    const tarefaCompleta = botaoConclui.parentElement
    //Insere envento de rabisco na li
    tarefaCompleta.classList.toggle('done')
}

//exporta o botão concluir com a mesma sintaxe IIFE de protejer o código - Encapsular o código
export default BotaoConclui