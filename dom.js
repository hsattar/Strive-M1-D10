// DOM EXERCISES

// 31) Get the element with an id of "container" from the page

let container = document.getElementsByClassName('container')[0]
console.log(container)


// 32) Get every <td> element from the page

let td = document.getElementsByTagName('td')
console.log(td)


// 33) Use a loop for printing the text inside of every <td> element in the page

for (let i = 0; i < td.length; i++) {
    td[i].innerText = `${i}`
}


// 34) Write a function to change the heading of the page
 
const changeHeading = () => {
    let heading = document.getElementsByTagName('h1')[0]
    heading.innerText = "I've Changed"
}

changeHeading()

// 35) Write a function to add an extra row to the table

const addTableRow = () => {
    let tbody = document.getElementsByTagName('tbody')[0]
    let addTr = document.createElement('tr')
    let addTd = document.createElement('td')
    addTd.innerText = 'A'
    addTr.appendChild(addTd)
    tbody.appendChild(addTr)
}

addTableRow()


// 36) Write a function to add a class of "test" to each row in the table
 
const addClass = () => {
    let tr = document.getElementsByTagName('tr')
    for (row of tr) {
        row.classList.add('test')
    }
}

addClass()


// 37) Write a function to add a red background to every link in the page

const changeLinkBgc = () => {
    let links = document.getElementsByTagName('a')
    for (a of links) {
        a.style.backgroundColor = 'red'
    }
}

changeLinkBgc()


// 38) Console log "Page loaded" when the page is correctly loaded

window.onload = function() {
    console.log('Page Loaded')
}


// 39) Write a function to add new items to a unordered list

const addNewItems = ul => {
    let li = document.createElement('li')
    li.innerText = 'Added New Item'
    ul.appendChild(li)
}

let ul = document.getElementsByTagName('ul')[0]

addNewItems(ul)


// 40) Write a function to empty a list

const removeLi = () => {
    let li = document.getElementsByTagName('li')
    for (let i = 0; i < li.length; i++) {
        li[i].remove()
    }
}

removeLi()