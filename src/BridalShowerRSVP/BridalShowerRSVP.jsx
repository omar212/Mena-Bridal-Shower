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
          <DateComponent 
            title="Date" 
            dateTitle="Sunday, November 5th 2023" 
            time="5:00PM" 
            dateText="Sunday, November 5th, 2023" 
            date="2023-11-5" 
            startTime="17:00" 
            endTime="21:00" 
          />
        </div>
        <div className="component">
          <Address title="Address" location='The Gran Centurions' address="440 Madison Hill Rd, Clark, NJ 07066" city='Clark, NJ 07066' actual='440 Madison Hill Rd, Clark, NJ 07066'/>
        </div>
      </div>
    </div>
  );
};

export default BridalShowerRSVP;
