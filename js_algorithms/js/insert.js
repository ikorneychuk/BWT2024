async function insert() {
    let file = await fetch("../../js_algorithms/data/inventors.json")
    console.log("responce:\n", file, "\n /responce: \n")
    let content = await file.text()
    console.log("await responce.text()\n", content)
    content = JSON.parse(content)
    content = content.slice(0, 12)
    console.log("content.slice(0, 9)", content)
    let key
    //for (key in content) {
    //    console.log(content[key].id, content[key].title)
    //    console.log(content[key])
    //}

    let insert = document.getElementById("insert")
    for (key in content) {
        insert.innerHTML += `
        <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
        <h5 class="card-title">${content[key].name}</h5>
        <img style="width: 180px" class="img-fluid align-self-center" src=${content[key].image}>
        <p class="card-text">${content[key].invention}.</p>
        </li>
                `
    }
}

insert()
