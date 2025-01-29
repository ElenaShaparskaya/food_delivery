const modal = document.querySelector('.cart-modal__overlay');
const cartBtn = document.querySelector('#cart-button');
const cartClose = document.querySelector('#cart-close');

// console.log(cartBtn);

cartBtn.addEventListener('click', () => {
    // modal.style.display = 'flex';
    modal.classList.add('open');
});

cartClose.addEventListener('click', () => {
    // modal.style.display = 'none';
    modal.classList.remove('open');
});