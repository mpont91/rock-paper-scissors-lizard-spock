import { boot } from 'quasar/wrappers'
import { QCard } from 'quasar'

export default boot(() => {
  QCard.props.square = {
    type: QCard.props.square,
    default: true,
  }
})
