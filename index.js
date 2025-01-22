const cards = [
    { name: '01/120', image: 'Pokemon set/1.png', description: 'Treecko' },
    { name: '02/120', image: 'Pokemon set/2.png', description: 'Grovyle' },
    { name: '03/120', image: 'Pokemon set/3.png', description: 'Sceptile' },
    { name: '04/120', image: 'Pokemon set/4.png', description: 'Cacnea' },
    { name: '05/120', image: 'Pokemon set/5.png', description: 'Cacturne' },
    { name: '06/120', image: 'Pokemon set/6.png', description: 'Tropius' },
    { name: '07/120', image: 'Pokemon set/7.png', description: 'Sunflora' },
    { name: '08/120', image: 'Pokemon set/8.png', description: 'Tangela' },
    { name: '09/120', image: 'Pokemon set/9.png', description: 'Tangrowth' },
    { name: '10/120', image: 'Pokemon set/10.png', description: 'Leafeon' },
    { name: '11/120', image: 'Pokemon set/11.png', description: 'Torchic' },
    { name: '12/120', image: 'Pokemon set/12.png', description: 'Combusken' },
    { name: '13/120', image: 'Pokemon set/13.png', description: 'Blaziken' },
    { name: '14/120', image: 'Pokemon set/14.png', description: 'Numel' },
    { name: '15/120', image: 'Pokemon set/15.png', description: 'Camerupt' },
    { name: '21/120', image: 'Pokemon set/21.png', description: 'Piplup' },
    { name: '49/120', image: 'Pokemon set/49.png', description: 'Heracross' },
    { name: '50/120', image: 'Pokemon set/50.png', description: 'Croagunk' },
    { name: '51/120', image: 'Pokemon set/51.png', description: 'Toxicroak' },
    { name: '52/120', image: 'Pokemon set/52.png', description: 'Riolu' },
    { name: '53/120', image: 'Pokemon set/53.png', description: 'Lucario' },
];

function displayCards() {
    const cardGrid = document.getElementById('cardGrid');

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.name}" onclick="openModal('${card.image}', '${card.name}')">
            <h2>${card.name}</h2>
            <p>${card.description}</p>
        `;
        cardGrid.appendChild(cardElement);
    });
}

function openModal(imageSrc, altText) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('caption');
    modal.style.display = "block";
    modalImg.src = imageSrc;
    captionText.innerHTML = altText;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

displayCards();