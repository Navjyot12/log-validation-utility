import constants, { RSFapiSequence } from '../../constants/index'
import _ from 'lodash'
import { isObjectEmpty } from '../index'
import { validateSchema } from '../index'
import { logger } from '../../shared/logger'
import { CompareTimeStamps } from './rsfHelpers'

const checksSettleData = (data: any) => {
    const rsfObj: any = {}
  
    // Check if the data object is empty or undefined
    if (!data || isObjectEmpty(data)) {
      return { [RSFapiSequence.ON_SETTLE]: 'JSON cannot be empty' }
    }
}
