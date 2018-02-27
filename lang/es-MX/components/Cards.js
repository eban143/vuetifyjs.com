export default {
  header: 'Card',
  headerText: 'El componente `v-card` es un componente versátil que puede ser usado desde un panel hasta para una imagen estática. El componente **card** tiene numerosos componentes auxiliares para hacer el markup tan sencillo como sea posible. Los componentes que no tienen opciones listadas utilizan la opción de componente funcional de **Vue** para hacer un render más rápido y sirven como _markup sugar_ para construir más fácilmente.',
  components: [
    'v-card',
    'v-card-media',
    'v-card-title',
    'v-card-actions'
  ],
  examples: [{
    components: {
      header: 'Componentes',
      desc: 'Un _card_ tiene 4 componentes básicos: `v-card-media`, `v-card-title`, `v-card-text` and `v-card-actions`.'
    },
    mediaWithText: {
      header: 'Contenido con texto',
      desc: 'Al hacer uso del sistema de _layout_, podemos agregar un texto personalizado en cualquier parte del fondo.'
    },
    horizontal: {
      header: 'Cards horizontales',
      desc: 'Usando `v-flex`, puedes crear cards personalizadas horizontales. Utiliza la propiedad `contain` para hacer que `v-card-media` se encoja y quepa en el contenedor, en lugar de cubrirlo..'
    },
    grids: {
      header: 'Grids',
      desc: 'Al utilizar grid lists puedes crear distribuciones bellas.'
    },
    customActions: {
      header: 'Acciones personalizadas',
      desc: 'Con una simple condición puedes agregar texto que permanece oculto hasta que se abre.'
    }
  }],
  props: {
    contain: 'Cambiar `background-size` al valor `contain`',
    flat: 'Quitar la sombra de la tarjeta',
    height: 'Define manualmente la altura de la tarjeta',
    hover: 'Aplicar una elevación más alta al pasar el puntero por encima',
    img: 'Especifica una imagen de fondo',
    primaryTitle: 'Aplica un padding al título principal',
    raised: 'Especifica una elevación más alta por default',
    src: 'La imagen que se desplegará como fondo',
    tile: 'Convierte el _card_ en un _tile_ al quitar el redondeo del borde'
  }
}
