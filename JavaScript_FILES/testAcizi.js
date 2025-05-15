const data = [
    {
        question: "Punctele de fierbere ale acizilor sunt datorate:",
        image: "",
        a: "legăturilor de hidrogen intermoleculare",
        b: "legăturilor de hidrogen intramoleculare",
        c: "legăturilor dipol-dipol",
        d: "amfionilor",
        correct: "a"
    },
    {
        question: "Se obține prin oxidare fermentativă:",
        image: "",
        a: "acidul formic",
        b: "acidul acetic",
        c: "acidul acrilic",
        d: "acidul ftalic",
        correct: "b"
    },
    {
        question: "Are formula brută C15H20:",
        image: "",
        a: "acidul acetic",
        b: "acidul benzoic",
        c: "acidul acrilic",
        d: "acidul propionic",
        correct: "c"
    },
    {
        question: "Despre acidul benzoic este adevărat că:",
        image: "",
        a: "este lichid",
        b: "se folosește ca și condiment",
        c: "sublimează",
        d: "este compus cu funcție mixtă",
        correct: "c"
    },
    {
        question: "Raportul masic C:H:O în acidul propionic este:",
        image: "",
        a: "18: 3: 32",
        b: "18: 3: 16",
        c: "18: 6: 7",
        d: "18: 3: 4",
        correct: "b"
    },
    {
        question: "Omologul superior al acidului acetic are aceeași masă moleculară cu:",
        image: "",
        a: "etanolul",
        b: "butanolul",
        c: "propanolul",
        d: "metanolul",
        correct: "b"
    },
    {
        question: "Numdrul acizilor izomeri ce corespund formulei C5H10O2 este:",
        image: "",
        a: "6",
        b: "5",
        c: "3",
        d: "4",
        correct: "d"
    },
    {
        question: "Despre acidul acetic este adevărată afirmația:",
        image: "",
        a: "este parțial solubil în apă",
        b: "cristalizează la 16,5°C",
        c: "reacționează cu Ag",
        d: "în soluție cu concentrația 9% este toxic",
        correct: "b"
    },
    {
        question: "Acizii carboxilici nu pot reacționa cu:",
        image: "",
        a: "Cu(OH)2",
        b: "Cu",
        c: "CuCO3",
        d: "CuO",
        correct: "b"
    },
    {
        question: "Referitor la acidul acetic, este incorectă afirmația:",
        image: "",
        a: "este un acid monocarboxilic saturat",
        b: "ionizează parțial în soluție apoasă",
        c: "este un acid mai slab decât acidul carbonic",
        d: "conține 40% C",
        correct: "c"
    }
]

const quic = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const image = document.getElementById("image")
const optionA = document.getElementById("optionA")
const optionB = document.getElementById("optionB")
const optionC = document.getElementById("optionC")
const optionD = document.getElementById("optionD")

const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswer()

    const currentQuizData = data[currentQuiz]

    image.src = currentQuizData.image
    questionEl.innerText = currentQuizData.question
    optionA.innerText = currentQuizData.a
    optionB.innerText = currentQuizData.b
    optionC.innerText = currentQuizData.c
    optionD.innerText = currentQuizData.d

}

function deselectAnswer() {
    answerEls.forEach((answerEl) => (
        answerEl.checked = false
    ))
}

function getSelected() {
    let answer
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected()
    if (answer) {
        if (answer === data[currentQuiz].correct) { score++ }
        currentQuiz++
        if (currentQuiz < data.length) {
            loadQuiz()
        }
        else {
            quiz.innerHTML = `
                        <h2>Ai obtinut ${score}/${data.length}</h2>
                        <div class="test">
            <a href="aciziCarboxilici.html">Inapoi la lectie</a>
        </div>
            `
        }
    }
})