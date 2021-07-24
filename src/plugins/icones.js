/*
        Gerenciar icones para a aplicação
        Para adicionar um icone:
            1. buscar aqui https://oh-vue-icons.netlify.app/
            2. Adicionar no import e no add.
            3. html=> <oh-icon name="bi-whatsapp" />
*/

import OhVueIcon from 'oh-vue-icons'

import {
  BiWhatsapp,
  FaUsers,
  FaBars,
  FaUserEdit,
  RiCellphoneFill,
  MdEmailOutlined,
} from 'oh-vue-icons/icons'
OhVueIcon.add(
  BiWhatsapp, //name="bi-whatsapp"
  FaUsers, //name="fa-users"
  FaBars, //name="fa-bars"
  FaUserEdit, //name="fa-user-edit"
  RiCellphoneFill, //name="ri-cellphone-fill"
  MdEmailOutlined, //name="md-email-outlined"
)

export default OhVueIcon
