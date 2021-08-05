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
  FaFolderOpen,
  OiDot,
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleDoubleRight,
  FaAngleRight,
  BiTelephoneForwardFill,
  CoSearch,
  FaShareSquare,
} from 'oh-vue-icons/icons'
OhVueIcon.add(
  BiWhatsapp, //  <oh-icon name="bi-whatsapp" />
  FaUsers, //  <oh-icon name="fa-users" />
  FaBars, //   <oh-icon name="fa-bars" />
  FaUserEdit, //  <oh-icon name="fa-user-edit" />
  RiCellphoneFill, //  <oh-icon name="ri-cellphone-fill" />
  MdEmailOutlined, //  <oh-icon name="md-email-outlined" />
  FaFolderOpen, //  <oh-icon name="fa-folder-open" />
  OiDot, //  <oh-icon name="oi-dot" />
  FaAngleDoubleLeft, //  <oh-icon name="fa-angle-double-left" />
  FaAngleLeft, //  <oh-icon name="fa-angle-left" />
  FaAngleDoubleRight, //   <oh-icon name="fa-angle-double-right" />
  FaAngleRight, // <oh-icon name="fa-angle-right" />
  BiTelephoneForwardFill, // <oh-icon name="bi-telephone-forward-fill" />
  CoSearch, // <oh-icon name="co-search" />
  FaShareSquare, // <oh-icon name="fa-share-square" />
)

export default OhVueIcon
