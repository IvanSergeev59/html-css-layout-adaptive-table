import './styles/main.scss';
import { constList } from './js/consts';
const {allOpenedTd, allSelectedItems, selectedItem} = constList;

const addSelected = (list, mainSelector) => {
    for (let item of list) {
       item.classList.toggle('selected')
    }
    mainSelector.classList.toggle('selected')
}


// add or remove light for openedTd
const toggleLightFunc = ( event) => {
    let focusOpenedTd=''

    //find tr where event happen
    if(event.target.classList.contains('opened-td-picture')) { 
        focusOpenedTd = event.target.parentNode.parentNode.cells;
    }
    // light td with the same img
    for (var i = 0; i < focusOpenedTd.length; i++) {
    if(event.target.src===focusOpenedTd[i].firstChild.src)
    focusOpenedTd[i].classList.toggle('focused'); 
    }
}

// choose all tr or remove
selectedItem.addEventListener('click', () => addSelected(allSelectedItems, selectedItem));


allOpenedTd.onmouseover = (event) => {
    toggleLightFunc( event)
}
allOpenedTd.onmouseout = (event) => {
    toggleLightFunc(event)
}


