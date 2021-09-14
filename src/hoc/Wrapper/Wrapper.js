import './Wrapper.css'

const Wrapper = props => (
    <div className='Wrapper'>
        <main>{ props.children }</main>
    </div>
  )

export default Wrapper