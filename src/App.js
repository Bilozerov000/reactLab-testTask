import { useState } from 'react'
import {
  ASCENDING,
  DESCENDING,
  ascSortUsersByParam,
  desSortUsersByParam,
} from './utils/sorting'

import useHttpRequest from './customHooks/httpRequest'

import InfoWindow from './components/InfoWindow/InfoWindow'
import Table from './components/Table/Table'
import SearchInput from './components/SearchInput/SearchInput'
import Loader from './ui/Loader/Loader'
import ErrorWindow from './ui/ErrorWindow/ErrorWindow'
import Wrapper from './hoc/Wrapper/Wrapper'

export default function App() {
  const [data, setData, loading, error] = useHttpRequest()

  const [searchedName, setSearchedName] = useState('')
  const [selectedUser, setSelectedUser] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const [sortConfig, setSortConfig] = useState({
    direction: null,
    parameter: null,
  })

  const selectUserHandler = user => {
    setSelectedUser(user)
    setShowModal(true)
  }
  const onSearchChangeHandler = ({ target }) => setSearchedName(target.value)
  const sortDirectionHandler = parameter => {
    if (sortConfig.direction === ASCENDING) {
      setSortConfig(prev => ({ ...prev, direction: DESCENDING, parameter }))
      const sortedData = desSortUsersByParam(data, parameter)
      setData(sortedData)
    } else {
      setSortConfig(prev => ({ ...prev, direction: ASCENDING, parameter }))
      const sortedData = ascSortUsersByParam(data, parameter)
      setData(sortedData)
    }
  }

  return (
    <Wrapper>
      {loading && <Loader />}
      {error && <ErrorWindow />}
      {data && (
        <div>
          <SearchInput
            searchedValue={searchedName}
            onSearchChange={onSearchChangeHandler}
          />
          <Table
            users={data}
            sortConfig={sortConfig}
            sortHandler={sortDirectionHandler}
            selectHandler={selectUserHandler}
            searchedName={searchedName}
          />
          {showModal && <InfoWindow userInfo={selectedUser} closeHandler={() => setShowModal(false)} />}
        </div>
      )}
    </Wrapper>
  )
}
