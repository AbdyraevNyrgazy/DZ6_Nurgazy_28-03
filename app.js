// let human = {
//     name:'Nurgazy',
//     age:17,
//     isMarried:true,
//     iq:90,
//     showInfo(){
//         console.log(`${this.name} ${this.iq}`)
//     }
// }
// human.showInfo()
//

const input = document.getElementById('input')
const createButton = document.getElementById('create_button')
const todoList = document.getElementById('todo_list')

const createTodo = () => {
  const div = document.createElement('div')
  const text = document.createElement('h3')
  const div_button = document.createElement('div')
  const deleteButton = document.createElement('button')
  const editButton = document.createElement('button')



  div.setAttribute('class','block_text')
  div_button.setAttribute('class','div_button')
  deleteButton.setAttribute('class','deleteButton')
  editButton.setAttribute('class','editButton')

  deleteButton.innerHTML = 'delete'
  deleteButton.onclick = () => div.remove()

  editButton.innerHTML = 'edit'
  editButton.onclick = () => {
    const editText = prompt(`EDIT ${text.innerHTML}`).trim()
    editText === '' ? alert('нельзя менять на пустоту'): text.innerHTML = editText

  }


  text.innerHTML = input.value
  div_button.append(deleteButton,editButton)
  div.append(text,div_button)

  todoList.prepend(div)

  input.value = ''
}
createButton.onclick = () => createTodo()
window.addEventListener('keydown',(e)=>{
  if(e.code === 'Enter'){
    createTodo()
  }
})