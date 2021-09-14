import './SearchInput.css'

const SearchInput = ({ searchedValue, onSearchChange }) => (
  <div className='form-wrapper'>
    <div className='Search-form'>
      <input
        type='text'
        placeholder='Search by name:'
        value={searchedValue}
        onChange={onSearchChange}
      />
    </div>
  </div>
)

export default SearchInput
