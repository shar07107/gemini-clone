import { useContext } from "react";

import "./Main.scss";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

function Main() {
	const {
		onSent,
		recentPrompt,
		showResult,
		loading,
		resultData,
		input,
		setInput,
	} = useContext(Context);

	const onFormSubmit = (e) => {
		e.preventDefault();
		onSent();
		// send state to server with e.g. `window.fetch`
	};
	return (
		<div className="main min-h-screen flex-1 pb-[15vh] relative w-full">
			<div className="nav flex justify-between items-center w-full text-2xl px-[20px] py-[15px] text-[#585858]">
				<p className="text-xl font-light">Gemini</p>
				<img src={assets.user_icon} alt="" className="w-[35px] rounded-full" />
			</div>
			<div className="main-container max-w-[900px] m-auto">
				{!showResult ? (
					<>
						<div className="greet my-[30px] text-6xl text-[#c4c7c5] font-medium p-[20px]">
							<p>
								<span className="">Hello Dev.</span>
							</p>
							<p>How can I help you today!</p>
						</div>
						<div className="cards grid grid-cols-[auto-fill_minmax(180px,_1fr)] p-5 gap-4">
							<div className="card h-52 p-4 bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
								<p className="text-gray-600 text-base">
									Suggest beautiful places to see on an upcoming road trip
								</p>
								<img
									src={assets.compass_icon}
									alt=""
									className="w-[35px] p-1.5 absolute bg-white rounded-2xl bottom-2.5 right-2.5"
								/>
							</div>
							<div className="card h-52 p-4 bg-[#f0f4f9] rounded-[10px] relative cursor-pointer">
								<p className="text-gray-600 text-base">
									Briefly summarize this concept: urban planning
								</p>
								<img
									src={assets.bulb_icon}
									alt=""
									className="w-[35px] p-1.5 absolute bg-white rounded-2xl bottom-2.5 right-2.5"
								/>
							</div>
							<div className="card h-52 p-4 bg-[#f0f4f9] rounded-[10px] relative cursor-pointer">
								<p className="text-gray-600 text-base">
									Brainstorm team bonding activities for our work retreat
								</p>
								<img
									src={assets.message_icon}
									alt=""
									className="w-[35px] p-1.5 absolute bg-white rounded-2xl bottom-2.5 right-2.5"
								/>
							</div>
							<div className="card h-52 p-4 bg-[#f0f4f9] rounded-[10px] relative cursor-pointer">
								<p className="text-gray-600 text-base">
									Tell me about React js and React native
								</p>
								<img
									src={assets.code_icon}
									alt=""
									className="w-[35px] p-1.5 absolute bg-white rounded-2xl bottom-2.5 right-2.5"
								/>
							</div>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<img src={assets.user_icon} alt="" />
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							<img src={assets.gemini_icon} alt="" />
							{loading ? (
								<>
									<div className="loader">
										<hr />
										<hr />
										<hr />
									</div>
								</>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>
					</div>
				)}

				<div className="main-bottom">
					<form onSubmit={onFormSubmit} className="search-box">
						<input
							onChange={(e) => {
								setInput(e.target.value);
							}}
							value={input}
							type="text"
							placeholder="Enter a propmt here"
						/>
						<div className="flex icons">
							<img src={assets.gallery_icon} alt="" />
							<img src={assets.mic_icon} alt="" />

							{input ? (
								<img
									type="submit"
									onClick={() => {
										onSent();
									}}
									src={assets.send_icon}
									alt=""
								/>
							) : null}
						</div>
					</form>
					<div className="bottom-info">
						Gemini may display inaccurate info, including about people, so
						double-check its responses. Your privacy and Gemini Apps
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
