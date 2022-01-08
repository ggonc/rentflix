$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// Ao clicar no botão "Favoritos" o ícone muda para um coração preenchido.
// Falta fazer o processo reverso quando clicado para remover dos favoritos.
// function alterarFavorito(){ 
//     $("#favorito").addClass("fas fa-heart");
// }

function alterarFavorito(){ 
    let favorito = document.getElementById("favorito");
    if (favorito.className == "far fa-heart"){
        favorito.classList.add("fas", "fa-heart", "like");
    } else if (favorito.className == "far fa-heart fas like"){
        favorito.classList.remove("fas", "like")
    }
}