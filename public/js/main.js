//Noméroter les div

var placesNumbered = document.getElementsByClassName("place");

for (var i = 0; i < placesNumbered.length; i++){
    placesNumbered[i].textContent = i;
}