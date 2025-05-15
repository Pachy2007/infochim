const data = [
    {
        question: "Moleculele alcoolilor:",
        image: "",
        a: "sunt nepolare",
        b: "sunt polare",
        c: "formează între ele legături covalente",
        d: "conţin legături ionice",
        correct: "b"
    },
    {
        question: "Este corectă afirmaţia:",
        image: "",
        a: "alcoolii inferiori sunt solubiliîin apă",
        b: " alcoolul izopropilic are catenă ramificată",
        c: "glicerina are punct de fierbere mai mic decât etanolul",
        d: "sunt trei alcooli izomeri cu formula moleculară C3H8O",
        correct: "a"
    },
    {
        question: "Este corectă afirmaţia:",
        image: "",
        a: "metanolul conține în moleculă un atom de carbon primar",
        b: "moleculele alcoolilor se pot asocia prin legäturi de hidrogen",
        c: "2,2-dimetil propanol este un alcool secundar",
        d: "solubilitatea alcoolilor în apă crește cu mărirea catenei",
        correct: "b"
    },
    {
        question: "Un alcool monohidroxilic saturat conține 21,62% O. Alcoolul este:",
        image: "",
        a: "metanol",
        b: "etanol",
        c: "propanol",
        d: "2-butanol",
        correct: "d"
    },
    {
        question: "Reacţia care are loc la oxidarea etanolului cu soluție acidă de dicromat de potasiu conduce la formarea etanalului: xCH₃-CH₂-OH + K₂Cr₂O₇ + yH₂SO₄ → xCH₃-CHO + K₂SO₄ + Cr₂(SO₄)₃ + zH₂O. Coeficienţii stoechiometrici x, y și z ai ecuaţiei reacției sunt:",
        image: "",
        a: "x=3; y=4; z=7",
        b: "x=7; y=3; z=4",
        c: "x=7; y=3; z=4",
        d: "x=4; y=7; z=3",
        correct: "a"
    },
    {
        question: "Metanolul este toxic pentru organismul uman. Alegeți răspunsul fals",
        image: "",
        a: "consumat în cantităţi mici provoacă orbirea",
        b: "consumat în cantități mari provoacă moartea",
        c: "doza letală de alcool metilic este 1,5 g/kg corp",
        d: "doza letală este 0,15 g/kg corp",
        correct: "c"
    },
    {
        question: "La arderea a 6 g alcool monohidroxilic saturat acidlic se obțin 6,72 L (c.n.) CO2 și 7,2 g H2O. Alcoolul este:",
        image: "",
        a: "metanol",
        b: "etanol",
        c: "propanol",
        d: "butanol",
        correct: "c"
    },
    {
        question: "Nu este corectă afirmaţia:",
        image: "",
        a: "etanolul este antidotul administrat celor care au inhalat metanol ",
        b: "alcoolii saturați și alcanii corespunzători au același conținut procentual de carbon",
        c: "glicerina are vâscozitate și tensiune superficială mai mare decât etanolul",
        d: "etanolul este omologul superior al metanolului",
        correct: "b"
    },
    {
        question: "Un amestec echimolecular de alcool metilic și alcool etilic, cu masa de 7,8 g, se arde. Volumul de dioxid de carbon rezultat la ardere este de:",
        image: "",
        a: "6,72L",
        b: "11,2L",
        c: "22,4L",
        d: "4,48L",
        correct: "a"
    },
    {
        question: " Numărul de alcooli primari cu formula moleculară C4H10 este egal cu:",
        image: "",
        a: "6",
        b: "4",
        c: "3",
        d: "2",
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
            <a href="alcooli.html">Inapoi la lectie</a>
        </div>
            `
        }
    }
})