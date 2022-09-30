'use strict'

function importAll(img) {

    const obj = {};
    const keys = img.keys(); // original url

    keys.forEach((key) => {
        const name = key.match(/(?<=\/)\w+/)[0]; // get file name
        obj[name] = img(key) // img(key) to get hash url
    })

    return obj
}

function createMenuPage() {

    const img = importAll(require.context('../img/menu/', true, /\.(svg|jpg|jpeg|webp)$/i));

    const template = `
        <div class="title">
            <h1 >Menu</h1>
        </div>
        <div class="wrap">
            <h2>Antipasto</h2>
            <div class="item">
                <div class="name">
                    <h3>Barbecued octopus with tahini sauce</h3>
                    <span class="cost">4$</span>
                </div>
                <div class="info">
                    <p>I love the charred flavours of barbecued octopus, with this smooth tahini sauce on top. The tahini sauce is also beautiful with barbecued squid or cuttlefish, or a fillet of barbecued fish.</p>
                    <div class="image">
                        <img src="${img.bbq_octopus}" alt="BBQ Octopus">
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="name">
                    <h3>Pop-Up Oysters</h3>
                    <span class="cost">3$</span>
                </div>
                <div class="info">
                    <p>Not an oyster-shucking pro? Throw them right on the grill and let the heat open them up for you.</p>
                    <div class="image">
                        <img src="${img.oysters}" alt="Oysters">
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="name">
                    <h3>Shrimp with Condensed Milk Sauce</h3>
                    <span class="cost">5$</span>
                </div>
                <div class="info">
                    <p>The shrimp get an extra punch of flavor from the dipping sauce, which is spiked with Thai green chiles and tempered with sweetened condensed milk.</p>
                    <div class="image">
                        <img src="${img.grilled_shrimp}" alt="Shrimp">
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap">
            <h2>Main Dish</h2>
            <div class="item">
                <div class="name">
                    <h3>Red Snapper with Smoked Almond Chimichurri</h3>
                    <span class="cost">8$</span>
                </div>
                <div class="info">
                    <p>I love the charred flavours of barbecued octopus, with this smooth tahini sauce on top. The tahini sauce is also beautiful with barbecued squid or cuttlefish, or a fillet of barbecued fish.</p>
                    <div class="image">
                        <img src="${img.red_snapper}" alt="Red Snapper">
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="name">
                    <h3>Grilled Split Lobster</h3>
                    <span class="cost">9$</span>
                </div>
                <div class="info">
                    <p>Splitting lobsters in half makes them easier to grill—and eat.</p>
                    <div class="image">
                        <img src="${img.lobster}" alt="Lobster">
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="name">
                    <h3>Sautéed Garlic Butter Dungeness Crab</h3>
                    <span class="cost">9$</span>
                </div>
                <div class="info">
                    <p>Sauteed Garlic Butter Dungeness Crab a total delicacy, these crab are easily cooked to perfection in an irresistible garlic butter sauce.</p>
                    <div class="image">
                        <img src="${img.dungeness_crab}" alt="Dungeness Crab">
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="name">
                    <h3>Oysters with Chorizo Butter</h3>
                    <span class="cost">7$</span>
                </div>
                <div class="info">
                    <p>No shucking necessary: Once the oysters open on the grill, simply top them with chef smoky, tangy butter.</p>
                    <div class="image">
                        <img src="${img.grilled_oysters}" alt="Oysters">
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap">
            <h2>Soup</h2>
            <div class="item">
                <div class="name">
                    <h3>Paila marina</h3>
                    <span class="cost">5$</span>
                </div>
                <div class="info">
                    <p>consisting of a shellfish stock combined with a variety of img, shellfish, herbs, spices, and vegetables such as tomatoes, bell peppers, carrots, and onions.</p>
                    <div class="image">
                        <img src="${img.marina}" alt="Marina">
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="name">
                    <h3>Kalakeitto</h3>
                    <span class="cost">5$</span>
                </div>
                <div class="info">
                    <p>It consists of filleted rainbow trout chunks and diced Carrots, potatoes, onions, that are simmered in a rich, buttery fish broth.</p>
                    <div class="image">
                        <img src="${img.kalakeitto}" alt="Kalakeitto">
                    </div>
                </div>
            </div>
        </div>
    `
    return template
}

export {
    createMenuPage
};