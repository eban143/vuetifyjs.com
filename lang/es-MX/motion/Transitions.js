export default {
  header: 'Movimiento',
  headerText: 'Las animaciones suaves ayudan a que una UI se sienta genial. Al utilizar el sistema de transiciones y los componentes funcionales reusables de Vue puedes controlar fácilmente el movimiento de tu aplicación. Puedes modificar la mayoría de las transiciones de tus componentes a través de la propiedad <code>transition</code>. ',
  components: [
    'v-fade-transition',
    'v-slide-x-transition',
    'v-slide-x-reverse-transition',
    'v-slide-y-transition',
    'v-slide-y-reverse-transition',
    'v-scale-transition'
  ],
  examples: [{
    slideXTransitions: {
      header: 'Transiciones Slide X',
      desc: 'Las transiciones Slide X se mueven en el eje horizontal.'
    },
    slideYTransitions: {
      header: 'Transiciones Slide Y',
      desc: 'Estas animaciones utilizan <code>$primary-transition</code>.'
    },
    scaleTransition: {
      header: 'Transición Scale',
      desc: 'Muchos de los componentes de Vuetify contienen una propiedad <code>transition</code> que te permite especificar una transición personalizada.'
    },
    fadeTransition: {
      header: 'Transición Fade',
      desc: 'Otro ejemplo de la transición fade puedes encontrarlo en el componente Carousel.'
    },
    customOrigin: {
      header: 'Origen personalizado',
      desc: 'Puedes cambiar el punto de origen de la transición con una simple propiedad.'
    }
  }],
  createYourOwnHeader: 'Crea una propia',
  createYourOwnText1: 'Puedes utilizar la función auxiliar transition de Vuetify para crear fácilmente tus propias transiciones personalizadas. Utilizando una opción <a href="https://vuejs.org/v2/guide/render-function.html#Functional-Components" target="_blank" rel="noopener">componente funcional</a> se asegurará de que tu transición es tan eficiente como sea posible. Simplemente importa la función:',
  createYourOwnText2: 'La función <code>createSimpleTransition</code> toma 1 argumento: name. Este será el nombre al que puedes ligar tu estilo. Aquí un ejemplo de cómo se ve <code>v-fade-transition</code>:',
  toc: [
    {
      text: 'Movimiento',
      href: 'introduccion'
    },
    {
      text: 'Ejemplos',
      href: 'ejemplos'
    },
    {
      text: 'Crea una propia',
      href: 'crea-una-propia'
    }
  ]
}
