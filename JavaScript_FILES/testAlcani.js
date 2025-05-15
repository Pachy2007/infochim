const data = [
    {
        question: "Fie alcanul cu următoarea formulă structurală. Denumirea conform IUPAC a alcanului este:  ",
        image: "Intrebarea1TestAlcani.svg",
        a: "2, 4 dietil-3,5-dimetilhexan",
        b: "3-etil-2,4,5-trimetilheptan",
        c: "3,5-dietil-2,4-dimetilhexan",
        d: "5-etil-3,4,6-trimetilheptan",
        correct: "b"
    },
    {
        question: "Se consideră următorii alcani: n-butan (1), izobutan (2), neopentan (3), n-pentan (4), propan (5). Ordinea desrescătoare a punctelor de fierbere este redată corect în seria:",
        image: "",
        a: "4>3>1>2>5",
        b: "5>2>1>3>4",
        c: "4<3<1<5<2",
        d: "4<3<1<2<5",
        correct: "a"
    },
    {
        question: "La 10°C, este gazos alcanul:",
        image: "",
        a: "2,2-dimetilpropanul",
        b: "izopentanul",
        c: "n-pentanul",
        d: "n-hexanul",
        correct: "a"
    },
    {
        question: "Între moleculele alcanilor, în stare lichidă și solidă, există: ",
        image: "",
        a: "legături de hidrogen",
        b: "forțe de dispersie London",
        c: "forțe dipol-dipol",
        d: "legături covalente",
        correct: "b"
    },
    {
        question: "n-pentanul și 2,2-dimetil-propanul sunt:",
        image: "",
        a: "izomeri de poziție",
        b: "omologi",
        c: "izomeri de catenă",
        d: "Identici",
        correct: "c"
    },
    {
        question: "Doi alcani omologi au raportul maselor moleculare 9 : 10,75. Numărul total al izomerilor celor doi alcani este:",
        image: "",
        a: "3",
        b: "5",
        c: "6",
        d: "8",
        correct: "d"
    },
    {
        question: "Alcanul cu formula moleculară C4H10 îi corespunde un număr de radicali monovalenți egal cu:",
        image: "",
        a: "2",
        b: "4",
        c: "3",
        d: "1",
        correct: "b"
    },
    {
        question: "La arderea a 1,6 kg de metan se eliberează 80230 kJ. Puterea calorică a metanului, exprimată în kJ/m^3 este:",
        image: "",
        a: "35 817 kJ/m^3",
        b: "26 838 kJ/m^3",
        c: "39 728 kJ/m^3",
        d: "36 000 kJ/m^3",
        correct: "a"
    },
    {
        question: "Prin arderea a 112 cm^3 (c.n.) de hidrocarbură gazoasă rezultă 0, 66 g CO2 și 0,36 g H2O. Formula moleculară a hidrocarburii și numărul de radicali monovalenți care corespund hidrocarburii sunt:",
        image: "",
        a: "C3H6, 3",
        b: "C3H8, 2",
        c: "C4H8, 4",
        d: "C4H10, 4",
        correct: "b"
    },
    {
        question: "Prin izomerizarea a 0,25 mol n-butan rezultă un amestec care conține 2,4 g de carbon terțiar. Procentul n-butan în amestecul final este:",
        image: "",
        a: "25%",
        b: "50%",
        c: "20%",
        d: "80%",
        correct: "d"
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
            <a href="alcani.html">Inapoi la lectie</a>
        </div>
            `
        }
    }
})