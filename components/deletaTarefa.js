//Criando um componente (botão deletar tarefa - componete começa com maiúsculo)
const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target
    //Pega o elemento pai do botãoDeleta que é a li
    const tarefaCompleta = botaoDeleta.parentElement
    //Removendo a li
    tarefaCompleta.remove()

    return botaoDeleta
}
//exporta o botão deleta com a mesma sintaxe IIFE de protejer o código - Encapsular o código
export default BotaoDeleta