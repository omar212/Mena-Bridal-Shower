import { useState, useEffect } from 'react';
import Invitation from '../assets/invitation3.png'
import './BridalShowerInvitation.scss'; // Import the corresponding CSS file for styling

const BridalShowerInvitation = () => {
  const [showInvitation, setShowInvitation] = useState(false);

  useEffect(() => {
    // Trigger the animation after a short delay (e.g., 1 second)
    const animationTimeout = setTimeout(() => {
      setShowInvitation(true);
    }, 1000);

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div className={`invitation-container ${showInvitation ? 'show' : ''}`}>
      <img
        src={Invitation}
        alt="Bridal Shower Invitation"
        className="invitation-image"
      />
    </div>
  );
};

export default BridalShowerInvitation;
