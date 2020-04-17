import { PotteryForm } from './Pottery/PotteryForm.js'
import { PotteryList } from './Pottery/PotteryList.js'
import { getPottery } from './Pottery/potteryProvider.js'

getPottery() //
  .then(PotteryList)
  .then(PotteryForm)
