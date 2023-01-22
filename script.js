const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

//Toda vez que o button for clicado vai adicionar a função add
button.addEventListener('click', add)

function add(){
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  //Verifica se o dia já existe
  //dayExists função da biblioteca
  const dayExists = nlwSetup.dayExists(today)

    //Se o valor for false não irá executar essa condição
  if(dayExists){
    alert("Dia já incluso 🔴🔴")
    return
  }

  alert("Dia adicionado com sucesso 🟢🟢")
  nlwSetup.addDay(today)
}

//Toda vez que algo for alterado no meu form irá ser acionado a função save
form.addEventListener("change", save)

function save(){
  //Irá salvar o dado como uma string
   localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

//Irá transformar o a string em um objeto
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} //Caso der erro irá colocar um objeto vazio
nlwSetup.setData(data)
nlwSetup.load()