import SortIcon from "../../../../ui/SortIcon/SortIcon"

const HeadRow = ({ clickHandler, children, sortConfig }) => {
  const headerName = children
  return (
    <th onClick={() => clickHandler(headerName)} scope='col'>
      {children}
      {sortConfig.parameter === children ? <SortIcon direction={sortConfig.direction} /> : null}
    </th>
  )
}

export default HeadRow
