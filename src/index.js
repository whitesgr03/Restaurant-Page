'use strict'

import {createHomePage as home } from './js/home'
import {createMenuPage as menu }  from './js/menu'
import './css/style.css';

const container = document.querySelector('.container')
const content = document.querySelector('.content')

container.addEventListener('click', switchPage)

content.innerHTML = home();

function switchPage(e) {
    if (e.target.tagName !== 'BUTTON') return

    const page = e.target.className;
    const handleRender = {
        home,
        menu,
    }

    const template = handleRender[page]()
    content.innerHTML = template
}
