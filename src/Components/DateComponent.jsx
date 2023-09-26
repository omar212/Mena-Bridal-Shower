/* eslint-disable react/prop-types */
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import './components.scss';


const DateComponent = ({ dateTitle, time, startTime, endTime }) => {

  const reminder = {
    method: 'popup', // Use 'popup' for a popup reminder
    weeks: 1, // Set the reminder to trigger 1 week before the event
  };

  return (
    <div className='date-container'>
      <div className="component-title">Date</div>
      <div className="component-text custom-date">
        <p className='underline'>{dateTitle}</p>
        <br />
        <p className='underline'>{time}</p>
      </div>
      <AddToCalendarButton
         name="[Reminder] Mena's Bridal Shower"
         startDate="2023-11-05"
         startTime={startTime}
         endTime={endTime}
         timeZone="America/New_York"
         location="The Gran Centurions 440 Madison Hill Rd, Clark, NJ 07066"
         description="Mena's Bridal Shower"
         options="'Apple','Google','iCal'"
         label="Add to Calendar"
         iCalFileName="Reminder-Event"
         lightMode="bodyScheme"
         styleLight="--btn-background: #3F271D; --btn-text: #E8DACC; --font: 'Wedding regular'"
         alarm={reminder}
         rsvp={true}
      />
    </div>
  );
};

export default DateComponent;

