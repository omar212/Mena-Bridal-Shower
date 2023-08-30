/* eslint-disable react/prop-types */
import './components.scss'

const Address = ({ location, address, city, actual }) => {
  const handleAddressClick = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(actual)}`, '_blank');
  };

  return (
    <div className='address-container' onClick={handleAddressClick}>
        <div className="component-title">Address</div>
        <div className="component-text">
              <div className='underline'>{location}</div>
              <br />
              <div className='underline'>{address}</div>
              <br />
              <div className='underline'>{city}</div>
        </div>
    </div>
  );
};

export default Address;
