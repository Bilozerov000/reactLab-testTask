import Button from '../ui/PaginationButton/PaginButton'

export function getNumberOfButtons(users, rowsCount = 20) {
  return users.length / rowsCount
}

export function getPaginatedData(pageIndex, data, sliceCount = 20) {
  return data.slice((pageIndex - 1) * sliceCount, pageIndex * sliceCount)
}

export function getRowOfButtons(count, clickHandler, currentPage) {
  const rowOfButtons = []
  
  for (let i = 1; i <= count; i++) {
    rowOfButtons.push(
      <Button
      key={`Button #${i}`}
      number={i}
      currentPage={currentPage}
      clickHandler={clickHandler}
      >
        {i}
      </Button>
    )  
  }

  return rowOfButtons
}