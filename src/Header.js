import React from "react";
import { useState } from "react";
import './Header.css';
import { FaBars, FaTimes } from "react-icons/fa";

const Header = (props) => {
	const [isBarVisible, setIsBarVisible] = useState(true);
	const [isClicked, setIsClicked] = useState(false);

	const handleIconClick = () => {
		setIsBarVisible(!isBarVisible);
		setIsClicked(!isClicked);
	};

	return (
		<>
			<nav>
				<img src={props.logo} className="logo" alt="me"/>
				<div className="nav-icons">
					<ul id="navbar" className={isClicked ? "#navbar active" : "#navbar"}>
						{
							props.icons.map((item, index) => {
								return <li key={index}>
									<a href={`#${item.link}`}>{item.name}</a>
								</li>
							})
						}
					</ul>
					<div id="icons"> 
						{isBarVisible ? <FaBars onClick={handleIconClick} /> : <FaTimes onClick={handleIconClick} />}
					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;