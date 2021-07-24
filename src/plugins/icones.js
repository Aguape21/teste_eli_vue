//lista de icones
// https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free

//tutorial
// https://github.com/FortAwesome/vue-fontawesome


// <font-awesome-icon icon="bars" size="2x" />whatsapp

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faBars, faUser])

export default FontAwesomeIcon
