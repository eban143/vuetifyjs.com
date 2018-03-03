export default {
  header: 'Divider',
  headerText: 'El componente `v-divider` se usa para separar secciones de las listas.',
  components: ['v-divider'],
  examples: [{
    fullBleed: {
      header: 'Sangrado completo',
      desc: 'Los _dividers_ de sangrado completo se extienden a todo el ancho del contenido. '
    },
    lightAndDark: {
      header: 'Claro y oscuro',
      desc: 'Los Dividers tienen variantes _light_ y _dark_.',
      uninverted: true
    },
    inset: {
      header: 'Inset dividers',
      desc: 'Los _inset dividers_ se mueven 72px hacia la derecha arriba. Esto causará que se alineen con los items de la lista..'
    },
    subheaders: {
      header: '_Subheaders_ y _dividers_',
      desc: 'Los subheaders pueden alinearse con los _inset dividers_ usando la misma prop..'
    },
    dividerList: {
      header: '_List dividers_',
      desc: 'Los _inset dividers_ y los _subheaders_ pueden ayudar a separar el contenido.'
    },
    dividerListPortrait: {
      header: '_Dividers_ en modo vertical',
      desc: 'Crea _cards_ personalizadas para que se ajusten a cualquier caso de uso'
    }
  }],
  props: {
    inset: 'Agrega indentación (72px)'
  }
}
