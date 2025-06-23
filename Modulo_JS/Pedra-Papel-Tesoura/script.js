var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var enemyOpt = "";

function validarVitoria() {
    const vencedor = document.querySelector('.vencedor');
    if (playerOpt == "papel") {
        if (enemyOpt == "pedra") {
            vencedor.innerHTML = "Você venceu! Papel cobre Pedra.";
        } else if (enemyOpt == "tesoura") {
            vencedor.innerHTML = "Você perdeu! Tesoura corta Papel.";
        } else {
            vencedor.innerHTML = "Empate!";
        }
    } else if (playerOpt == "pedra") {
        if (enemyOpt == "tesoura") {
            vencedor.innerHTML = "Você venceu! Pedra quebra Tesoura.";
        } else if (enemyOpt == "papel") {
            vencedor.innerHTML = "Você perdeu! Papel cobre Pedra.";
        } else {
            vencedor.innerHTML = "Empate!";
        }
    } else if (playerOpt == "tesoura") {
        if (enemyOpt == "papel") {
            vencedor.innerHTML = "Você venceu! Tesoura corta Papel.";
        } else if (enemyOpt == "pedra") {
            vencedor.innerHTML = "Você perdeu! Pedra quebra Tesoura.";
        } else {
            vencedor.innerHTML = "Empate!";
        }
    }
}

function resetEnemy() {
    const enemyImgs = document.querySelectorAll('.enemy-options img');
    for (let i = 0; i < enemyImgs.length; i++) {
        enemyImgs[i].style.opacity = '0.3';
    }
}

function inimigoJogar() {
   let rand = Math.floor(Math.random() * 3);
   const enemyOption = document.querySelectorAll('.enemy-options div');
    resetEnemy();
   for (var i = 0; i < enemyOption.length; i++) {
        if (i == rand) {
            enemyOption[i].childNodes[0].style.opacity = '1';
            enemyOpt = enemyOption[i].childNodes[0].getAttribute('opt');
        }
    }

    validarVitoria();
}

function resetOpacityPlayer() {
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.opacity = '0.3';
    }
}

for (var i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', function(t) {
       resetOpacityPlayer();
       t.target.style.opacity = '1';
       playerOpt = t.target.getAttribute('opt');

         inimigoJogar();
       
    });
}