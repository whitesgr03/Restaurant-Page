'use strict'

import orca from '../img/contact/orca.jpeg';
import shark from '../img/contact/shark.webp';


function createContactPage() {

    const template = `
        <div class="title">
            <h1 >Contact Us</h1>
        </div>
        <div class="wrap">
            <div class="item">
                <div class="info">
                    <h3>Boss Orcark</h3>
                </div>
                <div class="animal">
                    
                    <p>Deadly and beautiful apex chefs that lurk in ocean</p>
                    <img src="${orca}" alt="Boss Orca">
                </div>
            </div>
            <div class="item">
                <div class="info">
                    <h3>Manager Sharka</h3>
                </div>
                <div class="animal">
                    <p>The oldest hunters also are true super fisherman</p>
                    <img src="${shark}" alt="ManagerShark">
                </div>
            </div>
            <div class="item">
                <div class="info">
                    <h3>hours</h3>
                    <ul>
                        <li>Sunday: 6am - 12pm</li>
                        <li>Monday: 6am - 12pm</li>
                        <li>Tuesday: 6am - 12pm</li>
                        <li>Wednesday: 6am - 12pm</li>
                        <li>Thursday: 6am - 12pm</li>
                        <li>Friday: 10am - 12pm</li>
                        <li>Saturday: 10am - 12pm</li>
                    </ul>
                </div>
            </div>
            <div class="item">
                <div class="info">
                    <h3>Main store</h3>
                    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64722591.56959051!2d-149.23960340000002!3d-8.065379849999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76ed042c30f318eb%3A0x8eff14a070876cbc!2sPacific%20Ocean!5e0!3m2!1sen!2stw!4v1664445757828!5m2!1sen!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div class="item">
                <div class="info">
                    <h3>Branch store</h3>
                    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65352652.085742734!2d-31.498041349999983!3d-1.288586049999989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x65a81cae36eb8ff%3A0xa6342257f310534f!2sAtlantic%20Ocean!5e0!3m2!1sen!2stw!4v1664445877327!5m2!1sen!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                        </div>
            </div>
        </div>
    `
    return template
}

export {
    createContactPage
};