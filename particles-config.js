particlesJS('particles-js', {
    particles: {
      number: {
        value: 50, // Número de partículas
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#ff5e66' // Color de las partículas (blanco, puedes cambiarlo)
      },
      shape: {
        type: 'circle', // Forma: 'circle', 'edge', 'triangle', 'star', o 'polygon'
        stroke: {
          width: 0,
          color: '#000000'
        },
        polygon: {
          nb_sides: 5 // Si usas 'polygon', número de lados
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3, // Tamaño de las partículas
        random: true,
        anim: {
          enable: true,
          speed: 4,
          size_min: 0.3,
          sync: false
        }
      },
      line_linked: {
        enable: true, // Líneas entre partículas
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2, // Velocidad de movimiento
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab' // Puedes usar 'grab', 'bubble', 'repulse'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });