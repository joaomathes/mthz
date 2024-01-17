function addFlower() {
    const flowerGarden = document.getElementById('flowerGarden');

    const flowerElement = document.createElement('div');
    flowerElement.className = 'flower';

    flowerGarden.appendChild(flowerElement);
}
