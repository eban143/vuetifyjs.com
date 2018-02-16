export default {
  header: 'Bottom Nav',
  headerText: 'El componente `v-bottom-nav` es una alternativa al sidebar. Se usa principalmente en móviles y viene en dos variantes: íconos y texto y _recorrer_',
  components: ['v-bottom-nav'],
  examples: [{
    iconsAndText: {
      header: 'Íconos y texto',
      desc: 'Aunque está pensado para ser utilizado con el `vue-router`, también puedes controlar manualmente el estado activo de los botones al usar la prop `active.sync`. Puedes cambiar el valor de los botones si utilizas su atributo `value`.'
    },
    colorAndShift: {
      header: 'Color y "recorrer"',
      desc: 'Cuando utilizas un fondo de color, se recomienda usar la prop `light`. La prop `shift` esconderá el texto del botón hasta que se active. Ten en cuenta que el texto de `v-btn` debe estar envuelto en una etiqueta `<span>` forzosamente.'
    },
    toggle: {
      header: 'Alternar',
      desc: 'Como con otros componentes de Vuetify, puedes controlar el estado visible con `v-model`.'
    }
  }],
  props: {
    active: 'El valor del botón activo actual. Si el botón no tiene un valor, su índice será utilizado. Esta prop soporta el modificador **.sync**.',
    absolute: 'Mixins.Positionable.props.absolute',
    fixed: 'Mixins.Positionable.props.fixed'
  }
}
