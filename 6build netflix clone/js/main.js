//icons
const tabItems = document.querySelectorAll('.tab-item');

//contents
const tabContentItems = document.querySelectorAll('.tab-content-item');

//functions
function selectItem(e){
    removeBorder();
    removeShow();
    //add border
    addBorder(this);

    //grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    
    //add show class
    tabContentItem.classList.add('show');
}
function removeBorder(){
    tabItems.forEach(item => {
        item.style.borderBottom = "none";
    });
}
function removeShow(){
    // tabItems.o
    tabContentItems.forEach(item => item.classList.remove('show'));
}
function addBorder(e){
    e.style.borderBottom = '#e50914 4px solid';
}

//event listener
tabItems.forEach(item => item.addEventListener('click',selectItem));
