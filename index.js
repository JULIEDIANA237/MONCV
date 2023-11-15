const progressBars = document.querySelectorAll('.progress-bar');

// Set progress bar values
progressBars.forEach((progressBar, index) => {
  const value = (index + 1) * 25;
  progressBar.style.width = `${value}%`;
});

function addSkill() {
  var skillsContainer = document.getElementById('skills-container');

  // Crée une nouvelle compétence
  var skill = document.createElement('div');
  skill.classList.add('skill');

  // Demande à l'utilisateur le nom et le pourcentage de la compétence
  var skillName = prompt('Nom de la compétence :');
  var skillPercentage = prompt('Pourcentage de la compétence :');

  // Crée le titre de la compétence
  var skillTitle = document.createElement('h3');
  skillTitle.textContent = skillName;

  // Crée la barre de progression
  var progressBar = document.createElement('div');
  progressBar.classList.add('progress-bar');

  // Crée la progression (en fonction du pourcentage entré)
  var progress = document.createElement('div');
  progress.classList.add('progress');
  progress.style.width = skillPercentage + '%';

  // Ajoute la progression à la barre de progression
  progressBar.appendChild(progress);

  // Ajoute le titre et la barre de progression à la compétence
  skill.appendChild(skillTitle);
  skill.appendChild(progressBar);

  // Ajoute la compétence à la grille des compétences
  skillsContainer.appendChild(skill);
}
