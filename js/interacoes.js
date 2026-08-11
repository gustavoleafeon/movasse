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

// ===== MODAL - VERSÃO SIMPLES E FUNCIONAL =====
// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado - Iniciando modal...');
    
    // Pega o modal
    var modal = document.getElementById('Modal');
    console.log('Modal encontrado?', modal);
    
    if (!modal) {
        console.error('ERRO: Modal não encontrado no HTML!');
        return;
    }
    
    // Pega os botões de fechar
    var closeBtn = document.querySelector('.close-btn');
    var fecharBtn = document.getElementById('fechar-modal');
    
    // FUNÇÃO PARA ABRIR MODAL
    function abrirModal(titulo) {
        console.log('Abrindo modal...', titulo);
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Atualiza o título se fornecido
        if (titulo) {
            var tituloEl = document.getElementById('modal-titulo');
            if (tituloEl) {
                tituloEl.textContent = titulo;
            }
        }
    }
    
    // FUNÇÃO PARA FECHAR MODAL
    function fecharModal() {
        console.log('Fechando modal...');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // ==== BOTÕES DOS PACOTES ====
    // Pega TODOS os botões com as classes
    var botoes = document.querySelectorAll('.pac-fotos, .pac-reservas');
    console.log('Botões encontrados:', botoes.length);
    
    if (botoes.length === 0) {
        console.warn('Nenhum botão .pac-fotos ou .pac-reservas encontrado!');
    }
    
    // Adiciona evento para CADA botão
    botoes.forEach(function(botao, index) {
        console.log('Configurando botão', index, botao);
        
        botao.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Botão clicado!', this);
            
            // Encontra o card pai
            var card = this.closest('.car-pacote-info');
            var titulo = 'Detalhes do Pacote';
            
            if (card) {
                var h3 = card.querySelector('h3');
                if (h3) {
                    titulo = h3.textContent.trim();
                }
            }
            
            // Define o título baseado no botão
            if (this.classList.contains('pac-fotos')) {
                abrirModal('📸 Fotos - ' + titulo);
            } else if (this.classList.contains('pac-reservas')) {
                abrirModal('📝 Reservar - ' + titulo);
            } else {
                abrirModal(titulo);
            }
        });
    });
    
    // ==== FECHAR MODAL ====
    // Botão X
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            fecharModal();
        });
    }
    
    // Botão Fechar
    if (fecharBtn) {
        fecharBtn.addEventListener('click', function(e) {
            e.preventDefault();
            fecharModal();
        });
    }
    
    // Clicar fora do modal (no overlay)
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            fecharModal();
        }
    });
    
    // Tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            fecharModal();
        }
    });
    
    console.log('Modal configurado com sucesso!');
});