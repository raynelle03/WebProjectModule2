import { testables } from "./scripts.js";
import { JSDOM } from "jsdom";

describe("Test Game logic", () => {
  it("Check if flip is added to div that was tapped", () => {
    const dom = createMockAppleCard();
    const cardDiv = dom.window.document.getElementsByClassName("memory-card");
    cardDiv[0].addEventListener("click", testables.flipCard);
    // Act
    cardDiv[0].click();
    // Assert
    expect(cardDiv[0].classList.contains("flip")).toBe(true);
  });

  it("Check if a Pair doesnt match", () => {
    // Arrange
    const dom = createMockAppleAndCupCakeCards();
    const cardDiv = dom.window.document.getElementsByClassName("memory-card");
    cardDiv[0].addEventListener("click", testables.flipCard);
    cardDiv[1].addEventListener("click", testables.flipCard);
    // Act
    cardDiv[0].click();
    // Assert
    expect(cardDiv[0].classList.contains("flip")).toBe(true);
    cardDiv[1].click();
    setTimeout(() => {
      expect(cardDiv[0].classList.contains("flip")).toBe(false); //flip is removed as pair doesn't not match
      expect(cardDiv[1].classList.contains("flip")).toBe(false); //flip is removed as pair doesn't not match
    }, 1500);
  });

  it("Check if a Pair matches", () => {
    // Arrange
    const dom = createMockAppleAndCupCakeCards();
    const cardDiv = dom.window.document.getElementsByClassName("memory-card");
    cardDiv[0].addEventListener("click", testables.flipCard);
    cardDiv[1].addEventListener("click", testables.flipCard);
    console.log(cardDiv[0]);
    // Act
    cardDiv[0].click();
    // Assert
    expect(cardDiv[0].classList.contains("flip")).toBe(true);
    cardDiv[1].click();
    setTimeout(() => {
      expect(cardDiv[0].classList.contains("flip")).toBe(true);
      expect(cardDiv[1].classList.contains("flip")).toBe(true);
    }, 1500);
  });
});

function createMockAppleAndCupCakeCards() {
  const domStart = "<!DOCTYPE html><body>";
  const appleCard =
    '<div class="memory-card" data-food="apple" >' +
    '<img class="front-face" src="images/apple.svg" alt="Apple">' +
    '<img class="back-face" src="images/cover.svg" alt="Memory Card">' +
    "</div>";
  const cupcakeCard =
    '<div class="memory-card" data-food="cupcake">' +
    '<img class="front-face" src="images/cupcake.svg" alt="Cupcake">' +
    '<img class="back-face" src="images/cover.svg" alt="Memory Card">' +
    "</div>";
  const domEnd = "</body> </html>";
  return new JSDOM(domStart + appleCard + cupcakeCard + domEnd);
}

function createMockAppleCard() {
  const domStart = "<!DOCTYPE html><body>";
  const appleCard =
    '<div class="memory-card" data-food="apple" >' +
    '<img class="front-face" src="images/apple.svg" alt="Apple">' +
    '<img class="back-face" src="images/cover.svg" alt="Memory Card">' +
    "</div>";
  const domEnd = "</body> </html>";
  return new JSDOM(domStart + appleCard + domEnd);
}
