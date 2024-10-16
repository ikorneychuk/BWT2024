const trigger = document.getElementById("trigger")

function edit() {
    const surname = document.getElementById("surname")
    const name = document.getElementById("name")
    const birth_date = document.getElementById("birth_date")

    console.log(surname.innerText)
    console.log(name.innerText)
    console.log(birth_date.innerText)

    surname.innerText = "KORNEYCHUK"
    name.innerText = "ILYA"
    birth_date.innerText = "MMV"
}

trigger.addEventListener("click", edit)