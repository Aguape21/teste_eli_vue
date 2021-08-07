/*
Pacote
https://www.npmjs.com/package/uuid
*/

import { v4, validate } from 'uuid'

const uuid = {
  uuid: (): string => v4(),
  validar: (texto: string|null): boolean => validate(texto||''),
}

export default uuid
