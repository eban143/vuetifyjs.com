export default {
  header: 'Stepper',
  headerText: 'El componente `v-stepper` muestra el progreso en pasos numerados.',
  components: [
    'v-stepper',
    'v-stepper-step',
    'v-stepper-content',
    'v-stepper-header'
  ],
  examples: [{
    example: {
      header: 'Ejemplo',
      desc: 'Un stepper puede ser utilizado para una multitud de escenarios, incluyendo carritos de compras, creación de registros y más..'
    },
    editable: {
      header: 'Pasos editables',
      desc: 'Un paso editable puede ser seleccionado por un usuario en cualquier punto y lo llevará hasta ese paso.'
    },
    nonEditable: {
      header: 'Pasos no editables',
      desc: 'Los pasos no editables obligan al usuario a llevar un proceso lineal.'
    },
    optional: {
      header: 'Pasos opcionales',
      desc: 'Un paso opcional puede ser llamado con un sub-texto.'
    },
    horizontal: {
      header: 'Pasos horizontales',
      desc: 'Los steppers horizontales mueven al usuario en el eje X a través de los pasos definidos..'
    },
    vertical: {
      header: 'Steppers verticales',
      desc: 'Los steppers verticales mueven al usuario en el eje Y, y trabajan exactamente de la misma forma que su contraparte horizontal.'
    },
    linear: {
      header: 'Steppers lineales',
      desc: 'Los steppers lineales siempre moverán al usuario a través del camino que tú decidas.'
    },
    nonLinear: {
      header: 'Steppers no lineales',
      desc: 'Los steppers no lineales permitirán al usuario que se mueva en tu proceso de cualquier manera que ellos elijan.'
    },
    alternateLabels: {
      header: 'Etiquetas alternativas',
      desc: 'Los steppers también tienen un estilo de etiqueta alternativa que coloca el título debajo del paso mismo.'
    },
    error: {
      header: 'Estado de error multi línea',
      desc: 'Un estado de error puede ser mostrado para notificar al usuario de alguna acción que debe llevarse a cabo.'
    },
    alternateError: {
      header: 'Estado de error multi línea con etiqueta alternativa',
      desc: 'El estado de error también puede ser aplicado al estilo de la etiqueta alternativa.'
    },
    verticalError: {
      header: 'Estado de error multi línea vertical',
      desc: 'El mismo estado también aplica para los steppers verticales.'
    },
    dynamic: {
      header: 'Pasos dinámicos',
      desc: 'Los steppers pueden tener sus pasos dinámicamente agregados o quitados. Si un paso actualmente activo es removido, asegúrate de tomar esto en cuenta haciendo el cambio en el modelo.'
    }
  }],
  props: {
    altLabels: 'Coloca las etiquetas debajo del paso',
    complete: 'Marca el paso como completo',
    completeIcon: 'Ícono para mostrar cuando el paso se marca como completo',
    editable: 'Marca el paso como editable',
    editIcon: 'Ícono a mostrar cuando el paso es editable',
    errorIcon: 'Ícono a mostrar cuando el paso contiene un error',
    nonLinear: 'Permitir que el usuario brinque a cualquier paso',
    vertical: 'Muestra el paso verticalmente',
    'v-stepper-step': {
      step: 'El contenido a mostrar dentro del círculo del paso'
    },
    'v-stepper-content': {
      step: 'Configura el paso al que se asociará el contenido'
    }
  }
}
