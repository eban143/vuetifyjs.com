export default {
  header: 'Directiva ripple (ondulaciones)',
  headerText: 'La directiva `v-ripple` se usa para mostrar una acción de un usuario. Puede ser aplicada a cualquier elemento de nivel de bloque (block level). Muchos componentes vienen con la directiva ripple integrada. Tal es el caso de `v-btn`, `v-tabs-item` y muchos más.',
  components: ['v-ripple'],
  examples: [{
    buttons: {
      header: 'Default',
      desc: 'Los botones por default tienen las ondulaciones (ripples) habilitadas. Esto puede quitarse con la propiedad `:ripple="false`.',
      uninverted: true
    },
    customColor: {
      header: 'Color personalizado',
      desc: 'Usando una clase auxiliar, puedes cambiar el color del ripple.',
      uninverted: true
    },
    tabs: {
      header: 'Tabs',
      desc: 'Las tabs tienen por default las ondulaciones deshabilitadas. Puedes habilitarlas con la propiedad `ripple`.',
      uninverted: true
    },
    navigationDrawers: {
      header: 'Cajones de Navegación (Navigation drawers)',
      desc: 'Las listas tienen por default las ondulaciones deshabilitadas. Puedes habilitarlas con la propiedad `ripple`.',
      uninverted: true
    },
    toolbars: {
      header: 'Barras de herramientas',
      desc: 'Los elementos de las barras de herramientas tienen por default las ondulaciones deshabilitadas. Puedes habilitarlas con la propiedad `ripple`.',
      uninverted: true
    },
    expansionPanels: {
      header: 'Paneles de expansión',
      desc: 'Los paneles de expansión tienen por default las ondulaciones deshabilitadas. Puedes habilitarlas con la propiedad `ripple`.',
      uninverted: true
    },
    customRipple: {
      header: 'Componentes',
      desc: 'Muchos otros componentes tienen soporte integrado para ondulaciones. Habilítalos con la propiedad `ripple`.',
      uninverted: true
    },
    htmlElement: {
      header: 'Elementos estándar de HTML',
      desc: 'Agrega el efecto de ondulaciones a un elemento estándar de HTML. Puedes habilitarlo con la directiva `v-ripple`.',
      uninverted: true
    }
  }],
  props: [{
    'v-ripple': [
      {
        name: 'class',
        type: 'String',
        default: 'undefined',
        desc: 'Aplica una clase personalizada a la ondulación, se usa para cambiar el color'
      },
      {
        name: 'center',
        type: 'Boolean',
        default: 'False',
        desc: 'Obliga a la ondulación a originarse desde el centro del target'
      }
    ]
  }]
}
