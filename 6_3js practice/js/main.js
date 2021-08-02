const tabItems = document.querySelectorAll('.tab-item');
console.log(tabItems);

const tabContentItems = document.querySelectorAll('.main-content-item');

tabItems.forEach(item=>item.addEventListener('click',selectItem));

function selectItem(){
    removeShow();
    const clickedItem = document.querySelector(`#${this.id}-content`);
    clickedItem.classList.add('show');
}

function removeShow(){
    tabContentItems.forEach(item=>item.classList.remove('show'));
}