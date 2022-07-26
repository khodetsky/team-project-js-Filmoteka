// const openDropBtn = document.querySelector('.filter__dropdown-button');
// const dropList = document.querySelector('.filter__dropdown-list');
// const genreItem = document.querySelectorAll('.filter__dropdown-item');

// //    Клик по кнопке открыть/закрыть
// openDropBtn.addEventListener('click', function () {
//   dropList.classList.toggle('filter__visible');
//   this.classList.add('filter__dropdown-button-active');
// });

// // Выбор элемента списка. Запомнить выбранное значение. Закрыть список
// genreItem.forEach(function (item) {
//   item.addEventListener('click', function (e) {
//     e.stopPropagation();       // остановка клика внутри списка
//     openDropBtn.innerText = this.innerText;
//     openDropBtn.focus();
//     dropList.classList.remove('filter__visible');
//   })
// });

// // Клик за пределами списка закрывает список
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