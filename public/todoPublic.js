let todoForm = document.getElementById('todo')
let input = todoForm.elements['text']
console.log(input)

todoForm.addEventListener("submit",(e)=>{
  e.preventDefault()
  let obj = {text:input.value}
  input.value = ''
console.log('input',obj)
  fetch('/todo',{
    method:'POST',
    headers:{
      'Content-Type':'aplication/JSON',
      'Accept':'aplication/JSON'
    },
    body:JSON.stringify(obj)
  }).then((res)=>res.json())
  .then((info)=>{
    let li = document.createElement('li')
    li.id = info._id
    li.innerHTML = info.text
    todolist.append(li)
  })
})