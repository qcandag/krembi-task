import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CarPark extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public c1: number

  @column()
  public c2: number

  @column()
  public c3: number

  @column()
  public c4: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
