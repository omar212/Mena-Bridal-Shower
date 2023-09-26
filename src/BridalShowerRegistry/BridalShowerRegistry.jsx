import './BridalShowerRegistry.scss';

const BridalShowerRegistry = () => {
    return (
        <div className="full-container bridal-shower-registry">
            <div className="bridal-shower-registry-container">
                <div className="registry-component-title">
                    <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/3f271d/wedding-gift.png" alt="wedding-gift"/>
                    <h1>Registry</h1>
                </div>
                <div className="registry-component">
                    <div className="registry-container">
                        <div className="button-container">
                            <a className="registry-button" target='_blank' rel='noreferrer' href="https://registry.theknot.com/mena-elkafafi-omar-elnagdy-january-2024-ny/62637609">
                                <div className='registry-text'>
                                    The Knot
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="registry-component-title">
                        <h1>Please RSVP by October 30th, 2023.</h1>
                        <h1>Thank you!</h1>
                    </div>
            </div>
        </div>
    );
}

export default BridalShowerRegistry;