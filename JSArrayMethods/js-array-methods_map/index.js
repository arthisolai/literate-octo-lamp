console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

const lowerCaseAnswers = cards.map((card) => {
  return card.answer.toLowerCase();
}); // ['as often as you like.', ...]
console.log("lowerCaseAnswers : ", lowerCaseAnswers);

const questionsAndAnswersTogether = cards.map((card) => {
  return card.question + " - " + card.answer;
}); // ["How often can I use <header>? - As often as you like.", ...]
console.log("questionAndAnswerTogether :", questionsAndAnswersTogether);

const questionAndAnswer = cards.map((card) => {
  let newQuesAndAns = { question: card.question, answer: card.answer };
  return newQuesAndAns;
}); // [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]
console.log("newQuesAndAns :", questionAndAnswer);

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
