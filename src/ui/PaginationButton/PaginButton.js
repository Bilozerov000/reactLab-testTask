import './PaginButton.css'

const PaginButton = ({ clickHandler, children, number, currentPage }) => (
  <button
    className='Pagination-button'
    autoFocus={+number === +currentPage}
    onClick={() => clickHandler(+children)}
  >
    { children }
  </button>
)

export default PaginButton