export default {
  header: 'Chip',
  headerText: 'El componente `v-chip` se utiliza para transmitir pequeñas porciones de información. Al utilizar la prop `close`, el chip se vuelve interactivo, permitiendo que el usuario interactúe con él..',
  components: ['v-chip'],
  examples: [{
    default: {
      header: 'Default',
      desc: 'Los chips vienen en 4 variaciones principales. Regular, con ícono, con retrato y cerrable.',
      uninverted: true
    },
    colored: {
      header: 'Coloreado',
      desc: 'Cualquier color de la paleta de Material Design puede ser utilizado para cambiar el color de un chip.'
    },
    icon: {
      header: 'Ícono',
      desc: 'Los chips pueden usar texto o cualquier ícono disponible en la librería de Material Icons..'
    },
    outline: {
      header: 'Contorno',
      desc: 'El color de contorno de los chips se hereda del color de texto actual.'
    },
    label: {
      header: 'Etiqueta',
      desc: 'Las etiquetas de los chips utilizan el border-radius de `v-card`.'
    },
    closable: {
      header: 'Cerrable',
      desc: 'Los chips cerrables pueden ser controlados con un v-model. Agrega un _listener_ al evento `input` si quieres saber cuando un chip ha sido cerrado.',
      uninverted: true
    },
    inSelects: {
      header: 'Uso en selects',
      desc: 'Los _selects_ pueden usar chips para mostrar selecciones de datos.',
      uninverted: true
    }
  }],
  props: {
    close: 'Agrega el botón _quitar_',
    disabled: 'Deshabilita el chip, haciéndolo no-seleccionable',
    label: 'Quita los círculos en los extremos',
    outline: 'Quita el fondo y aplica un color de borde y de texto',
    selected: 'Aplica un color de selección al chip. Principalmente utilizado para resaltar texto en un `v-select`',
    small: 'Disminuye el tamaño del chip'
  }
}
