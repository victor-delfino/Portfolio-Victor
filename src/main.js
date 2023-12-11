// script.js

// Função para aplicar efeito de fade-in
function fadeIn(element) {
    element.style.opacity = 0;
    let opacity = 0;

    const fadeEffect = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.05;
            element.style.opacity = opacity;
        } else {
            clearInterval(fadeEffect);
        }
    }, 50);
}

// Função para realçar itens da lista no hover
function highlightListItem(listItem) {
    listItem.style.backgroundColor = '#333'; // Altere a cor conforme desejado
    listItem.style.transition = 'background-color 0.3s';
}

// Adiciona eventos após o carregamento da página
document.addEventListener('DOMContentLoaded', function () {
    // Obtém os elementos da lista
    const listItems = document.querySelectorAll('ul li');

    // Aplica efeito de fade-in para a seção-1
    const section1 = document.querySelector('.section-1');
    fadeIn(section1);

    // Adiciona eventos de realce para cada item da lista
    listItems.forEach((item) => {
        item.addEventListener('mouseover', () => highlightListItem(item));
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = 'transparent';
        });
    });
});

