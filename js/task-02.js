
const ingList = document.querySelector('#ingredients');
console.log(ingList);
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const newItems = ingredients.map((el) => {
  const newItem = document.createElement("li");
  newItem.textContent = el;
  return newItem
});
ingList.append(...newItems);
