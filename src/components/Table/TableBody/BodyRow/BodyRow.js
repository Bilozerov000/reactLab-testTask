const BodyRow = ({user, selectHandler}) => {
  const { id, firstName, lastName, email, phone, adress } = user
  return (
    <tr onClick={() => selectHandler(user)}>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{adress.state}</td>
    </tr>
  )
}

export default BodyRow