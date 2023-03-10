import { GiStarFormation } from "react-icons/gi";
const RightAside = () => {
	return (
		<div className="rightAsideWrapper">
			<h1 className="asideTitle" >Shortcuts</h1>
			<div className="instrumentContainer">
                <div className="bodyFlex">
				<button className="instrumentProps">
					<GiStarFormation className="first" />
					<h3 className="instrumentText">  Chill Hits</h3>
				</button>

				<button className="instrumentProps">
					{/* <CiStar  className="second"/> */}
					<h3 className="instrumentText"> ⭐ Hop </h3>
				</button>
                </div>
                
                <div className="bodyFlex">
				<button className="instrumentProps"> 
					{/* <GiGuitar className="third" /> */}
					<h3 className="instrumentText"> 🎸 Accoustics </h3>
				</button>

				<button className="instrumentProps">
					{/* <IoMusicalNotes className="four" /> */}
					<h3 className="instrumentText" > 🎵 Indie Pop</h3>
				</button>
                </div>

                <div className="bodyFlex">
				<button className="instrumentProps">
					{/* <CgPiano /> */}
					<h3 className="instrumentText"> 🎹 Piano Blues</h3>
				</button>

				<button className="instrumentProps">
					{/* <GiTrumpet /> */}
					<h3 className="instrumentText"> 🎺Jazz</h3>
					{/* <div />{" "} */}
				</button>
                </div>
			</div>

			<div>
				<h1 className="asideTitle">Fav Artist</h1>

				<div className="artist-container">
					<div className="artistWrapper">
							<img className="sidebarImg" src="tylor.PNG" alt="tylor" />
                            <div className="artist-details">
							<div className="artist-detail">
								<h3 className="artists-name">Taylor Swift</h3>
								<h5 className="numOf">196 songs in library</h5>
							</div>
                            <h4 className="dot">..</h4>
                            </div>

                    </div>
						

                    <div className="artistWrapper">
                        <img className="sidebarImg" src="kenye.PNG" alt="kenye" />
                        <div className="artist-details">
                        <div className="artist-detail">
                            <h3 className="artists-name">Kenye West</h3>
                            <h5 className="numOf">196 songs in library</h5>
                        </div>
                        <h4 className="dot">..</h4>
                        </div>

                    </div>

                    <div className="artistWrapper">
                        <img className="sidebarImg" src="drake.PNG" alt="drake" />
                        <div className="artist-details">
                        <div className="artist-detail">
                            <h3 className="artists-name">Drake</h3>
                            <h5 className="numOf">196 songs in library</h5>
                        </div>
                        <h4 className="dot">..</h4>
                        </div>
                    </div>
					
                    <div className="artistWrapper">
                        <img className="sidebarImg" src="billie.PNG" alt="Billie" />
                        <div className="artist-details" >
                            <div className="artist-detail">
                                <h3 className="artists-name">Billie Eilish</h3>
                                <h5 className="numOf">196 songs in library</h5>
                            </div>
                            <h4 className="dot">..</h4>
                        </div>
                    </div>    
                </div>
		    </div>

            <div>
                <img  className="babyGirl" src="babyGirl.PNG" alt="babyGirl"/>
            </div>
        </div>
			
	)
}

export default RightAside;
