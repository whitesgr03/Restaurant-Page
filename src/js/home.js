'use strict'

import orcaCharacters from '../img/home/orca_cartoon.svg';
import sharkCharacters from '../img/home/shark_cartoon.svg';

function createHomePage() {

    const template = `
        <div class="title">
            <h1>Ocean Market</h1>
            <h2>A must-visit for every seafood lover </h2>
        </div>
        <p class="introduction">
            Archeological records suggest that orcas and sharks have been hunting and eating seafood for at least 250,000  years and I think it’s safe to say we’ve gotten pretty good at it. Some of the world’s greatest delicacies come from our oceans.Arctic to the Antarctic, these are the ultimate destinations for seafood.
        </p>
        <div class="animal">
            <img class="orca" src="${orcaCharacters}" alt="Orca Characters">
            <img src="${sharkCharacters}" alt="Shark Characters">
        </div>
    `
    return template
}

export {
    createHomePage
};