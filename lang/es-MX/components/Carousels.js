export default {
  header: 'Carousel',
  headerText: 'El componente `v-carousel` se utiliza para mostrar grandes cantidades de contenido visual en un timer rotativo.',
  components: ['v-carousel', 'v-carousel-item'],
  examples: [{
    default: {
      header: 'Default',
      desc: 'Un carrusel por default tiene la transición slide.',
      uninverted: true
    },
    customTransition: {
      header: 'Transición personalizada',
      desc: 'También puedes aplicar tu propia transición personalizada.',
      uninverted: true
    },
    customDelimiter: {
      header: 'Delimitador personalizado',
      desc: 'También puedes cambiar el ícono del delimitador del carrusel.',
      uninverted: true
    },
    hideControls: {
      header: 'Esconder los controles',
      desc: 'Puedes esconder los controles de la parte inferior con la prop `hide-controls`.',
      uninverted: true
    }
  }],
  props: {
    appendIcon: 'Mixins.Input.props.appendIcon',
    prependIcon: 'Mixins.Input.props.prependIcon',
    cycle: 'Determina si el carrusel debe hacer mostrar las imágenes en un ciclo',
    delimiterIcon: 'Configura el ícono para el delimitador del carrusel',
    hideControls: 'Esconde los controles de navegación',
    hideDelimiters: 'Esconde el panel con los delimitadores del carrusel',
    interval: 'La duración entre imágenes en el ciclo',
    reverseTransition: 'Configura la transición reversa',
    src: 'La ruta a la imagen',
    transition: 'Mixins.Transitionable.props.transition'
  }
}
