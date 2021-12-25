const treeBtn = document.getElementById('tree-btn')
const presentBtn = document.getElementById('present-img')


function btnToggle() {
    treeBtn.classList.add('hide')
    presentBtn.classList.add('show')

}

treeBtn.addEventListener('click', btnToggle)

