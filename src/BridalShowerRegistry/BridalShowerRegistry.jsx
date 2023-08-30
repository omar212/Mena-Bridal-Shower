import './BridalShowerRegistry.scss';

const BridalShowerRegistry = () => {
    return (
        <div className="full-container bridal-shower-registry">
            <div className="bridal-shower-registry-container">
                <div className="registry-component-title">
                    <img width="100" height="100" src="https://img.icons8.com/ios/100/wedding-gift--v1.png" alt="wedding-gift--v1"/>
                    <h1>Registry</h1>
                </div>
                <div className="registry-component">
                    <div className="registry-container">
                        <div className="button-container">
                            <a className="registry-button" target='_blank' rel='noreferrer' href="https://chase.com">
                                <div className='registry-text'>
                                    Cash
                                </div>
                            </a>

                            <a className="registry-button" target='_blank' rel='noreferrer' href="https://amazon.com">
                                <div className='registry-text'>
                                    Amazon
                                </div>
                            </a>

                            <a className="registry-button" target='_blank' rel='noreferrer' href="https://target.com">
                                <div className='registry-text'>
                                    Target
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Create a text saying "Please RSVP by May 13th, 2023. Thank you!" */}
                <div className="registry-component-title">
                        <h1>Please RSVP by October 1st, 2023.</h1>
                        <h1>Thank you!</h1>
                    </div>
            </div>
        </div>
    );
}

export default BridalShowerRegistry;