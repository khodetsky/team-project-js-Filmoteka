// import { createListOfGenres } from './drawGallery';

// const openDropBtn = document.querySelector('.filter__dropdown-button');
// const dropList = document.querySelector('.filter__dropdown-list');
// // const genreItem = document.querySelectorAll('.filter__dropdown-item');

// //    Клик по кнопке открыть/закрыть
// openDropBtn.addEventListener('click', function (e) {
//   dropList.classList.toggle('filter__visible');
//   if (e.target.dataset.value === 0) {
//     return;
//   } else {
//     redrowMovies
//   }

//   this.classList.add('filter__dropdown-button-active');
// });

// function filter(category, items) {          // items - карточки, которые надо отфильтровать
//   items.forEach((item) => {
//     const isItemFiltered = !item.classList.contains(category);              // содержит ли данная карточка тот класс, который нам нужен
//     if (isItemFiltered) {
//       item.classList.add('hide-test');
//     } else {
//       item.classList.remove('hide-test');
//     }          
//   })
// }                          

// Выбор элемента списка. Запомнить выбранное значение. Закрыть список
// genreItem.forEach((item) => {
//   item.addEventListener('click', function (e) {
//     const currentId = item.dataset.value;  // получаем категорию к которой принадлежит данный жанр
//     console.log(currentId);
//     filter(currentId, cards);      
//     e.stopPropagation();       // остановка клика внутри списка
//     openDropBtn.innerText = this.innerText;
//     openDropBtn.focus();
//     dropList.classList.remove('filter__visible');
//   })
// });

// Клик за пределами списка закрывает список
// document.addEventListener('click', function (e) {
//   if (e.target !== document.querySelector('.filter__dropdown-button')) {
//     dropList.classList.remove('filter__visible');
//     openDropBtn.classList.remove('filter__dropdown-button-active');
//   }
// });

// // Клик при нажатии на 'Esc' закрывает список
// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape') {
//     dropList.classList.remove('filter__visible');
//     openDropBtn.classList.remove('filter__dropdown-button-active');
//   }
// });


