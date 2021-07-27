//side icons
const sideItems = document.querySelectorAll('a');



function selectItem(e){
    removeBorder();

    addBorder(this);


}

function removeBorder(){
    sideItems.forEach(item => {
        item.style.background = "#fff";
    });
}

function addBorder(e){
    // e.style.borderBottom = '#e50914 4px solid';
    e.style.background = '#fff'
}

sideItems.forEach(item=>item.addEventListener('click',selectItem));