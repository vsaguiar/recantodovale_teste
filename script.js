document.getElementById('btnWhatsApp').addEventListener('click', function() {
    window.open('https://wa.me/5521972519639', '_blank');
});

document.getElementById('instagram-menu').addEventListener('click', function() {
    window.open('https://www.instagram.com/recantodovale.eventos', '_blank');
});

document.getElementById('instagram-footer').addEventListener('click', function() {
    window.open('https://www.instagram.com/recantodovale.eventos', '_blank');
});

document.getElementById('whatsapp-menu').addEventListener('click', function() {
    window.open('https://wa.me/5521972519639', '_blank');
});

document.getElementById('imgModal').addEventListener('click', function() {
    window.location.href = 'index.html';
});


// document.addEventListener('DOMContentLoaded', function() {
//     console.log('DOMContentLoaded foi acionado.');

//     document.querySelectorAll('.gallery-img').forEach(function(img) {
//         img.addEventListener('click', function() {
//             console.log('Clique na imagem foi acionado.');

//             // Criar um novo elemento img para exibir a imagem em tela cheia
//             var fullScreenImg = document.createElement('img');
//             fullScreenImg.src = img.src;
//             fullScreenImg.style.width = '30%'; // Define a largura para ocupar toda a largura disponível dentro do modal
//             fullScreenImg.style.height = 'auto'; // Altura automática para manter a proporção da imagem

//             // Limpar o conteúdo atual do modal
//             var modalBody = document.querySelector('.modal-body');
//             modalBody.innerHTML = '';

//             // Adicionar a imagem em tela cheia ao corpo do modal
//             modalBody.appendChild(fullScreenImg);

//             // Adicionar classe para centralizar a imagem em tela cheia
//             modalBody.classList.add('img-fullscreen');
//         });
//     });

//     // Remover classe quando o modal for fechado
//     var galeriaModal = document.getElementById('galeriaModal');
//     galeriaModal.addEventListener('hidden.bs.modal', function() {
//         var modalBody = document.querySelector('.modal-body');
//         modalBody.classList.remove('img-fullscreen');
//     });
// });
