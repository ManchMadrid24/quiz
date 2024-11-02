let questions = [
  {
    question: "What was juventus founded?",
    options: [
      "1932",
      "1897",
      "1892",
      "1956",
    ],
    correctAnswer: "1897",
    isAnsweredCorrect: null,
    isAnswered: false,
    answer: null
  },

  {
    question: "What is the colors of juventus",
    options: [
      "green and purple",
      "blue and orange",
      "black and white",
      "white and pink",
    ],
    correctAnswer: "black and white",
    isAnsweredCorrect: null,
    isAnswered: false,
    answer: null
  },

  {
    question: "How many seria a dose juventus have",
    options: [
      "36",
      "9",
      "17",
      "23",
    ],
    correctAnswer: "36",
    isAnsweredCorrect: null,
    isAnswered: false,
    answer: null
  },

  {
    question: "What is the name of juventuses stadume",
    options: [
      "Allianz",
      "Bernabeu",
      "etihad",
      "rose bowle",
    ],
    correctAnswer: "Allianz",
    isAnsweredCorrect: null,
    isAnswered: false,
    answer: null
  },

  {
    question: "who is the top scorer for juventus",
    options: [
      "Ronaldo",
      "Alessandro Del Prio",
      "vidic",
      "Nicolas Jakson",
    ],
    correctAnswer: "Alessandro Del Prio",
    isAnsweredCorrect: null,
    isAnswered: false,
    answer: null
  },

  {
    question: "what nikname is given to juventus",
    options: [
      "the mates",
      "ventus",
      "nicers",
      "juve",
    ],
    correctAnswer: "juve",
    isAnsweredCorrect: null,
    isAnswered: false,
    answer: null
  },

  {
    question: "When did juventus wi there first Coppa italia",
    options: [
      "1969",
      "1938",
      "1976",
      "1993",
    ],
    correctAnswer: "1938",
    isAnsweredCorrect: null,
    isAnswered: false,
    answer: null
  },

  {
    question: "When did juventus wi there first Uefa Champions League",
    options: [
      "1828",
      "1942",
      "1985",
      "2009",
    ],
    correctAnswer: "1985",
    isAnsweredCorrect: null,
    isAnswered: false,
    answer: null
  },

  {
    question: "when did juventus get religated",
    options: [
      "1999-2000",
      "2010-2011",
      "2005-2006",
      "1967-1968",
    ],
    correctAnswer: "2005-2006",
    isAnsweredCorrect: null,
    isAnswered: false,
    answer: null
  },


]
let limit = questions.length
let score = 0
let count = 0


function render(questions) {
  let quizContainer = document.querySelector('.quiz-container')
  quizContainer.innerHTML = ''


  questions.forEach((el, index) => {
    let item = `

    <div >
       <p class="question"> ${el.question}</p>
       ${el.options.map((option,optionIndex) => {

      if (el.isAnswered === true) {
        return (
          `<button disabled="true"  class="option ${el.answer === optionIndex && el.isAnsweredCorrect ? "correct" : "incorrect"}">  ${option}</button>`)
      } else {
        return (
          `<button onclick="checkAnswer(${index},'${option}',${optionIndex})" class="option">${option}</button>`)
      }
    }).join('')}
    </div>
    `
    
    quizContainer.insertAdjacentHTML('beforeend', item)
  })
}


render(questions)

/*
<label class="answer"> <input type="radio" name="quiz" value="1"> Paris </label>
*/


function checkAnswer(index, choosenAnswer,optionIndex) {
  count++
  
  if (questions[index].correctAnswer === choosenAnswer) {
    questions[index].isAnswered = true
    questions[index].isAnsweredCorrect = true
    questions[index].answer = optionIndex
    score+=10
  } else {
    questions[index].isAnswered = true
    questions[index].isAnsweredCorrect = false
    questions[index].answer = optionIndex
  }
setTimeout(() => {
   if (limit === count) {
    alert(`score:${score}`)
  }
}, 1000);
  render(questions)
 
}

                                                                                             