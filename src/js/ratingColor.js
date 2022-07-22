export async function addRatingColor() {
   const cardRatingBox = document.querySelectorAll('.gallery__info--vote');
   for (box of cardRatingBox) {
      if (box.textContent < 3) {
         box.closest('.gallery__info--vote').classList.add('red-box')
      } else if (box.textContent >= 3 && box.textContent < 5) {
         box.closest('.gallery__info--vote').classList.add('orange-box')
      } else if (box.textContent >= 5 && box.textContent < 7) {
         box.closest('.gallery__info--vote').classList.add('yellow-box')
      } else {
         box.closest('.gallery__info--vote').classList.add('green-box')
      }
   }
}