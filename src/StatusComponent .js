// Import the useOnline hook from the 'check-online-offline' library
import useOnline from 'check-online-offline';
// Import the CSS file for the component
import './App.css';

// Define the StatusComponent functional component
const StatusComponent = (props) => {
    // Destructure props to extract values for customization
    const {
        headingText,
        descriptionText,
        buttonText,
        buttonLink,
        headingCss,
        descriptionCss,
        buttonCss,
        modalCss,
        modalCssName
    } = props;

    // Use the useOnline hook to determine online/offline status
    const isOnline = useOnline();

    // Return JSX for the component
    return (
        <div style={{ display: isOnline ? 'none' : 'block' }}>
            {/* Container for the dark background */}
            <div className="darkBackgroundDiv">
                {/* Modal container with custom styles */}
                <div className={modalCssName} style={modalCss}>
                    {/* Heading section */}
                    <div className="heading" style={headingCss}>
                        {headingText}
                    </div>
                    {/* Description section */}
                    <p className='description' style={descriptionCss}>
                        {descriptionText}
                    </p>
                    {/* Button section */}
                    <a href={buttonLink} className="modalBtn">
                        <button className="reloadButton mt-3" style={buttonCss}>{buttonText}</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

// Default props for the component
StatusComponent.defaultProps = {
    modalCssName: "modalDiv",
    headingText: "Oops, Looks Like You're Offline!🌐",
    descriptionText: "Well, well, well... someone pulled the plug, didn't they? 🙃 No worries, even our pixels need a coffee break sometimes! ☕",
    buttonLink: "/",
    buttonText: "Refresh"
}

// Export the StatusComponent for use in other files
export default StatusComponent;

