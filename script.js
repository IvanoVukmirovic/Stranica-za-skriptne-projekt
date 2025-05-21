// Povezivanje dugmadi sa funkcijama za otvaranje igara
document.getElementById('memory-game').querySelector('.play-btn').addEventListener('click', function() {
    window.location.href = 'memory.html';  // Poveži s memory igrom (moraš kreirati memory.html)
});

document.getElementById('tic-tac-toe').querySelector('.play-btn').addEventListener('click', function() {
    window.location.href = 'tic-tac-toe.html';  // Poveži s Tic-Tac-Toe igrom (moraš kreirati tic-tac-toe.html)
});

document.getElementById('quiz-game').querySelector('.play-btn').addEventListener('click', function() {
    window.location.href = 'quiz.html';  // Poveži s kviz igrom (moraš kreirati quiz.html)
});