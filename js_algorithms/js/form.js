check = false
let A = null
let X = null

const element_a = document.getElementById("a")

function solve() {
    let a = element_a.value
    let x
    if (a > 100) {
        x = 0
        check = true
        A = a
        X = x
    }
    else if (a < 61) {
        x = a
        check = true
        A = a
        X = x
    }
    else {
        x = a ** 4
        check = true
        A = a
        X = x
    }
    if (a == "") {
        check = false
    }

    document.getElementById("x").value = x
}

function send() {
    if (check) {
        document.getElementById("formulation").value = "Дано вещественное число A. Вычислить x = 0 при a > 100; x = a при a < 61, в противном случае x = a**4. Отправить x на сервер."
        document.getElementById("a").value = A
        document.getElementById("x").value = X
        document.getElementById("ProblemForm").submit()
    }
    else {
        alert("Недостатки ввода")
    }
}

const solve_button = document.getElementById("solve")
solve_button.addEventListener("click", solve)

const submit_button = document.getElementById("send")
submit_button.addEventListener("click", send)
