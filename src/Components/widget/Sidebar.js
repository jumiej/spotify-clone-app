import { FaExternalLinkAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaThLarge } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaBandcamp } from "react-icons/fa";
import { BsCalendarRangeFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { GiPlainCircle } from "react-icons/gi";
import { RiPlayListLine } from "react-icons/ri";
import "./Widget.css";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="upperSec">
				<div className="sidebar-icons">
					<div className="sidebar-circle">
						<GiPlainCircle className="first-circle" />
						<GiPlainCircle className="second-circle" />
						<GiPlainCircle className="third-circle" />
					</div>
					<RiPlayListLine />
				</div>

				<div className="icon">
					<img src="icon.png" alt="icon" />
				</div>
			</div>

			<div className="">
				<div className="trend active">
					<FaHome className="homeIcon" />
					<h5 className="homeText">Home </h5>
				</div>

				<div className="trend">
					<FaExternalLinkAlt className="iconnn" />
					<h2 className="trends">Trends</h2>
				</div>

				<div className="trend">
					<FaBandcamp className="iconnn" />
					<h2 className="trends">Feed</h2>
				</div>

				<h2 className="GroupMenuText"> Discover </h2>
				<div className="trend">
					<FaThLarge className="iconnn" />
					<h2 className="trends">News and Notable</h2>
				</div>
				<div className="trend">
					<FaCalendar className="iconnn" />
					<h2 className="trends">Release Calender</h2>
				</div>

				<div className="trend">
					<BsCalendarRangeFill className="iconnn" />
					<h2 className="trends">Events</h2>
				</div>
				<h2 className="GroupMenuText"> Your Collection </h2>

				<div className="trend">
					<FaHeart className="iconnn" />
					<h2 className="trends">Favorite Songs</h2>
				</div>
				<div className="trend">
					<FaUsers className="iconnn" />
					<h2 className="trends">Artist</h2>
				</div>
			</div>

			<hr></hr>
			<div className="imgWrap">
				<img className="sidebarImg" src="assets/imgone.JPG" alt="to be reduced " />
				<p className="imgText">Ceptari Tyas</p>
			</div>
		</div>
	);
};
export default Sidebar;
