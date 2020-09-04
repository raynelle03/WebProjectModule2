
import {testables} from './scripts.js';
import { JSDOM } from 'jsdom';



it('Check if flip is added to div that was tapped', () => {
    // Arrange
    const dom = new JSDOM(`<!DOCTYPE html><body><div class="memory-card" data-food="apple" >' + 
    '<img class="front-face" src="images/apple.svg" alt="Apple">' + 
    '<img class="back-face" src="images/cover.svg" alt="Memory Card">' + 
    '</div>' + 
    '</body> </html>`);
    const cardDiv =  dom.window.document.getElementsByClassName('memory-card');
    cardDiv[0].addEventListener('click', testables.flipCard)
    // Act
    cardDiv[0].click();
    // Assert
   expect(cardDiv[0].classList.contains('flip')).toBe(true);
  })



    it('Check if a Pair doesnt match', () => {
    testables.hasFlippedCard = true;
    console.log("Testing")
    // Arrange
    const dom = new JSDOM(`<!DOCTYPE html><body><div class="memory-card" data-food="apple" >' + 
    '<img class="front-face" src="images/apple.svg" alt="Apple">' + 
    '<img class="back-face" src="images/cover.svg" alt="Memory Card">' + 
    '</div>' + 
    '<div class="memory-card" data-food="cupcake">' +
    '<img class="front-face" src="images/cupcake.svg" alt="Cupcake">' +
    '<img class="back-face" src="images/cover.svg" alt="Memory Card">' +
    '</div>' +
    '</body> </html>`);

    const cardDiv =  dom.window.document.getElementsByClassName('memory-card');
    cardDiv[0].addEventListener('click', testables.flipCard)
    cardDiv[1].addEventListener('click', testables.flipCard)
    // Act
    cardDiv[0].click();
    // Assert
   expect(cardDiv[0].classList.contains('flip')).toBe(true);
   cardDiv[1].click();
   setTimeout(() => {
    expect(cardDiv[0].classList.contains('flip')).toBe(false); //flip is removed as pair doesn not match
    expect(cardDiv[1].classList.contains('flip')).toBe(false); //flip is removed as pair doesn not match
}, 1500);
})


it('Check if a pair matches', () => {
  testables.hasFlippedCard = true;
  console.log("Testing")
  // Arrange
  const dom = new JSDOM(`<!DOCTYPE html><body><div class="memory-card" data-food="apple" >' + 
  '<img class="front-face" src="images/apple.svg" alt="Apple">' + 
  '<img class="back-face" src="images/cover.svg" alt="Memory Card">' + 
  '</div>' + 
  '<div class="memory-card" data-food="apple">' +
  '<img class="front-face" src="images/apple.svg" alt="Apple">' +
  '<img class="back-face" src="images/cover.svg" alt="Memory Card">' +
  '</div>' +
  '</body> </html>`);

  const cardDiv =  dom.window.document.getElementsByClassName('memory-card');
  cardDiv[0].addEventListener('click', testables.flipCard)
  cardDiv[1].addEventListener('click', testables.flipCard)
  console.log(cardDiv[0])
  // Act
  cardDiv[0].click();
  // Assert
 expect(cardDiv[0].classList.contains('flip')).toBe(true);
 cardDiv[1].click();
 setTimeout(() => {
  expect(cardDiv[0].classList.contains('flip')).toBe(true);
  expect(cardDiv[1].classList.contains('flip')).toBe(true);
}, 1500);

})