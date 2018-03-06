export default {
  header: 'Botones: Floating Action Button',
  headerText: 'El componente `v-btn`  puede ser usado como un FAB. Esto provee a la aplicación de un punto de acción principal. Combinado con el componente `v-speed-dial` puedes crear una variedad de funciones disponibles para tus usuarios.',
  components: ['v-speed-dial', 'v-btn'],
  examples: [{
    promotedAction: {
      header: '_Promoted action_',
      desc: 'Los FAB pueden ser usados para agregar una acción especial a tu aplicación. El tamaño default será usado en la mayoría de los casos, mientras que la variante de tamaño `small` puede ser usada para mantener continuidad con elementos de tamaño similar.'
    },
    small: {
      header: 'Variante _small_',
      desc: 'Para una mejor apariencia, usamos un botón pequeño para que combine con nuestra lista de _avatars_.'
    },
    displayAnimation: {
      header: 'Animados',
      desc: 'Al ser mostrados por primera vez, los FAB deben animarse en la pantalla. Aquí usamos `v-fab-transition` con v-show. Puedes también usar cualquier transición personalizada ya sea de Vuetify o una hecha por tí.'
    },
    lateralScreens: {
      header: 'Pantallas laterales',
      desc: 'Cuando cambias la acción default de tu botóm, se recomienda que muestres una tansición que represente un cambio. Hacemos esto mediante un _binding_ de la prop `key` a un dato que puede mandar una señal apropiada de un cambio al sistema de transición de Vue. Aunque puedes usar una transición personalizada para esto, asegúrate de que la prop `mode` sea **out-in**.'
    },
    speedDial: {
      header: 'FAB con _speed-dial_',
      desc: 'El componente _speed-dial_ tiene una api muy robusta para personalizar la experiencia con FAB exactamente de la forma que tú quieras.'
    }
  }],
  props: {
    'v-btn': {
      block: 'Expande el botón al 100% del espacio disponible',
      depressed: 'Quita la sombra al botón',
      fab: 'Hace el botón redondo',
      flat: 'Quita el color de fondo del botón ',
      icon: 'Indica que el botón es un ícono - redondo y plano',
      inputValue: 'Controla el estado activo del botón',
      large: 'Botón de tamaño grande',
      loading: 'Agrega una ícono animado de "cargando"',
      outline: 'El botón tendrá un contorno',
      round: 'El botón será redondeado a los ladoss',
      small: 'Botón de tamaño pequeño',
      type: 'Configura el atributo _type_ del botón'
    },
    'v-speed-dial': {
      direction: 'La dirección en la cual el contenido del _speed-dial_ se mostrará. Los valores posibles son `top`, `bottom`, `left`, `right`.',
      openOnHover: 'Abre el _speed-dial_ al pasar el puntero por encima'
    }
  }
}
