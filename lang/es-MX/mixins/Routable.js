export default {
  props: {
    activeClass: 'La clase que se aplica cuando el componente está activo. **Advertencia:** Dependiendo del componente, esto puede traer efectos secundarios. Si necesitas agregar una clase personalizada encima de la default, házlo así: <code>active-class="default-class your-class"</code>',
    append: 'Prop router-link del Vue Router',
    disabled: 'Route item deshabilitado',
    exact: 'Coincidir con el link exactamente. Sin esto, "/" coincidirá con todas las rutas',
    exactActiveClass: 'Prop router-link del Vue Router',
    href: 'Denotará la etiqueta del componente como `<a>`',
    nuxt: 'Especifica el link como un nuxt-link',
    replace: 'Prop router-link del Vue Router',
    to: 'Denotará la etiqueta del componente como `<router-link>`',
    tag: 'Especifica una etiqueta personalizada para ser usada en el componente',
    target: 'Especifica el atributo target, sólo funciona para la etiqueta `<a>`'
  }
}
