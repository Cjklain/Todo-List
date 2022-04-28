import './styles/style.css';
import idMaker from './id';
import displayCard from './card';

const nameInput = document.getElementById('Name');
console.log(nameInput);
const addButton = document.querySelector('.add-project');
console.log(addButton);

const divProjects = document.querySelector('.projects')
const deleteButton = document.querySelector('.delete')
console.log(deleteButton);

const cardTitle = document.querySelector('.card-title')


let projectSheel = []

class Project{
    constructor(name){
        this.name = name;
        this.id = idMaker();
        this.displayProject = this.displayProject.bind(this)
        this.deleteProject = this.deleteProject.bind(this)
    }
    addToShell(){
        const div = document.createElement('div')
        div.classList.add('project')
        div.innerText = this.name
        divProjects.appendChild(div)
        this.displayProject();
        div.addEventListener('click', this.displayProject)
        div.addEventListener('click', this.markAsSelected)
        deleteButton.addEventListener('click',this.deleteProject)
    }
    displayProject(){
        cardTitle.textContent = this.name
        console.log(this);
        displayCard()
        
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
        // deleteButton.addEventListener()
        console.log(this);
        // console.log(this.markAsSelected.divProject);
        
    }
    
}


addButton.addEventListener('click', addProject)

function addProject(e){
    if(nameInput.value === '') return
    const project = new Project(nameInput.value)
    projectSheel.push(project)
    nameInput.value = '';
    console.log(projectSheel);

    project.addToShell()
    if(projectSheel.length>=9){
        alert('sorry you reach limit')
    }
}
