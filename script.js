'use strict'
function po() {
    document.body.appendChild(document.createElement('div'));
    let el = document.querySelector('div')
    el.classList = 'box'
    el.style.width = '200px'
    el.style.padding = '30px'
    el.style.background = '#999'
    el.innerHTML = '<h1>見出し１</h1><p>本文のテキストです</p>'
}

document.onload = po();
