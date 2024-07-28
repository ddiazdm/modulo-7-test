import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./style.css";

import { partida } from './modelo'
import {
  gestionarPartida,
  nuevaPartida,
  finalizarJuego,
  pintarCarta,
  elementoDameCarta,
  muestraPuntuacion,
  mePlanto,
  elementoPartida

} from "./ui"
import { generarCarta, generarNumeroAleatorio, obtenerUrlCarta, obtenerValorCarta } from './motor';




document.addEventListener('DOMContentLoaded', () => {
  muestraPuntuacion();

  if (elementoDameCarta && elementoDameCarta instanceof HTMLButtonElement) {
    elementoDameCarta.addEventListener("click", () => {
      const numeroAleatorio = generarNumeroAleatorio();
      let carta = generarCarta(numeroAleatorio);
      const urlCarta = obtenerUrlCarta(carta);
      pintarCarta(urlCarta);
      let valorCarta = obtenerValorCarta(carta);
      partida.puntuacion += valorCarta;
      muestraPuntuacion();
      obtenerUrlCarta(carta);
      gestionarPartida();
    });
  }

  if (mePlanto && mePlanto instanceof HTMLButtonElement) {
    mePlanto.addEventListener("click", () => {
      let mensaje = "";
      if (partida.puntuacion < 4) {
        mensaje = "Has sido muy conservador.";
      } else if (partida.puntuacion === 5) {
        mensaje = "Te ha entrado el canguelo eh?";
      } else if (partida.puntuacion > 5 && partida.puntuacion < 7.5) {
        mensaje = "Casi casi...";
      } else if (partida.puntuacion === 7.5) {
        mensaje = "¡Lo has clavado! ¡Enhorabuena!";
      }
      finalizarJuego(mensaje);
    });
  }

  if (elementoPartida && elementoPartida instanceof HTMLButtonElement) {
    elementoPartida.addEventListener("click", () => {
      nuevaPartida();
    });
  }
});



