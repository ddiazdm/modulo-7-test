import {partida}from './modelo'

export const elementoImagen = document.getElementById("cartaImage");
export const scoreDisplay = document.getElementById('score-display');
export const gameOverDiv = document.getElementById('game-over');
export const elementoDameCarta = document.getElementById("dameCarta");
export const mePlanto = document.getElementById("mePlanto");
export const elementoPartida = document.getElementById('nuevaPartida');

export function gestionarPartida() {
    if (partida.puntuacion === 7.5) {
        finalizarJuego("He ganado la partida");
    }

    if (partida.puntuacion > 7.5) {
        finalizarJuego("Game Over: Te has pasado de 7.5 puntos.");
    }
}

export function nuevaPartida() {
    partida.puntuacion = 0;

    muestraPuntuacion();
    
    if (elementoImagen && elementoImagen instanceof HTMLImageElement) {
        elementoImagen.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    }

    if (gameOverDiv && gameOverDiv instanceof HTMLDivElement) {
        gameOverDiv!.style.display = 'none';
    }

    if (elementoDameCarta && elementoDameCarta instanceof HTMLButtonElement) {
        elementoDameCarta.removeAttribute('disabled');
    }

    if (mePlanto && mePlanto instanceof HTMLButtonElement) {
        mePlanto.removeAttribute('disabled');
    }

    if (elementoPartida && elementoPartida instanceof HTMLButtonElement) {
        elementoPartida.style.display = 'none';
    }
}

export function finalizarJuego(mensaje: string) {
    if (gameOverDiv && gameOverDiv instanceof HTMLDivElement) {
        gameOverDiv.style.display = 'block';
        gameOverDiv.innerText = mensaje;
    }
    if (elementoDameCarta && elementoDameCarta instanceof HTMLButtonElement) {
        elementoDameCarta.setAttribute('disabled', 'true')
    };

    if (mePlanto && mePlanto instanceof HTMLButtonElement) {
        mePlanto.setAttribute('disabled', 'true')
    };

    if (elementoPartida && elementoPartida instanceof HTMLButtonElement) {
        elementoPartida.style.display = 'block';
    }
}

export function muestraPuntuacion() {
    if (scoreDisplay && scoreDisplay instanceof HTMLDivElement) {
        scoreDisplay.innerText = partida.puntuacion <= 7.5 ? `Puntuación: ${partida.puntuacion}` : `Puntuación: ${partida.puntuacion} (¡Te has pasado de la puntuación!)`;
    }

}


export function pintarCarta(urlCarta: string) {
    if (elementoImagen && elementoImagen instanceof HTMLImageElement) {
        elementoImagen.src = urlCarta;
        elementoImagen.style.display = 'block';
    }
}
