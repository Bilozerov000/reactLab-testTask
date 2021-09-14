import { getRowOfButtons } from '../../../utils/pagination'
import './TableNavigation.css'

const TableNavigation = ({ numberOfButtons, onButtonClick, currentPage }) => {
  const buttons = getRowOfButtons(numberOfButtons, onButtonClick, currentPage)

  return <div className='Table-navigation'>{buttons}</div>
}

export default TableNavigation
