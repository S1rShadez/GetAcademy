// model
let taskList = [];
taskList.push({taskDesc: "bake kake", isDone: true, id: taskList.length});

// view
updateView();
function updateView() {
    document.getElementById('app').innerHTML =
    /*HTML*/`
    <table>
        <tr>
            <th>Oppgave</th>
            <th>Gjort</th>
        </tr>
        ${loadTasks() || ''}
    </table> 
    <input id="taskInput" type="text" placeholder="Skriv oppgave her"/><button onclick="addTask()">Legg til</button>
    `;
}

// controller
function addTask(){
    let taskDesc = document.getElementById('taskInput').value; 
    let isDone = false;
    taskList.push({taskDesc, isDone, id: taskList.length});
    updateView();
}

function loadTasks(){
    let tempList = '';
    for (let i = 0; i < taskList.length; i++) {
        tempList += `<tr><td>${taskList[i].editMode ? `<input id="input${taskList[i].id}" type="text" value="${taskList[i].taskDesc}" />` : taskList[i].taskDesc}</td>
        <td><input type="checkbox" ${taskList[i].isDone ? "checked='checked'" : ''} id="${taskList[i].id}" onchange="checkboxCheck(this)"/></td>
        <td><button id="${taskList[i].id}" onclick="taskRemove(this)">Slett</button></td>
        <td><button id="${taskList[i].id}" ${taskList[i].editMode ? `onclick="saveEdit(this)">Lagre</button>` : `onclick="taskEdit(this)">Rediger</button>`}</td>`;
    }
    return tempList;
}

function checkboxCheck(checkBox){
    if(checkBox.checked){
        taskList[checkBox.id].isDone = true;
    }
    else if(!checkBox.checked){
        taskList[checkBox.id].isDone = false;
    }
}

function taskRemove(selectedTask){
    let idNr = parseInt(selectedTask.id);
    taskList.splice(idNr, 1);
    for(let i = idNr; i < taskList.length; i++){
        taskList[i].id = i;
    }
    updateView();
}

function taskEdit(selectedTask){
    let idNr = parseInt(selectedTask.id);
    taskList[selectedTask.id].editMode = true;
    updateView();
}

function saveEdit(selectedTask){
    taskList[selectedTask.id].taskDesc = document.getElementById(`input${selectedTask.id}`).value;
    taskList[selectedTask.id].editMode = false;
    updateView();
}