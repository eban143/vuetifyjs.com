export default {
  header: 'Tab',
  headerText: 'El componente `v-tabs` se usa para esconder contenido detrás de un item seleccionable. También puede usarse como pseudo-navegación para una página, donde los tabs son links y los _tab-items_ son el contenido.',
  components: [
    'v-tabs',
    'v-tab',
    'v-tabs-items',
    'v-tab-item',
    'v-tabs-slider'
  ],
  examples: [{
    toolbar: {
      header: 'Toolbar tabs',
      desc: ''
    },
    fixedTabs: {
      header: 'Tabs fijos',
      desc: 'La prop **fixed-tabs** configura un mínimo de ancho más grande y aplica un nuevo máximo de ancho a los `v-tabs-items`. En pantallas de escritorio, los tab items serán centrados dentro del componente `v-tabs` y cambiarán para llenar el espacio disponible en móviles.'
    },
    // right: {
    //   header: 'Right aligned tabs',
    //   desc: 'The **right** prop aligns the tabs to the right'
    // },
    content: {
      header: 'Contenido',
      desc: 'Los tabs no son la única cosa que puedes poner dentro del componente `v-tabs`. En este ejemplo hemos agregado también un toolbar.'
    },
    search: {
      header: 'Con búsqueda',
      desc: 'Aquí hay otro ejemplo de contenido adicional dentro del componente `v-tabs`.'
    },
    iconsAndText: {
      header: 'Íconos y texto',
      desc: 'Al utilizar la prop **icons-and-text** puedes agregar íconos a cada elemento _tab_.'
    },
    desktop: {
      header: 'Tabs de escritorio',
      desc: ''
    },
    alignWithTitle: {
      header: 'Alinear tabs con el título del toolbar',
      desc: 'Hace que los `v-tabs` se alineen con el componente `v-toolbar-title` (`v-toolbar-side-icon` o `v-btn` deben utilizarse en un `v-toolbar`). Tal vez no funcione si el texto del tab se salta a la siguiente línea (_wrapped_).'
    },
    grow: {
      header: 'Grow',
      desc: 'La prop **grow** hará que todos los elementos tab abarquen el alto disponible.'
    },
    overflowToMenu: {
      header: 'Con menu',
      desc: 'Puedes usar un menú para que contenga tabs adicionales, cambiándolos al vuelo'
    },
    pagination: {
      header: 'Paginación',
      desc: 'Si los items de tabs sobrepasan a su contenedor (_overflow_), los controles de paginación aparecerán.'
    },
    icons: {
      header: 'Íconos personalizados',
      desc: '**prepend-icon** y **append-icon** pueden ser usadas para aplicar íconos personalizados de paginación.'
    }
  }],
  props: {
    alignWithTitle: 'Hace que `v-tabs` se alineen con el título del toolbar',
    prependIcon: 'Ícono de paginación izquierdo',
    appendIcon: 'Ícono de paginación derecho',
    right: 'Alinear tabs a la derecha'
  }
}
