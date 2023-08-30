import HostedBy from '../Components/HostedBy';
import DateComponent from '../Components/DateComponent';
import Address from '../Components/Address';
import Title from '../Components/Title';
import Attendance from '../Components/Attendance';
import './BridalShowerRSVP.scss'; // Import your global styles here

const BridalShowerRSVP = () => {
  return (
    <div className="full-container bridal-shower-rsvp-container">
      <div className="component-container vertical">
          <Title title="Mena's Bridal Shower" />
          <Attendance />
        </div>
      <div className="component-container">
        <div className="component">
          <HostedBy title="Hosted By" name="Elkafafi Family" />
        </div>
        <div className="component">
          <DateComponent title="Date" dateTitle="Saturday, October 14th 2023" time="2:00PM" dateText="Saturday, October 14th, 2023" date="2023-10-14" startTime="13:00" endTime="23:00" />
        </div>
        <div className="component">
          <Address title="Address" location='Mena`s House' address="1420 Drumgoole Road East" city='Staten Island, NY 10312' actual='1420 Drumgoole Road East, Staten Island, NY, 10312'/>
        </div>
      </div>
    </div>
  );
};

export default BridalShowerRSVP;
