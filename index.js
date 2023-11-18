document.getElementById("ajouter").addEventListener("click", function() {
  var competence = prompt("Nom de la compétence :");
  var pourcentage = prompt("Pourcentage :");
  
  if (competence && pourcentage) {
    var skillHTML = '<div class="skill"><span class="competence">' + competence + '</span><div class="progress"><div class="progress-bar" style="width: ' + pourcentage + '%;"></div></div></div>';
    document.querySelector(".skills").innerHTML += skillHTML;
  }
});

document.getElementById("ajout").addEventListener("click", function() {
  var diplome = prompt("Nom du diplôme :");
  var ecole = prompt("École/Année :");
  var matieres = prompt("Liste des matières (séparées par des virgules) :");
  
  if (diplome && ecole && matieres) {
    var formationHTML = '<div class="diplome"><h6>' + diplome + '</h6><em>' + ecole + '</em><ul>';
    var matiereArray = matieres.split(",");
    
    for (var i = 0; i < matiereArray.length; i++) {
      formationHTML += '<li>' + matiereArray[i].trim() + '</li>';
    }
    
    formationHTML += '</ul></div>';
    
    document.querySelector(".diplome").innerHTML += formationHTML;
  }
});

document.getElementById("add").addEventListener("click", function() {
  var experience = prompt("Nom de l'expérience :");
  // var ecole = prompt("École/Année :");
  var experiences = prompt("Liste des expériences (séparées par des virgules) :");
  
  if (experience  && matieres) {
    var experienceHTML = '<div class="diplome"><h6>' + experience + '</h6><ul>';
    var experienceArray = experiences.split(",");
    
    for (var i = 0; i < experienceArray.length; i++) {
      experienceHTML += '<li>' + experienceArray[i].trim() + '</li>';
    }
    
    experienceHTML += '</ul></div>';
    
    document.querySelector(".experience").innerHTML += experienceHTML;
  }
});
