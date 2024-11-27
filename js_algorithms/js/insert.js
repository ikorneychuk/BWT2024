async function insert() {
    let file = await fetch("../../BWT2024/js_algorithms/data/inventors.json")
    let content = await file.text()
    content = JSON.parse(content)
    content = content.slice(0, 12)
    let key
    let insert = document.getElementById("insert")
    for (key in content) {
        insert.innerHTML += `
        <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
        <h5 class="card-title">${content[key].name}</h5>
        <img style="width: 180px" class="img-fluid align-self-center" src="${content[key].image}">
        <p class="card-text">${content[key].invention}.</p>
        </li>
                `
    }
}

insert()
