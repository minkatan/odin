const root = document.getElementById('root')
const numberInput = document.getElementById('input')
const resetBtn = document.getElementById('reset')
const monoBtn = document.getElementById('mono')
const randomBtn = document.getElementById('random')
const colorBtn = document.getElementById('color')

const default_size = 16
let size = default_size
let color = "#000000"

// random color
const setColor = (e) => {
    if(e.target.id === 'random'){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        color = `#${randomColor}`
    }

    if(e.target.id === 'mono'){
        if(color === '#000000'){
            color = '#FFFFFF'
        }else if (color !== '#000000'){
            color = "#000000"
        }
    }
    colorBtn.style.backgroundColor = color
}

const newGrid = (size) => {
    let grids = document.querySelectorAll('.grid')
    grids.forEach((grid) => {
        grid.remove()
    })
    generateGrid(size)
}

const setReset = () => {
    color = "#000000"
    colorBtn.style.backgroundColor = color

    size = 16
    numberInput.value = size
    newGrid(size)
}

function generateGrid(size){
    for (let i = 0; i < (size * size); i++){
        divEl = document.createElement('div')
        divEl.classList.add('border','grid')
        divEl.style['width'] = `calc(100%/${size})`
        divEl.style['height'] = `calc(100%/${size})`
        root.appendChild(divEl)
    }
    
    let grids = document.querySelectorAll('.grid')
        grids.forEach((grid) => {
            grid.addEventListener('mouseenter', paint)
        })

    colorBtn.style.backgroundColor = color
}

// change input value
numberInput.addEventListener('change', (e) => {
    size = e.target.value
    newGrid(size)
})

//paint
const paint = (e) => {
    e.target.style.backgroundColor = color
}

randomBtn.addEventListener('click',setColor)
monoBtn.addEventListener('click',setColor)
resetBtn.addEventListener('click',setReset)

generateGrid(size)

