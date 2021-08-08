
const mainList = document.querySelector('ul');
console.log(mainList);
const listItems = mainList.querySelectorAll('.item');
console.log(`В списке ${listItems.length} категории`);
const h2Name = mainList.getElementsByTagName('h2');
listItems.forEach((el) => {
    console.log('Категория : ', el.getElementsByTagName('h2')[0].textContent);
    console.log('Количество элементов:', el.getElementsByTagName('li').length)
})
