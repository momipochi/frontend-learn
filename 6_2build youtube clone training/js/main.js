//side icons
const tabItems = document.querySelectorAll("a");

//main contents
const mainContents = document.querySelectorAll('.inner-content');

function selectItem(e){
    removeBorder();
    removeShow();
    addBorder(this);

    console.log(this);
    mainContents.classList.add('show');
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


console.log(mainContents);

// tabItems.forEach(item => item.addEventListener('click',selectItem));