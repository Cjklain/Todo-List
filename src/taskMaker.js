export default taskMaker

function taskMaker(name){
    const html = `
    <div class="task">
    <input type="checkbox">
    <div class="text">${name}</div>
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
    </svg>
    </div>`
    return html
}