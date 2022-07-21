export async function addRatingColor() {
   const cardRatingBox = document.querySelectorAll('.card__rating-text');
   for (box of cardRatingBox) {
      if (box.textContent < 3) {
         box.closest('#card-rating').classList.add('red-box')
      } else if (box.textContent >= 3 && box.textContent < 5) {
         box.closest('#card-rating').classList.add('orange-box')
      } else if (box.textContent >= 5 && box.textContent < 7) {
         box.closest('#card-rating').classList.add('yellow-box')
      } else {
         box.closest('#card-rating').classList.add('green-box')
      }
   }
}