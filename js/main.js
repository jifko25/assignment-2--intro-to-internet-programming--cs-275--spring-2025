// -----------------------------------------------------------------------------
// This file includes deliberate formatting errors in order for you to verify
// that ESLint and EditorConfig are working properly. If both tools are, indeed,
// working correctly, then you’d see errors in your editor about indentation and
// improper use of footmarks instead of back ticks. When you save this file,
// your editor should strip all excess newlines and whitespace characters from
// the file. If both of these events occur, then ESLint and EditorConfig are
// working correctly.
//
// DON’T PROCEED UNTIL YOU’RE SURE ESLINT AND EDITORCONFIG ARE WORKING CORRECTLY
// -----------------------------------------------------------------------------


const viewer = document.querySelector(".carousel-navigation");
const nextButton = document.querySelector(".carousel-navigation.next");
const prevButton = document.querySelector('.prev');

const carouselLength = document.querySelectorAll(".carousel-slides").length;
let currentPositon = 0

nextButton.addEventListener("click", () => {
    currentPositon = currentPositon < carouselLength - 1 ? currentPositon + 1 : 0

    const offset = -100 * currentPositon
    viewer.style.transform = `translateX(${offset}%)`
    }
)

prevButton.addEventListener('click', () =>{
    currentPositon = currentPositon > 0 ? currentPositon - 1 : carouselLength - 1

    const offset = -100 * currentPositon
    viewer.style.transform = `translateX(${offset}%)`
    }
)
















