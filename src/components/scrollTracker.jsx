import useScrollTracker from '../hooks/useScrollTracker';

const ScrollTracker = () =>{

    const scrollPosition = useScrollTracker();

    return (
        <div style={{
            position: 'fixed',
            top: 20,
            right: 20,
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '10px 15px',
            borderRadius: '5px',
            fontFamily: 'Arial, sans-serif',
            zIndex: 1000
        }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Scroll Position</h3>
            <p style={{ margin: '5px 0' }}>X: {scrollPosition.x}px</p>
            <p style={{ margin: '5px 0' }}>Y: {scrollPosition.y}px</p>
        </div>
    );
};

export default ScrollTracker;