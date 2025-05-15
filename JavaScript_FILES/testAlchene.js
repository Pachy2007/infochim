const data = [
    {
        question: "Alchena ce conține în moleculă 3 atomi de carbon primar și 3 atomi de carbon terțiar are denumirea științifică I.U.P.A.C.: ",
        image: "",
        a: "4-metil-2-pentenă",
        b: "2-metil-3-pentenă",
        c: "2-metil-2-pentenă",
        d: "4-metil-3-pentenă",
        correct: "a"
    },
    {
        question: "Alchenele sunt insolubile în:",
        image: "",
        a: "benzen",
        b: "cloroform",
        c: "apă",
        d: "n-hexan",
        correct: "c"
    },
    {
        question: "În structura alchenei 2,5-dimetil-3-hexenă raportul carbon primar : carbon terțiar : carbon cuaternar este:",
        image: "",
        a: "1 : 1 : 1",
        b: "1 : 1 : 0",
        c: "2 : 1 : 0",
        d: "1 : 2 : 0",
        correct: "b"
    },
    {
        question: "Alchena cu formula moleculară C₅H₁₀ prezintă un număr de izomeri de catenă și de poziție egal cu:",
        image: "",
        a: "3",
        b: "4",
        c: "5",
        d: "6",
        correct: "c"
    },
    {
        question: "Prin hidrogenarea unei alchene se formează o hidrocarbură cu 20 de atomi în moleculă. Alchena este:",
        image: "",
        a: "etena",
        b: "propena",
        c: "1-pentenă",
        d: "1-hexenă",
        correct: "d"
    },
    {
        question: "Polietena cu masa molară 33 600 g/mol are gradul de polimerizare:",
        image: "",
        a: "1000",
        b: "1200",
        c: "1500",
        d: "2000",
        correct: "b"
    },
    {
        question: "Numărul alchenelor izomere care prin hidrogenare în prezență de nichel formează izopentan este egal cu:",
        image: "",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "c"
    },
    {
        question: "Prin adiția apei, în mediu acid, la o alchenă se formează un compus în care raportul masic este C : O = 9 : 4. Alchena este:",
        image: "",
        a: "etena",
        b: "propena",
        c: "1-butena",
        d: "izobutena",
        correct: "b"
    },
    {
        question: "Etena are aceeași compoziție procentuală masică elementară ca:",
        image: "",
        a: "propena",
        b: "etanul",
        c: "butanul",
        d: "etina",
        correct: "a"
    },
    {
        question: "Regula lui Markovnikov se aplică în cazul reacției dintre:",
        image: "",
        a: "2-butenă și brom, în CCl4",
        b: "2-butenă și apă, în mediu acid",
        c: "1-butenă și acid clorhidric",
        d: "1-butenă și hidrogen, în prezența nichelului ",
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
            <a href="alchene.html">Inapoi la lectie</a>
        </div>
            `
        }
    }
})