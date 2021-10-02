// EXTRA EXERCISES

// 41) Add an eventListener to show an alert when the cursor hovers a link, displaying its href property

let links = document.getElementsByTagName('a')
for (a of links) {
    a.addEventListener('mouseover', e => {
        alert(e.target.href)
    })
}


// 42) Create a button that will hide every image on the page when clicked

let hideImg = document.getElementById('hide-image')
hideImg.addEventListener('click', () => {
    let images = document.getElementsByTagName('img')
    for (img of images) {
        img.style.display = 'none'
    }
})


// 43) Create a button that will hide or show the table on the page when clicked

let toggleTable = document.getElementById('toggle-table')
toggleTable.addEventListener('click', () => {
    let table = document.getElementsByTagName('table')[0]
    table.classList.toggle('toggle')
})


// 44) Write a function for calculating the sum of every number inside all the table cells (if their content is numeric)

const calculateTableCellsTotal = () => {
    
    let td = document.getElementsByTagName('td')
    console.log(td)
    let tableTotal = 0
    for (let i = 0; i < td.length; i++) {
        if (!isNaN (td[i].innerText)) {
            tdNum = parseFloat(td[i].innerText)
            tableTotal += tdNum
        }
    }
    console.log(tableTotal)
}

calculateTableCellsTotal()


// 45) Delete the last letter from the heading each time the user clicks on it

let removeLastLetterBtn = document.getElementById('remove-last-letter')
removeLastLetterBtn.addEventListener('click', () => {
    let heading = document.getElementsByTagName('h1')[0]
    heading.innerText = heading.innerText.slice(0, heading.innerText.length - 1)
})


// 46) Change the background color of a <td> if the user clicks on it

for (cell of td) {
    cell.addEventListener('click', e => {
        console.log(e)
        e.target.style.backgroundColor = 'lightblue'
    })
}



// 47) Add a delete button at the bottom of the table, when clicked it should delete a random <td>

let deleteTable = document.getElementById('delete-table')
deleteTable.addEventListener('click', () => {
    let table = document.getElementsByTagName('table')[0]
    table.remove()
})


// 48) Add automatically a pink border to a cell when the mouse hovers it

for (cell of td) {
    cell.addEventListener('mouseover', e => {
        e.target.style.border = '1px solid pink'
    })
}


// 49) Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page


const createTable = (rows, columns) => {
    let body = document.getElementsByTagName('body')[0]
    let newTable = document.createElement('table')
    body.appendChild(newTable)
    
    for (let i = 0; i < rows; i++) {
        let newTr = document.createElement('tr')
        for (let j = 0; j < columns; j++) {
            let newTd = document.createElement('td')
            newTr.appendChild(newTd)
        }
        newTable.appendChild(newTr)
    }
}

let createTableBtn = document.getElementById('create-table')
createTableBtn.addEventListener('click', () => {
    createTable(4, 3)
})

// 50) Write a function to remove the last table from the page

let deleteLastTableBtn = document.getElementById('delete-last-table')
deleteLastTableBtn.addEventListener('click', () => {
    let tables = document.getElementsByTagName('table')
    let lastTable = document.getElementsByTagName('table')[tables.length - 1]
    lastTable.remove()
})