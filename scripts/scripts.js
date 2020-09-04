const cards = document.querySelectorAll('.memory-card');
export let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
      console.log(hasFlippedCard)
      if (lockBoard) return;
      if (this === firstCard) return;
      this.classList.add('flip');


      if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
      }

      secondCard = this;
      hasFlippedCard = false;

      checkForMatch();

}

function checkForMatch() {
      let isMatch = firstCard.dataset.food === secondCard.dataset.food;
      isMatch ? disableCards() : unflipCards();
}


function disableCards() {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
      firstCard = null;
      secondCard = null;
}


function unflipCards() {
      lockBoard = true;
      setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            lockBoard = false;
      }, 1500);
}

(function shuffle() {
      cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 12);
            card.style.order = randomPos;
      });
})();

cards.forEach(card => card.addEventListener('click', flipCard()));

export const testables = {
      flipCard,
      hasFlippedCard
  }