import { apiRequest } from './request'
import { ICoffeeItem } from '../types/coffee'

export const getCoffeeList = async (): Promise<ICoffeeItem[]> => {
  const resp = await apiRequest().get('')
  return resp.data
}
