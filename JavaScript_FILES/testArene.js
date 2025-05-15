const data = [
    {
        question: "Sunt substanţe solide în condiții normale de presiune şi temperatură:",
        image: "",
        a: "benzenul şi toluenul",
        b: "toluenul şi xilenii",
        c: "antracenul şi toluenul",
        d: "naftalina şi antracenul",
        correct: "d"
    },
    {
        question: "Arenele nu sunt folosite pentru:",
        image: "",
        a: "fabricarea medicamentelor",
        b: "obținerea maselor plastice",
        c: "fabricarea fibrelor sintetice",
        d: "producerea energiei termice",
        correct: "d"
    },
    {
        question: "Afirmaţia corectă referitoare la halogenarea arenelor este:",
        image: "",
        a: "clorurarea se face soluție CCI",
        b: "clorurarea toluenului în prezenţa luminii se face la catena laterală",
        c: "benzenul decolorează soluţia de Br₂/CCI",
        d: "clorul reacţionează cu naftalina doar la rece",
        correct: "b"
    },
    {
        question: "Hidrocarburile aromatice dau cu uşurinţă:",
        image: "",
        a: "reacţiile de polimerizare",
        b: "reacţiile de oxidare cu agenţi oxidanți specifici alchenelor",
        c: "reacţiile de substituţie",
        d: "reacţiile de adiţie la temperatura camerei",
        correct: "c"
    },
    {
        question: "Despre naftalină nu este corectă afirmaţia:",
        image: "",
        a: "este în stare solidă",
        b: "sublimează la temperatura camerei",
        c: "este în stare lichidă",
        d: "este insolubilă în apă",
        correct: "c"
    },
    {
        question: "Prin nitrarea toluenului în raport molar toluen: HNO₁ = 1 : 3 se obţine:",
        image: "",
        a: "mononitrotoluen",
        b: "dinitrotoluen",
        c: "trinitrotoluen",
        d: "un amestec de compuşi",
        correct: "c"
    },
    {
        question: "Despre naftalină este adevărată afirmaţia:",
        image: "",
        a: "este o substanţă lichidă",
        b: "se topeşte",
        c: "nu sublimează",
        d: "are proprietăți insecticide",
        correct: "d"
    },
    {
        question: "Radicalul monovalent al benzenului se numeşte:",
        image: "",
        a: "benzil",
        b: "fenil",
        c: "benziliden",
        d: "fenilen",
        correct: "b"
    },
    {
        question: "Cu ce derivat halogenat trebuie alchilat benzenul pentru a obține o hidrocar-bură cu raportul masic C: H = 10,5 : 1?",
        image: "",
        a: "CHCl",
        b: "C₂H₂CI",
        c: "C₂H₂CI",
        d: "C₂H₂CI",
        correct: "a"
    },
    {
        question: "Alegeți afirmaţia corectă:",
        image: "",
        a: "Benzenul este o substanță incoloră, lichidă, cu densitatea mai mare ca apa",
        b: "Benzenul are p.t. = 5,5 °C; de aceea depozitarea şi transportul la temperaturi scăzute necesită sisteme de încălzire a recipientelor cu benzen",
        c: "Toluenul este solubil în apă, deoarece are molecule slab polare",
        d: "Nitrobenzenul este explozibil",
        correct: "b"
    },
    {
        question: "În molecula stirenului se găsesc:",
        image: "",
        a: "8 electroni π",
        b: " 6 electroni π",
        c: "18 legături σ",
        d: "20 de legături σ",
        correct: "a"
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
            <a href="arene.html">Inapoi la lectie</a>
        </div>
            `
        }
    }
})