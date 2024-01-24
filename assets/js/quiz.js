const data = [];
// firstAnsewer: null,
// secondAnsewer: null,
// thirdAnsewer: null,
// fourthtAnsewer: null,
// fifthAnsewer: null


const quizSteps = document.querySelectorAll(".quiz-step");
const quizItems = document.querySelectorAll(".quiz-item");
const quizButtons = document.querySelectorAll(".quiz-controller .quiz-item");
const quizItemMaterial = document.getElementById("quiz-item-material");
const quizItemLength = document.getElementById("quiz-item-length");
const quizItemHight = document.getElementById("quiz-item-hight");
const quizIteAadditionally = document.getElementById("quiz-item-additionally");
const quizItemPayment = document.getElementById("quiz-item-payment");
const quizItemForm = document.getElementById("quiz-item-form");

const quizButtonPrev = document.getElementById("quiz-button-prev");
const quizButtonNext = document.getElementById("quiz-button-next");

// console.log(quizButtonNext);
quizButtonNext.addEventListener("click", () => {
    // console.log(e);

    let answQuestionIndex = [...quizItems].findIndex(item => !item.classList.contains("quiz-hidden"));
    // console.log(answQuestionIndex);
    if (answQuestionIndex !== quizItems.length - 1) {
        quizItems[answQuestionIndex + 1].classList.remove("quiz-hidden");
        quizItems[answQuestionIndex].classList.add("quiz-hidden");
        quizSteps[answQuestionIndex].classList.add('quiz-active');
    }
    if (answQuestionIndex === quizItems.length - 2) {
        quizButtonNext.classList.add("quiz-hidden");
    }
    if (answQuestionIndex === 0) {
        quizButtonPrev.classList.remove("quiz-hidden");
    }

});

quizButtonPrev.addEventListener("click", () => {
    // console.log(e);
    let answQuestionIndex = [...quizItems].findIndex(item => !item.classList.contains("quiz-hidden"));
    // console.log(answQuestionIndex);
    if (answQuestionIndex > 0) {
        quizItems[answQuestionIndex - 1].classList.remove("quiz-hidden");
        quizItems[answQuestionIndex].classList.add("quiz-hidden");
        quizSteps[answQuestionIndex].classList.remove('quiz-active');
    }
    if (answQuestionIndex === 1) {
        quizButtonPrev.classList.add("quiz-hidden");
    }
    if (answQuestionIndex < quizItems.length) {
        quizButtonNext.classList.remove("quiz-hidden");
    }
});