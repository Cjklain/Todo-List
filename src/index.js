import './styles/style.css';
import idMaker from './id';
import displayCard from './card';

const nameInput = document.getElementById('Name');
console.log(nameInput);
const addButton = document.querySelector('.add-project');
console.log(addButton);

const divProjects = document.querySelector('.projects')

const cardTitle = document.querySelector('.card-title')
console.log(cardTitle);

let projectSheel = []

class Project{
    constructor(name){
        this.name = name;
        this.id = idMaker();
        this.displayProject = this.displayProject.bind(this)
    }
    addToShell(){
        const div = document.createElement('div')
        div.classList.add('project')
        div.innerText = this.name
        divProjects.appendChild(div)
        div.addEventListener('click', this.displayProject)
        div.addEventListener('click', this.markAsSelected)
    }
    displayProject(){
        cardTitle.textContent = this.name

        displayCard();
        console.log(this);
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
    
}


addButton.addEventListener('click', addProject)

function addProject(e){
    if(nameInput.value === '') return
    const project = new Project(nameInput.value)
    projectSheel.push(project)
    nameInput.value = '';
    console.log(projectSheel);
    // displayProject(project)
    project.addToShell()
    if(projectSheel.length>=9){
        alert('sorry you reach limit')
    }
}

