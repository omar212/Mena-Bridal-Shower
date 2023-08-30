/* eslint-disable react/prop-types */
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import './components.scss'

const DateComponent = ({ dateTitle, time, date, startTime, endTime }) => {

  return (
    <div className='date-container'>
        <div className="component-title">Date</div>
        <div className="component-text custom-date">
          <p className='underline'>{dateTitle}</p>
          <br />
          <p className='underline'>{time}</p>
        </div>
        <AddToCalendarButton
          name="Mena's Bridal Shower"
          startDate={date}
          startTime={startTime}
          endTime={endTime}
          options={['Apple','Google','iCal']}
          className="component-text"
          />
    </div>
  );
};

export default DateComponent;