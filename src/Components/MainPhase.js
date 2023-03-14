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
import { useState, useEffect } from "react";
import { axiosInstanc } from "../App";
import "./MainPhase.css";


const data = [
	{ no:"#", 	HEADING: "TITTLE", name: "ARTIST", time:"TIME", songs:"ALBUM" },
	// { name: "Megha", age: 19, gender: "Female" }, Q1S`	
	// { name: "Subham", age: 25, gender: "Male"},
  ]

const MainPhase = () => {
	const [data, setData] = useState([]);

	// const url = 'me/playlists'
	// const url = 'browse/new-releases'
	const url = "playlists/37i9dQZF1EIUQpJ2F6wHN3/tracks";

	useEffect(() => {
		axiosInstanc
			.get(url)
			.then((res) => {
				console.log(res, "response");
				setData(res?.data?.items);
				console.log(data, "data");
			})
			.catch((err) => console.log(err));
	}, []);

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
					<h1>
						On Top <br /> Of The World{" "}
					</h1>
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
					{
						data?.map((item, index) => {
							return (
								<li key={index} className="liTag">
									<p className="give">{item?.name ?? "No name"}</p>
									<p className="give">{item?.owner?.display_name ?? "Nil"}</p>
									<p className="give">{item?.tracks?.total ?? "Nil"}</p>
								</li>
							);
						})
						// <li className="liTag">
						// 	<p>01</p>
						// 	<p>Priority</p>
						// 	<p>Mos Def</p>
						// 	<p>12:00</p>
						// 	<p>The Estatic</p>
						// </li>
					}
				</ul>
			</div>
			<div className="singleSongs">
					<table className="son" >
						<tr className="songs" >
							<th>#</th>
							<th>tittle</th>
							<th>artist</th>
							<th>time</th>
							<th>album</th>

						</tr>
						
						{data.map((val, key) => {
							return (
								<tr key={key}>
									<td>{val.name}</td>
									<td>{val.age}</td>
									<td>{val.gender}</td>
								</tr>
							);
						})}
					</table>
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
