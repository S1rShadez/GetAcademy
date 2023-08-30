// model
let taskList = [];
let taskBeingEdited = 0;

taskList.push({taskDesc: "bake kake", isDone: true, id: taskList.length, editMode: false, person: "Arthur", endDate: "31/12/2023", createdDate: new Date().toLocaleDateString()});

// view
updateView();
function updateView() {
    document.getElementById('app').innerHTML =
    /*HTML*/`
    <table>
        <tr>
            <th>Oppgave</th>
            <th>Ansvar</th>
            <th>Frist</th>
            <th>Gjort</th>
            <th>Opprettet</th>
        </tr>
        ${loadTasks() || ''}
    </table> 
    <input id="taskInput" type="text" placeholder="Skriv oppgave her">
    <input id="personInput" type="text" placeholder="Ansvarsperson her">
    <span>Frist: </span><input type="number" min="01" max="31" placeholder="dd"><input type="number" min="01" max="12" placeholder="mm"><input type="number" min="2023" max="2100" placeholder="yyyy">
    <button onclick="addTask()">Legg til</button>
    `;
}

// controller
function addTask(){
    let taskDesc = document.getElementById('taskInput').value; 
    let isDone = false;
    let person = document.getElementById('personInput').value;
    let endDate = '';
    taskList.push({taskDesc, isDone, id: taskList.length, editMode: false, person, endDate, createdDate: new Date().toLocaleDateString()});
    updateView();
}

function loadTasks(){
    let tempList = '';
    for (let i = 0; i < taskList.length; i++) {
        tempList += `
        <tr><td>${isEditMode(taskList[i], "desc")}</td>
        <td>${isEditMode(taskList[i], "person")}</td>
        <td>${taskList[i].endDate}</td>
        <td><input type="checkbox" ${taskIsDone(taskList[i])} id="${taskList[i].id}" onchange="checkboxCheck(this)"/></td>
        <td>${taskList[i].createdDate}</td>
        <td><button id="${taskList[i].id}" onclick="taskRemove(this)">Slett</button></td>
        <td><button id="${taskList[i].id}" ${isEditMode(taskList[i], "editButton")}</td>`;
    }
    return tempList;
}

function isEditMode(task, taskType){
    if(taskType == "desc") return task.editMode ? `<input id="input${task.id}" type="text" value="${task.taskDesc}" />` : task.taskDesc;
    if(taskType == "person") return task.editMode ? `<input id="inputPerson${task.id}" type="text" value="${task.person}" />` : task.person;
    if(taskType == "editButton") return task.editMode ? `onclick="saveEdit(this)">Lagre</button>` : `onclick="taskEdit(this)">Rediger</button>`;
}

function taskIsDone(task){
    return task.isDone ? "checked='checked'" : '';
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
    if(taskBeingEdited)return;
    let idNr = parseInt(selectedTask.id);
    taskList.splice(idNr, 1);
    for(let i = idNr; i < taskList.length; i++){
        taskList[i].id = i;
    }
    updateView();
}

function taskEdit(selectedTask){
    if(taskBeingEdited)return;
    taskList[selectedTask.id].editMode = true;
    taskBeingEdited = 1;
    updateView();
}

function saveEdit(selectedTask){
    taskBeingEdited = 0;
    taskList[selectedTask.id].taskDesc = document.getElementById(`input${selectedTask.id}`).value;
    taskList[selectedTask.id].person = document.getElementById(`inputPerson${selectedTask.id}`).value;
    taskList[selectedTask.id].editMode = false;
    updateView();
}