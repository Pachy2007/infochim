const data = [
    {
        question: "Cauciucul butadienic:",
        image: "",
        a: "nu se poate vulcaniza",
        b: "conţine 88,88% C ",
        c: "este o hidrocarbură saturată",
        d: "are formulă procentuală diferită de a butadienei",
        correct: "b"
    },
    {
        question: "Este corectă afirmaţia:",
        image: "",
        a: "gutaperca este izomerul cis al poliizoprenului",
        b: "cauciucul natural brut este insolubil în apă, dar solubil în alcool",
        c: "cauciucul natural brut devine casant sub 0 °C",
        d: "ebonita are proprietăţi elastice",
        correct: "c"
    },
    {
        question: "Este corectă afirmaţia:",
        image: "",
        a: "prenadezul este un adeziv care se obţine prin dizolvarea cauciucului natural în benzină",
        b: "cauciucul natural are formula moleculară (C5H10)n",
        c: "cauciucul vulcanizat are culoare gălbuie",
        d: "cauciucul natural brut este insolubil în benzină, benzen şi sulfură de carbon",
        correct: "a"
    },
    {
        question: "Referitor la cauciucul vulcanizat, sunt adevărate afirmaţiile, cu excepția:",
        image: "",
        a: "îşi păstrează elasticitatea între -70 °C şi +170 °C",
        b: "nu este solubil în hidrocarburi",
        c: "se formează punţi de sulf (C-S-S-C)",
        d: "conţine până la 40% sulf",
        correct: "d"
    },
    {
        question: "Sunt adevărate afirmaţiile, cu excepția:",
        image: "",
        a: "formula generală a alcadienelor este CnH2n-2",
        b: "butadiena şi izoprenul sunt izomeri de catenă",
        c: "cauciucul natural şi cauciucul sintetic sunt elastomeri",
        d: "izoprenul are formula moleculară CH",
        correct: "b"
    },
    {
        question: "O probă de izopren cu masa de 272 kg este supusă procesului de polimerizare se obţin 204 kg elastomer. Randamentul procesului de polimerizare este:",
        image: "",
        a: "60%",
        b: "75% ",
        c: "80%",
        d: "90%",
        correct: "b"
    },
    {
        question: "Prin polimerizarea a 20 kg butadienă cu un randament de 80% se obține o masă de polibutadienă egală cu:",
        image: "",
        a: "25 kg",
        b: "16 kg",
        c: "20 kg",
        d: "26 kg",
        correct: "b"
    },
    {
        question: "Poliizoprenul cu gradul de polimerizare 1500:",
        image: "",
        a: "este o hidrocarbură saturată",
        b: "are masa molară 102 000 g/mol",
        c: "conţine 70% carbon",
        d: "nu conţine electroni π",
        correct: "b"
    },
    {
        question: "Un cauciuc obţinut prin polimerizarea butadienei cu clorură de vinil are un conţinut de 24,7% CI. Raportul molar butadienă: clorură de vinil în cauciuc este:",
        image: "",
        a: "1:1",
        b: "1:2",
        c: "2:3",
        d: "3:2",
        correct: "d"
    },
    {
        question: "Poate prezenta izomerie de catenă:",
        image: "",
        a: "1,3-butadiena",
        b: "1,3-pentadiena",
        c: "1,2-butadiena",
        d: "propadiena",
        correct: "b"
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
            <a href="alcadiene.html">Inapoi la lectie</a>
        </div>
            `
        }
    }
})