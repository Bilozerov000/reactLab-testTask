import CloseIcon from '../../ui/CloseIcon/CloseIcon'
import './InfoWindow.css'

const InfoWindow = ({ userInfo, closeHandler }) => {
  const { firstName, lastName, description } = userInfo
  const { city, state, streetAddress, zip } = userInfo.adress
  return (
    <div className='modal-overlay'>
      <div className='modal-window'>
        <div className='modal-close'>
          <CloseIcon closeHandler={closeHandler} class='material-icons' />
        </div>
        <div className='modal-header'>
          <h2>Profile info:</h2>
        </div>
        <div className='modal-body'>
          <div>Selected Profile: {`${firstName} ${lastName}`}</div>
          <div>Description: {description}</div>
          <div>Address: {streetAddress}</div>
          <div>City: {city}</div>
          <div>State: {state}</div>
          <div>Index: {zip}</div>
        </div>
      </div>
    </div>
  )
}

export default InfoWindow
