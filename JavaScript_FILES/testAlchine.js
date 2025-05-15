const data = [
    {
        question: "Pentru formula moleculară C₅H₈, numărul de alchine izomere este:",
        image: "",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "c"
    },
    {
        question: "Referitor la reacția acetilenei cu soluție de Cl₂ / CCl₄, este falsă afirmația:",
        image: "",
        a: "este o reacție de adiție",
        b: "conduce la un derivat tetrahalogenoat",
        c: "are loc cu decolorarea soluției de Cl₂",
        d: "este o reacție de substituție",
        correct: "d"
    },
    {
        question: "Prin hidratarea etinei se obține:",
        image: "",
        a: "un alcool",
        b: "o aldehidă",
        c: "o cetonă",
        d: "un acid carboxilic",
        correct: "b"
    },
    {
        question: "Monomerul utilizat în obținerea policlorurii de vinil rezultă din reacția etinei cu:",
        image: "",
        a: "Cl₂/CCl₄",
        b: "HCl/HgCl₂",
        c: "Cl₂ / lumină",
        d: "H₂ / Pd, Pb²⁺",
        correct: "b"
    },
    {
        question: "Solubilitatea acetilenei în apă se explică prin:",
        image: "",
        a: "masa molară mică",
        b: "polaritatea slabă a moleculei de acetilenă",
        c: "formarea de legături de hidrogen",
        d: "formarea de forțe de dispersie London, de tip Van der Waals, cu apa",
        correct: "b"
    },
    {
        question: "Este falsă afirmația:",
        image: "",
        a: "acetilena este gaz în condiții normale de temperatură și presiune",
        b: "alchinele lichide au densitatea mai mică decât a apei",
        c: "alchinele sunt total solubile în apă",
        d: "temperaturile de fierbere ale alchinelor cresc cu numărul de atomi de C",
        correct: "c"
    },
    {
        question: "Din 400 kg de carbid de puritate 80% se obțin 110,7 m³ C₂H₂ (27 °C, 1 atm). Randamentul reacției a fost de:",
        image: "",
        a: "72%",
        b: "79%",
        c: "90%",
        d: "98,84%",
        correct: "c"
    },
    {
        question: "Prin adiția apei la o alchină A se formează un compus cu 18,604% O. Denumirea alchinei A care are 1C₄cuaternar și 2C₃terțiar este:",
        image: "",
        a: "1-butină",
        b: "1-pentină",
        c: "3-metil-1-butină",
        d: "3-metil-1-pentină",
        correct: "c"
    },
    {
        question: "3-metil-hexanul nu poate fi obținut la hidrogenarea totală a:",
        image: "",
        a: "3-metil-1-hexină",
        b: "4-metil-1-hexină",
        c: "5-metil-1-hexină",
        d: "4-metil-2-hexină",
        correct: "c"
    },
    {
        question: "Formează același produs de reacție:",
        image: "",
        a: "1-butina și 2-butina în reacția cu Br₂",
        b: "1-pentina și 2-pentina în reacția cu H₂ / Pd, Pb²⁺",
        c: "1-butina și 2-butina în reacția cu HCl",
        d: "1-pentina și 2-pentina în reacția cu H₂ / Ni",
        correct: "d"
    },
    {
        question: "Adiția HCl nu este orientată în cazul:",
        image: "",
        a: "2-butinei",
        b: "propinei",
        c: "1-butinei",
        d: "3-metil-1-butinei",
        correct: "a"
    },
    {
        question: "Alchina cu formula moleculară CₙH₃ₙ₊₁ care are numărul maxim de atomi de C primari și cuaternari este:",
        image: "",
        a: "3,3-dimetil-1-butină",
        b: "4-metil-2-pentină",
        c: "4,4-dimetil-2-pentină",
        d: "3,4-dimetil-1-pentină",
        correct: "b"
    },
    {
        question: "Butanul nu se poate obține din reacția:",
        image: "",
        a: "1-butină + H₂ / Ni",
        b: "2-butină + H₂ / Ni",
        c: "1-butină + H₂ / Pd, Pb²⁺",
        d: "2-butenă + H₂ / Ni",
        correct: "c"
    },
    {
        question: "4,8 g de carbon se află în:",
        image: "",
        a: "4 moli de etină",
        b: "0,8 g de butină",
        c: "53,33 g de propină",
        d: "5,2 g de acetilenă ",
        correct: "d"
    },
    {
        question: "Nu este o reacție de adiție:",
        image: "",
        a: "etină + 2 HCl",
        b: "etină + H₂O",
        c: "etină + O₂",
        d: "propină + H₂ / Pd, Pb²⁺",
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
            <a href="alchine.html">Inapoi la lectie</a>
        </div>
            `
        }
    }
})