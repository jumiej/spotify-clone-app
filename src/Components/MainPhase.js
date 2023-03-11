import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { BsHeart } from "react-icons/bs";
import { TbPlaylist } from "react-icons/tb";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { CgPlayBackwards } from "react-icons/cg";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { CgPlayForwards } from "react-icons/cg";
import { TbArrowsShuffle } from "react-icons/tb";
import { IoVolumeLowOutline } from "react-icons/io5";
import { RxSlider } from "react-icons/rx";
import { IoVolumeMedium } from "react-icons/io5";
import "./MainPhase.css";

const MainPhase = () => { 
	return (
		<div className="mainWrap">
			<div className="searchWrap">
				<div className="arrowWrap">
					<AiOutlineArrowLeft />
					<AiOutlineArrowRight />
				</div>
				<div className="customSearcBar">
					<CiSearch />
					<input type="text" placeholder="Search for artist songs and..." />
				</div>
			</div>

			<div>
				<div className="musicTag">
					<p> What's hot 🔥 </p>
				</div>
				<div className="trendingWrap">
					<h2> Trending </h2>
					<div className="musicTag">
						<p className="moreText">More</p>
						<IoIosArrowForward />
					</div>
				</div>
			</div>

			<div className="bannerImgWrap">
                <div className="bannerLeft">
                    <p>Artist</p>
                    <h1>On Top <br/> Of The World </h1>
                    <div>
                        <button>Play</button>
                        <button>Follow</button>
                    </div>
                </div>
                <div className="bannerRight">
                    <p>Montly Listener</p>
                    <p>32.092</p>
                </div>
			</div>

			<div className="trendingWrap">
				<h2>My Playlist</h2>
				<p className="moreText">Show All</p>
			</div>

			<div className="playlistsWrap">
				<ul className="ulTag">
					<li className="liTag">
						<p>01</p>
						<p>Priority</p>
						<p>Mos Def</p>
						<p>12:00</p>
						<p>The Estatic</p>
					</li>
				</ul>
			</div>

			<div className="playerlistWrap">
				<div className="playlistActionWrap">
					<div className="playIconsWrap">
						<BsHeart className="backgroundBlue" />
						<TbPlaylist className="backgroundBlue" />
						<BsArrowsAngleExpand className="backgroundBlue" />
					</div>

					<div className="playIconsWrap">
						<HiOutlineArrowPathRoundedSquare />
						<CgPlayBackwards />
						<BsFillPlayCircleFill />
						<CgPlayForwards />
						<TbArrowsShuffle />
					</div>

					<div className="playIconsWrap">
						<IoVolumeLowOutline />
						<RxSlider />
						<IoVolumeMedium />
					</div>
				</div>

				<div className="playingTimeWrap">
					<h6> 0.43 </h6>
					<RxSlider className="playerTimer" />
					<h6> 2.59 </h6>
				</div>
			</div>
		</div>
	);
};
export default MainPhase;
