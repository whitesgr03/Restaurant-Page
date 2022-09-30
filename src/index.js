'use strict'

import {createHomePage as home } from './js/home'
import './css/style.css';

const content = document.querySelector('.content')

content.innerHTML = home();
