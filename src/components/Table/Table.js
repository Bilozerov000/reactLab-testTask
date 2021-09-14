import { useState, useEffect } from 'react'
import { getKeyNamesOf, filterBySearchedName } from '../../utils/others'
import { getNumberOfButtons, getPaginatedData } from '../../utils/pagination'
import TableHead from './TableHead/TableHead'
import TableBody from './TableBody/TableBody'
import TableNavigation from './TableNavigation/TableNavigation'
import './Table.css'

const Table = ({ users, sortConfig, sortHandler, selectHandler, searchedName }) => {
  const filteredUsers = filterBySearchedName(users, searchedName)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => window.scrollTo(0, 0))

  const onButtonClickHandler = pageNumber => setCurrentPage(pageNumber)

  const headerNames = getKeyNamesOf(users)
  const paginatedUsers = getPaginatedData(currentPage, filteredUsers)
  const countOfNavButtons = getNumberOfButtons(filteredUsers)

  return (
    <div>
      <table className='Table'>
        <TableHead sortConfig={sortConfig} headers={headerNames} sortHandler={sortHandler} />
        <TableBody
          users={paginatedUsers}
          selectHandler={selectHandler}
          searchedName={searchedName}
        />
      </table>
      <TableNavigation
        numberOfButtons={countOfNavButtons}
        currentPage={currentPage}
        onButtonClick={onButtonClickHandler}
      />
    </div>
  )
}

export default Table
