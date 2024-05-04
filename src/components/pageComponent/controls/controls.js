export const main = function () {
    const menuButton = document.getElementById('menu-button');
    const galeryButton = document.getElementById('galeria-button');
    const ubicationButton = document.getElementById('ubicacion-button');
    const reservationButton = document.getElementById('reservas-button');

    menuButton.addEventListener('click', () => {
        location.href = '../../../menu.html';
    });
    galeryButton.addEventListener('click', () => {
        location.href = './galeria.html';
    });
    ubicationButton.addEventListener('click', () => {
        location.href = './location.html';
    });
    reservationButton.addEventListener('click', () => {
        location.href = './reservas.html';
    });
}