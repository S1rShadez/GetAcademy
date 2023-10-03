// model
let taskList = [];
let taskBeingEdited = 0;

//taskList.push({taskDesc: "bake kake", isDone: true, isDoneDate: "2025-10-03", id: taskList.length, editMode: false, person: "Arthur", endDate: "2025-10-05", createdDate: new Date().toISOString().slice(0, 10)});


// view
updateView(); //importante
function updateView() {
    document.getElementById('app').innerHTML =
    /*HTML*/`
    <table>
        <tr>
            <th>Oppgave</th>
            <th>Ansvar</th>
            <th>Frist</th>
            <th>Gjort</th>
            <th>Gjort dato</th>
            <th>Opprettet</th>
        </tr>
        ${loadTasks() || ''}
    </table> 
    <input id="taskInput" type="text" placeholder="Skriv oppgave her">
    <input id="personInput" type="text" placeholder="Ansvarsperson her">
    <span>Frist: </span><input id="dateInput" type="date">
    <button onclick="addTask()">Legg til</button>
    `;
}

// controller
function addTask(){
    let taskDesc = document.getElementById('taskInput').value; 
    let isDone = false;
    let person = document.getElementById('personInput').value;
    let endDate = new Date(document.getElementById('dateInput').value).toISOString().slice(0, 10);
    taskList.push({taskDesc, isDone, id: taskList.length, editMode: false, person, endDate, createdDate: new Date().toISOString().slice(0, 10)});
    saveLocalStorage();
    updateView();
}

function loadTasks(){
    let tempList = '';
    for (let i = 0; i < taskList.length; i++) {
        tempList += `
        <tr><td>${isEditMode(taskList[i], "desc")}</td>
        <td>${isEditMode(taskList[i], "person")}</td>
        <td>${isEditMode(taskList[i], "endDate")}</td>
        <td><input type="checkbox" ${taskIsDone(taskList[i])} id="${taskList[i].id}" onchange="checkboxCheck(this)"/></td>
        <td>${convertDate(taskList[i].isDoneDate)}</td>
        <td>${convertDate(taskList[i].createdDate)}</td>
        <td><button id="${taskList[i].id}" onclick="taskRemove(this)">Slett</button></td>
        <td><button id="${taskList[i].id}" ${isEditMode(taskList[i], "editButton")}</td>`;
    }
    return tempList;
}

function isEditMode(task, taskType){
    if(taskType == "desc") return task.editMode ? `<input id="input${task.id}" type="text" value="${task.taskDesc}" />` : task.taskDesc;
    if(taskType == "person") return task.editMode ? `<input id="inputPerson${task.id}" type="text" value="${task.person}" />` : task.person;
    if(taskType == "endDate") return task.editMode ? `<input id="inputEndDate${task.id}" type="date" value="${task.endDate}" />` : convertDate(task.endDate);
    if(taskType == "editButton") return task.editMode ? `onclick="saveEdit(this)">Lagre</button>` : `onclick="taskEdit(this)">Rediger</button>`;
}

function taskIsDone(task){
    return task.isDone ? "checked='checked'" : '';
}

function checkboxCheck(checkBox){
    if(checkBox.checked){
        taskList[checkBox.id].isDone = true;
        taskList[checkBox.id].isDoneDate = new Date().toISOString().slice(0, 10);
    }
    else if(!checkBox.checked){
        taskList[checkBox.id].isDone = false;
        taskList[checkBox.id].isDoneDate = '';
    }
    saveLocalStorage();
    updateView();
}

function taskRemove(selectedTask){
    if(taskBeingEdited)return;
    let idNr = parseInt(selectedTask.id);
    taskList.splice(idNr, 1);
    for(let i = idNr; i < taskList.length; i++){
        taskList[i].id = i;
    }
    saveLocalStorage();
    updateView();
}

function taskEdit(selectedTask){
    if(taskBeingEdited)return;
    taskList[selectedTask.id].editMode = true;
    taskBeingEdited = 1;
    saveLocalStorage();
    updateView();
}

function saveEdit(selectedTask){
    taskBeingEdited = 0;
    taskList[selectedTask.id].taskDesc = document.getElementById(`input${selectedTask.id}`).value;
    taskList[selectedTask.id].person = document.getElementById(`inputPerson${selectedTask.id}`).value;
    taskList[selectedTask.id].endDate = document.getElementById(`inputEndDate${selectedTask.id}`).value;
    taskList[selectedTask.id].editMode = false;
    saveLocalStorage();
    updateView();
}

function convertDate(inputDate){
    let date = new Date(inputDate).toLocaleDateString();
    if (date == "Invalid Date")return '';
    return date;
}

function saveLocalStorage(){
    let stringArray = JSON.stringify(taskList);
    localStorage.setItem('TaskArray', stringArray);
    //console.log(stringArray);
}

function loadLocalStorage(){
    if(!localStorage.getItem('TaskArray'))return;
    let storedArray = JSON.parse(localStorage.getItem('TaskArray'));
    //console.log(storedArray);
    taskList = storedArray;
    updateView();
}

function clearLocalStorage(){
    localStorage.removeItem('TaskArray');
}