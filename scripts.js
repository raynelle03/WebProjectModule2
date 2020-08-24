const cards = document.querySelectorAll('.memory-card');

function flipCard() {
    let hasFlippedCard = false;
    let firstCard, secondCard;

    this.classList.add('flip');
  

   if (!hasFlippedCard) {
         hasFlippedCard = true;
         firstCard = this;
      }

}

cards.forEach(card => card.addEventListener('click', flipCard));