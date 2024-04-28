const inputTextValue =  document.querySelector('.task-text')
const btnAddTask =  document.querySelector('.btn-add-task')
const taskList =  document.querySelector('.task-list')
const btnLiList =  document.querySelector('.btn-li-list')

function addNewTask(){
    const text = inputTextValue.value
    const li =  document.createElement('li')
    const btnDel =  document.createElement('button')
    const btnDone =  document.createElement('button')


    btnDel.setAttribute('class','btn-li-list')
    btnDel.append(`${'✖'}`);
    btnDel.addEventListener('click',function(){deleteTask(li)})
    
    btnDone.setAttribute('class','btn-li-done')
    btnDone.append(`${'✓'}`);
    btnDone.addEventListener('click',function(){doneTask(li)})
    

    li.append(text)
    li.append(btnDel)
    li.append(btnDone)
    taskList.append(li)
    inputTextValue.value = ''
}

function deleteTask(li){
    li.remove()
}
function doneTask(li){
    li.setAttribute('class','done-li')
}


btnAddTask.addEventListener('click',addNewTask)
