// menu hamburguer //

function clickMenu(){
    let itens = document.getElementById('itens');
    if (itens.style.display === 'block' || itens.style.display === '') {
        itens.style.display = 'none';
    } else {
        itens.style.display = 'block';
    }
}

$(document).ready(function(){
    $('#destaque').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false
    });
});

// // <button class="header-home-btn" type="button" aria-label="Sair" data-modal-target="logout-modal">
//                     <i class="fas fa-home"></i>
//                 </button>

//    // Menu toggle
//     const toggleButton = document.querySelector('.menu-toggle');
//     const navBar = document.getElementById('navBar');
//     if (toggleButton && navBar) {
//         toggleButton.addEventListener('click', function() {
//             const isOpen = navBar.classList.toggle('open');
//             toggleButton.setAttribute('aria-expanded', String(isOpen));
//         });
//     }