
let images = document.querySelectorAll('.grid img');

images.forEach(function (img) {
    img.addEventListener('click', function () {
        showModal(img.src);
    });
});

let modal = document.getElementById("modal");

let modalImg = document.getElementById("modal-img");

function showModal(src) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modalImg.src = src;
}

function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}