export default {
  header: 'Snackbar',
  headerText: 'El componente `v-snackbar` se utiliza para mostrar un mensaje rápido al usuario. Los snackbars tienen soporte para posicionamiento, tiempo de espera antes de quitarse y _callbacks_',
  components: ['v-snackbar'],
  examples: [{
    position: {
      header: 'Posición',
      desc: 'El snackbar estándar es útil para llamar la atención hacia alguna función que acaba de suceder.'
    },
    contextual: {
      header: 'Contextual',
      desc: 'Puedes también aplicar un color al snackbar para que vaya mejor con tu implementación.'
    }
  }],
  props: {
    multiLine: 'Hace que el snackbar aparezca más alto (móviles)',
    timeout: 'El tiempo de espera hasta que el snackbar se haga completamente invisible',
    vertical: 'Apila los snackbars verticalmente (móviles)'
  }
}
