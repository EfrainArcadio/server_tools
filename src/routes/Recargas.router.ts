import { Router } from 'express'
import { body, param } from 'express-validator'
import { handleInputErrors } from '../middleware'
import {  getRecargasbyHexId } from '../handlers/recargas'

const routerRecargas = Router ()



routerRecargas.get('/:hex_card',
  param('hex_card')
    .custom(value => value.length == 8).withMessage('Numero de TMI no Válido'),
  handleInputErrors,
  getRecargasbyHexId
)

export default routerRecargas