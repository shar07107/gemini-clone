import React, { useContext, useState } from "react";
import "./Sidebar.scss";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

function Sidebar() {
	const [extended, setExtended] = useState(false);

	const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

	const loadPrompt = async (prompt) => {
		setRecentPrompt(prompt);
		await onSent(prompt);
	};
	return (
		<div
			className={`sidebar bg-[#f0f4f9] min-h-screen transition-all duration-300 ease-in-out ${
				extended ? "w-[250px]" : "w-[68px]"
			}`}>
			<div className="top">
				<div
					onClick={() => {
						setExtended((prev) => !prev);
					}}>
					<img src={assets.menu_icon} alt="menu" className="menu w-[20px]" />
				</div>
				<div
					onClick={() => {
						newChat();
					}}
					className={`new-chat mt-14 inline-flex items-center gap-2 min-w-[40px] min-h-[40px] bg-[#e6eaf1] rounded-full text-sm text-gray-600 cursor-pointer ${
						extended ? "py-2 px-4" : "justify-center"
					}`}>
					<img src={assets.plus_icon} alt="add" className="w-[18px] " />

					{extended ? <p>New Chat</p> : null}
				</div>
				{extended ? (
					<div className="recent flex flex-col">
						<p className="recent-title mt-8 mb-5">Recent</p>

						{prevPrompts.map((item, index) => {
							return (
								<div
									onClick={() => {
										loadPrompt(item);
									}}
									className="recent-entry flex items-center gap-2 p-3 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]"
									key={index}>
									<img src={assets.message_icon} alt="" />
									<p>{item.slice(0, 18)}..</p>
								</div>
							);
						})}
					</div>
				) : null}
			</div>
			<div className="bottom">
				<div className="bottom-item recent-entry flex items-center gap-2 p-3 pr-[10px] rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
					<img src={assets.question_icon} alt="" />

					{extended ? <p>Help</p> : null}
				</div>
				<div className="bottom-item recent-entry flex items-center gap-2 p-3 pr-[10px] rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
					<img src={assets.history_icon} alt="" />

					{extended ? <p>Activity</p> : null}
				</div>
				<div className="bottom-item recent-entry flex items-center gap-2 p-3 pr-[10px] rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
					<img src={assets.setting_icon} alt="" />

					{extended ? <p>Settings</p> : null}
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
