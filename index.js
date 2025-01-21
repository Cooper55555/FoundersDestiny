const cards = [
    { name: '11/100', image: 'Pokemon set/11.png', description: '' },
    { name: '12/100', image: 'Pokemon set/12.png', description: '' },
    { name: '13/100', image: 'Pokemon set/13.png', description: '' },
    { name: '21/100', image: 'Pokemon set/21.png', description: '' },
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