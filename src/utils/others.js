export const getKeyNamesOf = users => {
  return Object.keys(users[0])
}

export const filterBySearchedName = (users, searchedName) =>
  users.filter(user =>
    lowerCaseOf(`${user.firstName} ${user.secondName}`).includes(
      lowerCaseOf(searchedName)
    )
  )

const lowerCaseOf = value => value.toLowerCase()
