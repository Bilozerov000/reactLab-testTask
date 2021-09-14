import BodyRow from './BodyRow/BodyRow'

const TableBody = ({ users, selectHandler, searchedName }) => {
  return (
    <tbody>
      {users
        .map(user => (
          <BodyRow
            key={JSON.stringify(user)}
            user={user}
            selectHandler={selectHandler}
          />
        ))}
    </tbody>
  )
}

export default TableBody
