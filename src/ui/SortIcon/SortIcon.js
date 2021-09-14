import { ASCENDING } from '../../utils/sorting'

const SortIcon = ({ direction }) => (
  <span style={{ fontSize: '16px' }} class='material-icons'>
    {direction === ASCENDING ? 'arrow_upward' : 'arrow_downward'}
  </span>
)

export default SortIcon
