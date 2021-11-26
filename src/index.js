import './styles/main.scss'
const allSelectedItems = document.getElementsByClassName('table__second-td_squade')
const selectedItem = document.getElementById('selectAll');
selectedItem.addEventListener('click', () => addSelected(allSelectedItems, selectedItem)

)

const addSelected = (list, mainSelector) => {
    for (let item of list) {
       item.classList.toggle('selected')
    }
    mainSelector.classList.toggle('selected')
}