const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">Index Number: ${score.indexNumber} (${score.course}) - Score: ${score.score}</li>`;
  })
  .join("");

function resetScore(){
    localStorage.clear()
    window.location.href = 'highscores.html'
  }

