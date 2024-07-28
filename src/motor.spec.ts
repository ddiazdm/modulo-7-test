import { vi } from 'vitest'
import { generarCarta, obtenerValorCarta, generarNumeroAleatorio, obtenerUrlCarta } from './motor'


describe('generarCarta', () => {
    it("Deberia de sumar 2 si el numero aleatorio es mas de 7", () => {
        //Arrange
        const puntación: number = 8
        //Act
        const resultado: number = generarCarta(puntación)
        //Assert
        expect(resultado).toBe(10)

    })
    it("Deberia de sumar 2 si el numero aleatorio es mas de 7, si no quedarse igual", () => {
        //Arrange
        const puntación: number = 5
        //Act
        const resultado: number = generarCarta(puntación)
        //Assert
        expect(resultado).toBe(5)

    })
})

describe('obtenerValorCarta', () => {
    it("Deberia de devolver si numero si valor es menos que 7, si no deberia de devolver 0,5", () => {
        //Arrange
        const puntación: number = 8

        //Act
        const resultado: number = obtenerValorCarta(puntación)
        //Assert
        expect(resultado).toBe(0.5)

    })
    it("Deberia el numero si el valor es menor que 7", () => {
        //Arrange
        const puntación: number = 5
        //Act
        const resultado: number = obtenerValorCarta(puntación)
        //Assert
        expect(resultado).toBe(5)

    })
})

describe('generarNumeroAleatorio', () => {
    it("Deberia de generar un 1", () => {
        //Arrange

        vi.spyOn(global.Math, 'random').mockReturnValue(0)

        //Act
        const resultado: number = generarNumeroAleatorio()
        //Assert
        expect(resultado).toBe(1);

    })
    it("Deberia de generar un 5", () => {
        //Arrange
        
        vi.spyOn(global.Math, 'random').mockReturnValue(0.4)

        //Act
        const resultado: number = generarNumeroAleatorio()
        //Assert
        expect(resultado).toBe(5);

    })
})

describe('obtenerUrlCarta', () => {
    const baseURL = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/";

    it('Debería devolver la URL correcta para el As de Copas', () => {
        expect(obtenerUrlCarta(1)).toBe(`${baseURL}1_as-copas.jpg`);
    });

    it('Debería devolver la URL correcta para el Dos de Copas', () => {
        expect(obtenerUrlCarta(2)).toBe(`${baseURL}2_dos-copas.jpg`);
    });

    it('Debería devolver la URL correcta para el Tres de Copas', () => {
        expect(obtenerUrlCarta(3)).toBe(`${baseURL}3_tres-copas.jpg`);
    });

    it('Debería devolver la URL correcta para el Cuatro de Copas', () => {
        expect(obtenerUrlCarta(4)).toBe(`${baseURL}4_cuatro-copas.jpg`);
    });

    it('Debería devolver la URL correcta para el Cinco de Copas', () => {
        expect(obtenerUrlCarta(5)).toBe(`${baseURL}5_cinco-copas.jpg`);
    });

    it('Debería devolver la URL correcta para el Seis de Copas', () => {
        expect(obtenerUrlCarta(6)).toBe(`${baseURL}6_seis-copas.jpg`);
    });

    it('Debería devolver la URL correcta para el Siete de Copas', () => {
        expect(obtenerUrlCarta(7)).toBe(`${baseURL}7_siete-copas.jpg`);
    });

    it('Debería devolver la URL correcta para el Sota de Copas', () => {
        expect(obtenerUrlCarta(10)).toBe(`${baseURL}10_sota-copas.jpg`);
    });

    it('Debería devolver la URL correcta para el Caballo de Copas', () => {
        expect(obtenerUrlCarta(11)).toBe(`${baseURL}11_caballo-copas.jpg`);
    });

    it('Debería devolver la URL correcta para el Rey de Copas', () => {
        expect(obtenerUrlCarta(12)).toBe(`${baseURL}12_rey-copas.jpg`);
    });

    it('Debería devolver la URL por defecto para cartas no reconocidas', () => {
        expect(obtenerUrlCarta(0)).toBe(`${baseURL}back.jpg`);
        expect(obtenerUrlCarta(13)).toBe(`${baseURL}back.jpg`);
        expect(obtenerUrlCarta(-1)).toBe(`${baseURL}back.jpg`);
        expect(obtenerUrlCarta(999)).toBe(`${baseURL}back.jpg`);
    });
});