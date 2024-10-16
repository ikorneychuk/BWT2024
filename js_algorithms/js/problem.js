const element_a1 = document.getElementById("a1")
const element_a2 = document.getElementById("a2")
const element_a3 = document.getElementById("a3")

const a1_trigger = document.getElementById("a1_trigger")
const a2_trigger = document.getElementById("a2_trigger")
const a3_trigger = document.getElementById("a3_trigger")

function calculate_x1() {
    let a1 = parseFloat(element_a1.innerText)

    let x
    if (a1 > 100) {
        x = 0
    }
    else if (a1 < 61) {
        x = a1
    }
    else {
        x = a1 ** 4
    }

    document.getElementById("a1_result").innerText = String(x)
}

function calculate_x2() {
    let a2 = parseFloat(element_a2.innerText)

    let x
    if (a2 > 100) {
        x = 0
    }
    else if (a2 < 61) {
        x = a2
    }
    else {
        x = a2 ** 4
    }

    document.getElementById("a2_result").innerText = String(x)
}

function calculate_x3() {
    let a3 = parseFloat(element_a3.innerText)

    let x
    if (a3 > 100) {
        x = 0
    }
    else if (a3 < 61) {
        x = a3
    }
    else {
        x = a3 ** 4
    }

    document.getElementById("a3_result").innerText = String(x)
}

a1_trigger.addEventListener("click", calculate_x1)
a2_trigger.addEventListener("click", calculate_x2)
a3_trigger.addEventListener("click", calculate_x3)