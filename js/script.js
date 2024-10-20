// JavaScript para el menú hamburguesa y la animación del encabezado

document.addEventListener("DOMContentLoaded", function () {
    const menuHamburguesa = document.getElementById("menu-hamburguesa");
    const menuPrincipalMovil = document.getElementById("menu-principal-movil");
    const encabezado = document.querySelector(".encabezado");

    // Evento para abrir/cerrar el menú hamburguesa
    menuHamburguesa.addEventListener("click", function () {
        menuHamburguesa.classList.toggle("abierto");
        menuPrincipalMovil.classList.toggle("abierto");
    });

    // Evento para cambiar el estilo del encabezado cuando se hace scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            encabezado.classList.remove("encabezado-transparente");
            encabezado.classList.add("encabezado-reducido");
        } else {
            encabezado.classList.remove("encabezado-reducido");
            encabezado.classList.add("encabezado-transparente");
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const servicios = document.querySelectorAll('.animacion-scroll');

    const observarServicios = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
                observador.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.3
    });

    servicios.forEach(servicio => {
        observarServicios.observe(servicio);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const elementosAnimacionImagen = document.querySelectorAll('.animacion-scroll-imagen');
    const elementosAnimacionTexto = document.querySelectorAll('.animacion-scroll-texto');

    const observarElementos = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
                observador.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.3
    });

    elementosAnimacionImagen.forEach(elemento => {
        observarElementos.observe(elemento);
    });

    elementosAnimacionTexto.forEach(elemento => {
        observarElementos.observe(elemento);
    });

    // Contadores
    function iniciarContador(elemento, valorFinal) {
        let contador = 0;
        const incremento = Math.ceil(valorFinal / 100);
        const actualizarContador = () => {
            contador += incremento;
            if (contador > valorFinal) {
                contador = valorFinal;
            }
            elemento.textContent = contador;
            if (contador < valorFinal) {
                requestAnimationFrame(actualizarContador);
            }
        };
        requestAnimationFrame(actualizarContador);
    }

    const contadorClientes = document.getElementById('clientes');
    const contadorExperiencia = document.getElementById('experiencia');
    const contadorResenas = document.getElementById('resenas');

    iniciarContador(contadorClientes, 63);
    iniciarContador(contadorExperiencia, 4);
    iniciarContador(contadorResenas, 152);
});

 document.addEventListener('DOMContentLoaded', function() {
        const slider = document.querySelector('.slider-testimonios');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3; // Velocidad del slider
            slider.scrollLeft = scrollLeft - walk;
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const slider = document.querySelector('.slider-testimonios');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3; // Velocidad del slider
            slider.scrollLeft = scrollLeft - walk;
        });
    });