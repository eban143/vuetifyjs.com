export default {
  props: {
    activator: 'Denota un activador personalizado para cuando el slot activador no se utiliza. String puede ser cualquier _querySelector_ válido y Object puede ser cualquier Node válido.',
    allowOverflow: 'Quita el reposicionamiento overflow para el componente.',
    maxWidth: 'Configura el ancho máximo para el componente.',
    minWidth: 'Configura el ancho mínimo para el componente.',
    nudgeBottom: 'Empujar el contenido hasta la parte de abajo.',
    nudgeLeft: 'Nudge the content to the left',
    nudgeRight: 'Nudge the content to the right',
    nudgeTop: 'Nudge the content to the top',
    nudgeWidth: 'Nudge the content width',
    offsetOverflow: 'Causes the component to flip to the opposite side when repositioned due to overflow',
    positionX: 'Used to position the content when not using an activator slot',
    positionY: 'Used to position the content when not using an activator slot',
    zIndex: 'The z-index used for the component'
  }
}
