

const Registry = () => {
    return (
        <div className="registry">

            <div className="registry-container">

                <div className="registry-button">
                    <a className="registry-text" onClick={() => { console.log('clicked')} }>
                        Target
                    </a>
                </div>

                <div className="registry-button">
                    <a className="registry-text" onClick={() => { console.log('clicked')} }>
                        Target
                    </a>
                </div>

                <div className="registry-button">
                    <a className="registry-text" onClick={() => { console.log('clicked')} }>
                        Target
                    </a>
                </div>

            </div>

        </div>
    );
}

export default Registry;