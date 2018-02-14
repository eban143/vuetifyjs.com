export default {
  props: {
    attach: 'Especifica de cuál elemento del DOM debe soltarse este componente. Utiliza ya sea un selector de CSS o una referencia del objeto que apunta al elemento.',
    contentClass: 'Aplica una clase personalizada al elemento que se soltó. Esto es útil porque el contenido se mueve al final de la app y no puede ser alcanzable por las clases que se pasan directamente al componente.'
  }
}
