import { Table, Column, Model, DataType} from 'sequelize-typescript'

@Table({
  tableName: 'datos_rre_2024',
})

export class Recargas2024 extends Model {
  @Column({
    type: DataType.STRING
  })
  declare id_transaccion_organismo: string;

  @Column({
    type: DataType.STRING
  })
  declare provider: string;

  @Column({
    type: DataType.STRING
  })
  declare tipo_tarjeta: string;

  @Column({
    type: DataType.STRING
  })
  declare numero_serie_hex: string;

  @Column({
    type: DataType.DATE
  })
  declare fecha_hora_transaccion: Date;

  @Column({
    type: DataType.STRING
  })
  declare tipo_equipo: string;

  @Column({
    type: DataType.STRING
  })
  declare location_id: string;

  @Column({
    type: DataType.STRING
  })
  declare tipo_transaccion: string;

  @Column({
    type: DataType.BIGINT
  })
  declare saldo_antes_transaccion: number;

  @Column({
    type: DataType.BIGINT
  })
  declare monto_transaccion: number;

  @Column({
    type: DataType.BIGINT
  })
  declare saldo_despues_transaccion: number;

  @Column({
    type: DataType.STRING
  })
  declare sam_serial_hex_ultima_recarga: string;

  @Column({
    type: DataType.STRING
  })
  declare sam_serial_hex: string;

  @Column({
    type: DataType.BIGINT
  })
  declare contador_recargas: number;

  @Column({
    type: DataType.TEXT
  })
  declare event_log: string;

  @Column({
    type: DataType.TEXT
  })
  declare load_log: string;

  @Column({
    type: DataType.TEXT
  })
  declare purchase_log: string;

  @Column({
    type: DataType.STRING
  })
  declare mac: string;

  @Column({
    type: DataType.STRING
  })
  declare sam_counter: string;

  @Column({
    type: DataType.STRING
  })
  declare environment: string;

  @Column({
    type: DataType.STRING
  })
  declare environmet_issuer_id: string;

  @Column({
    type: DataType.STRING
  })
  declare contract: string;

  @Column({
    type: DataType.STRING
  })
  declare contract_tariff: string;

  @Column({
    type: DataType.STRING
  })
  declare contract_sale_sam: string;

  @Column({
    type: DataType.BIGINT
  })
  declare contract_restrict_time: number;

  @Column({
    type: DataType.DATE
  })
  declare contract_validity_start_date: Date;

  @Column({
    type: DataType.STRING
  })
  declare contract_validity_duration: string
}

export default Recargas2024



