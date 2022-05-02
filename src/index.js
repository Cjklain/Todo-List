import './styles/style.css';
import idMaker from './id';
import {fadeForCard, hideCard} from './card';
import cardMaker from './cardMaker';

const nameInput = document.getElementById('Name');
const addButton = document.querySelector('.add-project');
const divProjects = document.querySelector('.projects')

class Project{
    constructor(name){
        this.name = name;
        this.id = idMaker();
        this.displayProject = this.displayProject.bind(this);
        this.deleteProject = this.deleteProject.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.tasks = [];
    }
    addToShell(){
        const div = document.createElement('div')
        div.classList.add('project')
        div.innerText = this.name
        div.dataset.id = this.id
        divProjects.appendChild(div)
        this.displayProject();
        div.addEventListener('click', this.displayProject)
        div.addEventListener('click', this.markAsSelected)
    }
    displayProject(){
        const main = document.querySelector('main')
        const html = cardMaker(this.name)
        main.innerHTML = html
        this.generateTask();
        fadeForCard();
        const deleteButton = document.querySelector('.delete');
        deleteButton.addEventListener('click',this.deleteProject)
        const addTaskButton = document.querySelector('.task-add')
        addTaskButton.addEventListener('click',this.handleAddTask)

    }
    markAsSelected(){
        const divProject = document.querySelectorAll('.project')
        divProject.forEach(project=>{
            project.classList.remove('selected');
            if(project===this){
                project.classList.add('selected')
            }
        })
    }
    deleteProject(){
        const toDelete = document.querySelector(`[data-id="${this.id}"]`)
        divProjects.removeChild(toDelete);
        hideCard()
    }
    handleAddTask(){
        const taskName = document.getElementById('task-name')
        if(taskName.value=== '')return
        let checkforDouble = false
        checkforDouble = this.tasks.find(task=> task.Name === taskName.value);
        if(checkforDouble)return
        let taskObj = {}
        taskObj["Name"] = taskName.value
        taskObj["checked"] = false
        this.tasks.push(taskObj)
        this.generateTask()
        taskName.value = ''
    }
    generateTask(){
        const tasksDiv = document.querySelector('.tasks');
        const html = this.tasks.map(task => `
        <div class="task">
        <input type="checkbox" ${task.checked ? 'checked' : ""}>
        <div class="text">${task.Name}</div>
        <svg class="delete-task" style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,13H5V11H19V13Z" />
        </svg>
        </div>`).join('');
        tasksDiv.innerHTML = html
        const checkboxsEl = tasksDiv.querySelectorAll('input[type=checkbox]')
        checkboxsEl.forEach(checkbox => checkbox.addEventListener('change',this.handleCheckbox))
        const deleteIcons = tasksDiv.querySelectorAll('.delete-task')
        deleteIcons.forEach(icon => icon.addEventListener('click',this.handleDelete))

    }
    handleCheckbox(e){
        const currentTaskName = e.currentTarget.parentElement.querySelector('.text').innerText
        const taskToChange = this.tasks.find(task => task.Name === currentTaskName)
        taskToChange.checked = !taskToChange.checked
    }
    handleDelete(e){
        const currentTaskName = e.currentTarget.parentElement.querySelector('.text').innerText;
        this.tasks = this.tasks.filter(task => task.Name != currentTaskName);
        this.generateTask();
    }
}


addButton.addEventListener('click', addProject)

let projectSheel = []
console.log(projectSheel);
function addProject(e){
    if(nameInput.value === '') return
    const project = new Project(nameInput.value)
    projectSheel.push(project)
    nameInput.value = '';
    project.addToShell()
    if(projectSheel.length>=9){
        alert('sorry you reach limit')
    }
}

