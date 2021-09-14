import HeadColumn from './HeadRow/HeadRow'

const TableHead = ({ sortConfig, headers, sortHandler }) => (
  <thead>
    <tr>
      {headers
        .filter(headerTitle => headerTitle !== 'description')
        .map(headerTitle => {
          return (
            <HeadColumn key={headerTitle} sortConfig={sortConfig} clickHandler={sortHandler}>
                {headerTitle === 'adress' ? 'state' : headerTitle}                  
            </HeadColumn>
          )
        })}
    </tr>
  </thead>
)

export default TableHead
