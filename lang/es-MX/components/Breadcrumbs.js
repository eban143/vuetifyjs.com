export default {
  header: 'Breadcrumbs',
  headerText: 'El componente`v-breadcrumbs` es un auxiliar para navegar páginas. Puede aceptar un ícono de **Material icons** o caracteres como un divisor. Un arreglo de objetos que contenga los campos _href_, text y opcionalmente un _disabled_ puede pasarse a la propiedad **items** del componente. Adicionalmente, existe un slot regular para mayor control de los breadcrumbs, ya sea utilizando `v-breadcrumbs-item` u otro markup personalizado',
  components: ['v-breadcrumbs', 'v-breadcrumbs-items'],
  examples: [{
    textDividers: {
      header: 'Divisores de texto',
      desc: 'Por default, los breadcrumbs usan un divisor de texto. Este puede ser cualquier cadena.'
    },
    iconDividers: {
      header: 'Divisores de íconos',
      desc: 'Para la variante de íconos, los breadcrumbs pueden ser utilizados con cualquier ícono de Material Design.'
    }
  }],
  props: {
    divider: 'Especifica el caracter que divide',
    icons: 'Especifica que los divisores son íconos',
    justifyCenter: 'Alínea los divisores al centro',
    justifyEnd: 'Alínea los divisores al final',
    large: 'Incrementa el tamaño de la fuente del texto en el breadcrumb'
  }
}
