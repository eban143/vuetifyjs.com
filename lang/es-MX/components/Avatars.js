export default {
  header: 'Avatar',
  headerText: 'El componente `v-avatar` se utiliza para controlar el tamaño y el radio del borde de las imágenes responsivas típicamente usadas para fotos de perfil.',
  components: ['v-avatar'],
  examples: [{
    standard: {
      header: 'Presentación estándar',
      desc: 'El avatar tiene un tamaño dinámico que puede ser escalado para cualquier situación. Una variación **tile** está disponible para mostrar un avatar sin bordes redondeados.'
    },
    advanced: {
      header: 'Uso avanzado',
      desc: 'Combinar un avatar con otro componente te permite construir bellas interfaces de usuario desde el primer momento.'
    },
    iconAndText: {
      header: 'ícono y texto',
      desc: 'Un avatar también acepta el componente `v-icon` o texto. Combina la funcionalidad para crear algo único.'
    }
  }]
}
