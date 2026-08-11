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


// menu hamburguer
function clickMenu() {
    let itens = document.getElementById('itens');
    if (itens.style.display === 'block' || itens.style.display === '') {
        itens.style.display = 'none';
    } else {
        itens.style.display = 'block';
    }
}

// Slick Carousel
$(document).ready(function(){
    $('#destaque').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });
});

// ===== MODAL =====
// Espera o documento carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // Pega os elementos do modal
    var modal = document.getElementById('Modal');
    var closeBtn = document.querySelector('.close-btn');
    var fecharBtn = document.getElementById('fechar-modal');
    
    // Função para abrir o modal
    function abrirModal(titulo) {
        if (modal) {
            // Se tiver um título, atualiza
            if (titulo) {
                var tituloModal = modal.querySelector('h3');
                if (tituloModal) {
                    tituloModal.textContent = titulo;
                }
            }
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // trava o scroll
        }
    }
    
    // Função para fechar o modal
    function fecharModal() {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // libera o scroll
        }
    }
    
    // ===== BOTÕES DOS PACOTES =====
    // Pega todos os botões "Fotos" e "Reservar"
    var botoesFotos = document.querySelectorAll('.pac-fotos');
    var botoesReservar = document.querySelectorAll('.pac-reservas');
    
    // Adiciona evento para cada botão "Fotos"
    botoesFotos.forEach(function(botao) {
        botao.addEventListener('click', function() {
            // Encontra o card pai
            var card = this.closest('.car-pacote-info');
            if (card) {
                var titulo = card.querySelector('h3');
                if (titulo) {
                    abrirModal('📸 Fotos - ' + titulo.textContent);
                } else {
                    abrirModal('📸 Fotos do Pacote');
                }
            } else {
                abrirModal('📸 Fotos do Pacote');
            }
        });
    });
    
    // Adiciona evento para cada botão "Reservar"
    botoesReservar.forEach(function(botao) {
        botao.addEventListener('click', function() {
            var card = this.closest('.car-pacote-info');
            if (card) {
                var titulo = card.querySelector('h3');
                if (titulo) {
                    abrirModal('📝 Reservar - ' + titulo.textContent);
                } else {
                    abrirModal('📝 Reservar Pacote');
                }
            } else {
                abrirModal('📝 Reservar Pacote');
            }
        });
    });
    
    // ===== FECHAR MODAL =====
    // Fechar com o X
    if (closeBtn) {
        closeBtn.addEventListener('click', fecharModal);
    }
    
    // Fechar com o botão "Fechar"
    if (fecharBtn) {
        fecharBtn.addEventListener('click', fecharModal);
    }
    
    // Fechar clicando fora do modal (no overlay)
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === this) {
                fecharModal();
            }
        });
    }
    
    // Fechar com a tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal && modal.style.display === 'block') {
            fecharModal();
        }
    });
    
    // ===== TESTE: Adiciona um botão de teste =====
    console.log('Modal carregado! Clique em "Fotos" ou "Reservar" nos pacotes.');
});