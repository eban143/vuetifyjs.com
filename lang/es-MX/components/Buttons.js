export default {
  header: 'Button',
  headerText: 'El componente `v-btn` reemplaza el botón html estándar con un diseño de material design y una multitud de opciones. Cualquier clase auxiliar de color puede ser utilizada para alterar el color del texto o del fondo.',
  components: ['v-btn'],
  examples: [{
    usage: {
      header: 'Uso',
      desc: ''
    },
    flat: {
      header: 'Flat',
      desc: 'Los botones _flat_ no tienen sombra ni color de fondo. Sólo cuando se pasa el mouse por encima de ellos es que se muestra el contenedor del botón.'
    },
    raised: {
      header: 'Raised',
      desc: 'Los botones _raised_ tienen una sombra que incrementa cuando se hace click en ellos. Este es el estilo por default.'
    },
    depressed: {
      header: 'Depressed',
      desc: 'Los botones _depressed_ mantienen su color de fondo, pero no tienen sombra.'
    },
    dropdown: {
      header: 'Variantes de Button Dropdown',
      desc: 'Los _button dropdowns_ son selects regulares con estilos adicionales.',
      uninverted: true
    },
    toggle: {
      header: 'Button Toggle',
      desc: 'Los _toggle buttons_ son escencialmente radio o checkboxes estilizados, dependiendo de las propiedades selecionadas. Este componente es compatible con el componente `v-toolbar`.'
    },
    icon: {
      header: 'Ícono',
      desc: 'Los íconos pueden ser usados como el contenido principal de un botón.'
    },
    floating: {
      header: 'Floating',
      desc: 'Los _floating buttons_ son redondos y generalmente contienen un ícono.'
    },
    loaders: {
      header: 'Loaders',
      desc: 'Al utilizar la prop `loading` puedes notificar al usuario que hay una actividad en proceso. El comportamiento default es que se aplica un componente `v-progress-circular` pero esto puede ser personalizado.'
    },
    sizing: {
      header: 'Tamaños',
      desc: 'Los botones pueden obtener diferentes tamaños para poder ser usados en una multitud de escenarios.'
    },
    outline: {
      header: 'Outline',
      desc: 'Los _outline buttons_ heredan sus bordes del color aplicado actual.'
    },
    round: {
      header: 'Round',
      desc: 'Los _rounded buttons_ se comportan de la misma forma que los botones regulares pero tienen bordes redondeados. '
    },
    block: {
      header: 'Block',
      desc: 'Los _block butons_ se extienden hasta abarcar el ancho total disponible.'
    }
  }],
  props: {
    'v-btn': {
      block: 'Expande el botón al 100% del espacio disponible',
      depressed: 'Quita la sombra al botón',
      fab: 'Hace el botón redondo',
      flat: 'Quita el color del fondo del botón',
      icon: 'Denota al botón como un ícono, redondo y plano',
      inputValue: 'Controla el estado activo del botón',
      large: 'Botón de tamaño grande',
      loading: 'Agrega un ícono animado "loading"',
      outline: 'El botón tendrá un contorno',
      round: 'El botón será redondeado de los lados',
      small: 'Botón de tamaño pequeño',
      type: 'Configura el atributo _type_ del botón'
    }
  }
}
