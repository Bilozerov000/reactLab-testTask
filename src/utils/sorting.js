export const ASCENDING = 'ASCENDING'
export const DESCENDING = 'DESCENDING'

export const ascSortUsersByParam = (users, param) =>
  [...users].sort((a, b) => {
    if (param !== 'state') {
      if (a[param] > b[param]) {
        return 1
      }
      if (a[param] < b[param]) {
        return -1
      }
      return 0
    } else {
      if (a.adress[param] > b.adress[param]) {
        return 1
      }
      if (a.adress[param] < b.adress[param]) {
        return -1
      }
      return 0
    }
  })

export const desSortUsersByParam = (users, param) =>
  [...users].sort((a, b) => {
    if (param !== 'state') {
      if (a[param] > b[param]) {
        return -1
      }
      if (a[param] < b[param]) {
        return 1
      }
      return 0
    } else {
      if (a.adress[param] > b.adress[param]) {
        return -1
      }
      if (a.adress[param] < b.adress[param]) {
        return 1
      }
      return 0
    }
  })
