// helper function for menu item
function createMenuItem(item_name, item_description) {
    const itemMenuCard = document.createElement('div');
    itemMenuCard.classList.add('grid-item');

    const itemName = document.createElement('span');
    itemName.classList.add('large');
    itemName.textContent = item_name;
    itemMenuCard.appendChild(itemName);

    const itemDescription = document.createElement('p');
    itemDescription.classList.add('medium');
    itemDescription.textContent = item_description;
    itemMenuCard.appendChild(itemDescription);

    return itemMenuCard
}

export default function () {
    const mainContainer = document.querySelector('#content');

    const menuCard = document.createElement('div');
    menuCard.classList.add('menu-card');
    mainContainer.appendChild(menuCard);
    menuCard.classList.add('menu-card');

    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('largest');
    menuTitle.textContent = 'Maven\'s Miraculous Meats';
    menuCard.appendChild(menuTitle);

    const grid = document.createElement('div');
    grid.classList.add('menu-grid');
    menuCard.appendChild(grid);

    const menuContent = [
        {item_name: 'Maven\'s Signature Steak', item_description: 'Juicy steak with mashed potatoes. Shaped like a brain for a lasting impression.'},
        {item_name: 'Hillock\'s Beginner Buster', item_description: 'Chicken repeatedly beat with a mace for extra tenderness. Served with potatoes, carrots, and broccoli'},
        {item_name: 'Ham of Ruin', item_description: 'A giant ham sliced into 7 pieces. It\'s said that finishing the ham will finish you.'},
        {item_name: 'Kitava\'s Grilled Chicken', item_description: 'A chicken grilled to golden perfection. It\'s seasoned with our own special sauce, lowering your resistance to elements once finished.'},
        {item_name: 'Guantlet of Meat', item_description: 'A full 10 course meal consisting of different cuts of steak, ham, and chicken.'},
        {item_name: 'Searing Exarch Steak', item_description: 'Steak seared by Michelin Star Chef Searing Exarch himself.'},
    ]

    menuContent.forEach(menuItem => {
        const itemMenuCard = createMenuItem(menuItem.item_name, menuItem.item_description);
        grid.appendChild(itemMenuCard)
    })
}