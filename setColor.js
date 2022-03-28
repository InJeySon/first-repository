var $start = document.querySelector('#start')
var $appFooter = document.querySelector('#appFooter')
var $colorH = document.querySelector('#color-header')
var $resultH = document.querySelector('#result-header')
var $copyResult = document.querySelector('#copyResult')

var $show = document.querySelector('#show')
var $game = document.querySelector('#game')
var $input = document.querySelector('#input')

$start.addEventListener('click', startGenerate)
$show.addEventListener('click', showBox)
$game.addEventListener('click',handleBoxClick)


function startGenerate() {
    $resultH.textContent = generateColor()
    remove($appFooter)
    remove($copyResult)
    hide($colorH)
    hide($start)
    remove($resultH)


}

function showBox() {
    hide($copyResult)
    $game.style.backgroundColor = 'white'
    renderBox()
    
}

function renderBox() {
    if ($input.value = $resultH.textContent) {
    $game.innerHTML = ''
    var box = document.createElement('div')
    box.style.position = 'absolut'
    box.style.top ='60px'
    box.style.left = '60px'
    box.style.height = box.style.width = '100px'
    box.style.backgroundColor = $input.value
    box.setAttribute('data-box','true')
    $game.insertAdjacentElement('afterbegin',box) }
    
    else {$copyResult.classList.remove('hide')
        $copyResult.textContent = 'wrong input. Try again'
} 
}

function handleBoxClick(event) {
    if (event.target.dataset.box) {
        $start.classList.remove('hide')
        $game.style.backgroundColor = '#ccc'
        $game.innerHTML = ''
        $colorH.classList.remove('hide')
        $resultH.classList.add('hide')
    }
}

function hide($el) {
    $el.classList.add('hide')
}
function remove($el) {
    $el.classList.remove('hide')
}


function generateColor() {
    var leters = '0123456789ABCDEF'
    color = '#'
    for (var i = 0; i<6; i++) {
        color+=leters[Math.floor(Math.random()*16)]
    }
    return color
}

console.log(generateColor())