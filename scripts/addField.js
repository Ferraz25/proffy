// Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)

//Executar um ação
function cloneField(){
    //Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//boolean: true ou false

    //pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')//neste caso, vai procurar tudo que for tag input

    //para cada campo, limpar
    fields.forEach(function(field) {
        //pega o field do momento e limpa ele
        field.value = ""
    })

    //Colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)// cria um ramo filho
}