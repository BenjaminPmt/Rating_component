// Sélectionne toutes les étoiles
const stars = document.querySelectorAll('.star');
const btnReset = document.querySelector('.img_btn')

// Variable pour stocker la note sélectionnée
let selectedRating = 0;

// Ajouter des écouteurs d'événements pour chaque étoile
stars.forEach((star, index) => {
  star.addEventListener('mouseover', () => handleMouseOver(index));
  star.addEventListener('mouseout', handleMouseOut);
  star.addEventListener('click', () => handleClick(index));
});

// Fonction pour gérer le survol de la souris
function handleMouseOver(index) {
  // Change les étoiles jusqu'à celle survolée
  for (let i = 0; i <= index; i++) {
    stars[i].src = './img/star_full.png';
    if(index === i){
        stars[i].src= './img/star_hover.png'
    }
  }
}

// Fonction pour gérer la sortie de la souris
function handleMouseOut() {
  // Si aucune note n'est sélectionnée, réinitialise les étoiles
  if (selectedRating === 0) {
    stars.forEach((star) => {
      star.src = './img/star_empty.png';
    });
  } else {
    // Si une note est sélectionnée, affiche les étoiles jusqu'à cette note
    for (let i = 0; i < stars.length; i++) {
        if(stars[i].src = i < selectedRating){

            stars[i].src= './img/star_pink.png'

        }else{

            stars[i].src ='./img/star_empty.png';
        }
    }
  }
}

// Fonction pour gérer le clic sur une étoile
function handleClick(index) {
  // Fixe la note sélectionnée
  selectedRating = index + 1;
  // Change les étoiles jusqu'à celle cliquée
  for (let i = 0; i < stars.length; i++) {
    if(stars[i].src = i < selectedRating){
        stars[i].src = './img/star_pink.png'
    }else{
        stars[i].src = './img/star_empty.png';
    }
  }
}
// Fonction qui permet de reinitialiser les etoils
function handleReset(){
    selectedRating = 0;
    stars.forEach((star) => {
        star.src = './img/star_empty.png';
    });
}
btnReset.addEventListener('click', ()=> handleReset())
