import { Request, Response } from "express";
import Recargas2024 from "../models/Recargas2024.model";
import { Op } from "sequelize";

// export const getRecargas = async (req: Request, res: Response) => {
//   Recargas2024.removeAttribute('createdAt');
//   Recargas2024.removeAttribute('updatedAt');
//   Recargas2024.removeAttribute('id');
//   const recargas = await Recargas2024.findAll({
//   })
//   res.json({data: recargas})
// }

export const getRecargasbyHexId = async (req: Request, res: Response) => {
  const { hex_card } = req.params

  const recargas = await Recargas2024.findAll({
    attributes: [
      'id_transaccion_organismo',
      'provider',
      'tipo_tarjeta',
      'numero_serie_hex',
      'fecha_hora_transaccion',
      'tipo_equipo',
      'location_id',
      'tipo_transaccion',
      'saldo_antes_transaccion',
      'monto_transaccion',
      'saldo_despues_transaccion',
      'sam_serial_hex_ultima_recarga',
      'sam_serial_hex',
      'contador_recargas',
      'event_log',
      'load_log',
      'mac',
      'sam_counter',
      'environment',
      'environmet_issuer_id',
      'contract',
      'contract_tariff',
      'contract_sale_sam',
      'contract_restrict_time',
      'contract_validity_start_date',
      'contract_validity_duration',
    ],
    where: {
      numero_serie_hex: {
        [Op.iLike]: `%${hex_card}%`,
      },
    },
    order: [
      ['fecha_hora_transaccion', 'DESC']
  ]

  })
  if (!recargas) {
    return res.status(404).json({
      error: 'Sin informacion encontrada'
    });
  }
  res.json({ data: recargas })


}