export default cardMaker

function cardMaker(name){
    const html = `
    <div class="card open">
<div class="card-head">
    <div class="card-name">
        <h2 class="card-title">${name}</h2>
    </div>
    <div class="options">
        <svg class="delete" style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
        </svg>
        </button>
    </div>
</div>
<div class="card-body">
    <div class="card-add">
        <h4>Add task:</h4>
        <input type="text" name="task-name" id="task-name">
        <svg class="task-add" style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
    </div>
    <div class="tasks">
        <div class="task">
            <input type="checkbox">
            <div class="text">Task 1</div>
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,13H5V11H19V13Z" />
            </svg>
        </div>
        <div class="task">
            <input type="checkbox">
            <div class="text">Task 3</div>
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,13H5V11H19V13Z" />
            </svg>
        </div>
        <div class="task">
            <input type="checkbox">
            <div class="text">Task 3</div>
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,13H5V11H19V13Z" />
            </svg>
        </div>
    </div>
</div>
</div>`
return html

}