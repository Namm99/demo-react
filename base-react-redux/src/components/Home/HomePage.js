import videoHomePage from '../../assets/video-homepage.mp4'




const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source
                    src={videoHomePage}
                    type='video/mp4'
                />
            </video>
            <div className='homepage-content'>
                <div className='title-first'>There's a better way to ask</div>
                <div className='title-second'>You don't want to makez a boring form.
                    And your audience won't answer one.
                    Create a typeform instead—and make everyone happy.</div>
                <div className='title-third'>
                    <button >Get's started. It's free</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;