import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Grid,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import emailjs from 'emailjs-com';
import './components.scss';

const AttendanceComponent = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [mainGuestName, setMainGuestName] = useState('');
  const [additionalGuestNames, setAdditionalGuestNames] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [privateMessage, setPrivateMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const phoneNumberRegex = /^\d{10}$/;

  const openDialog = () => {
    setMainGuestName('');
    setAdditionalGuestNames([]);
    setPhoneNumber('');
    setPrivateMessage('');
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleRemoveGuest = (index) => {
    const updatedGuests = [...additionalGuestNames];
    updatedGuests.splice(index, 1);
    setAdditionalGuestNames(updatedGuests);
  };

  const handleRSVPSubmit = () => {
    const serviceId = 'service_3o28gwi';
    const templateId = 'template_cd2v7ls';
    const userId = '6dq3cOnzFTDbaZOC7';

    const templateParams = {
      guestName: [mainGuestName, ...additionalGuestNames].join(', '),
      numPeople: 1 + additionalGuestNames.length,
      phoneNumber: phoneNumber,
      privateMessage: privateMessage,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setEmailSent(true);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.trim() !== '' && phoneNumber.match(phoneNumberRegex) && additionalGuestNames.every((guest) => guest.trim() !== '')) {
      handleRSVPSubmit();
      closeDialog();
    }
  };

  const isSubmitDisabled =
  mainGuestName === '' ||
  additionalGuestNames.some((name) => name.trim() === '') ||
  phoneNumber.trim() === '' ||
  !phoneNumber.match(phoneNumberRegex);

  const handleAddGuest = () => {
    setAdditionalGuestNames([...additionalGuestNames, '']);
  };

  return (
    <div className="attendance-component">
      <div className="button-container">
        <Button className="rsvp-button" onClick={openDialog}>
          RSVP
        </Button>
      </div>
      <Dialog className="modal rsvp-container" open={isDialogOpen} onClose={closeDialog}>
        <DialogTitle className="rsvp-container rsvp-title">RSVP</DialogTitle>
        <DialogContent>
          <Grid container justifyContent="center">
            <Grid>
              <div className="form">
                <TextField
                  label="Guest Name"
                  variant="outlined"
                  value={mainGuestName}
                  onChange={(e) => setMainGuestName(e.target.value)}
                  fullWidth
                  className="input"
                />
               <div className="guest-list">
                  {additionalGuestNames.map((guest, index) => (
                    <div key={index} className="guest-item">
                      <TextField
                        label={`Additional Guest #${index + 1}`}
                        variant="outlined"
                        value={guest}
                        onChange={(e) => {
                          const updatedGuests = [...additionalGuestNames];
                          updatedGuests[index] = e.target.value;
                          setAdditionalGuestNames(updatedGuests);
                        }}
                        fullWidth
                        className="input"
                      />
                      <IconButton
                        aria-label="remove"
                        color="secondary"
                        onClick={() => handleRemoveGuest(index)}
                      >
                        <DeleteIcon style={{ fill: 'red' }} />
                      </IconButton>
                    </div>
                  ))}
                </div>
                <Button 
                  className="add-button"  
                  variant="contained"
                  fullWidth 
                  onClick={handleAddGuest}
                >
                  Add Guest
                </Button>
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  fullWidth
                  className="input"
                />
                <TextField
                  label="Private Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={privateMessage}
                  onChange={(e) => setPrivateMessage(e.target.value)}
                  fullWidth
                  className="input"
                />
              </div>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitDisabled}
            variant="contained"
          >
            Submit RSVP
          </Button>
        </DialogActions>
      </Dialog>
      {emailSent && <p>RSVP submitted successfully!</p>}
    </div>
  );
};

export default AttendanceComponent;
