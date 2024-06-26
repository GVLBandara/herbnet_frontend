import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { API } from '../API/API';
import { IoClose } from 'react-icons/io5';
import { IoIosSend } from 'react-icons/io';
import { FaCheckDouble } from 'react-icons/fa';

const MessageBox = ({ close }) => {
	const auth = useAuth();
	const [chat, setChat] = useState(0);
	const [newMessage, setNewMessage] = useState('');
	const [chatList, setChatList] = useState([]);
	const [messageList, setMessageList] = useState([]);
	useEffect(() => {
		getChatList();
	}, []);

	useEffect(() => {
		if (chat !== 0) getMessageList();
		setNewMessage({
			receiverId: chat,
			messageContent: '',
		});
		getChatList();
	}, [chat]);

	// const chatRefresh = setInterval(() => {
	// 	getChatList();
	// 	if (chat != 0) getMessageList();
	// }, 2000);

	const getChatList = async () => {
		try {
			const response = await API.getChatList(auth.getUser());
			setChatList(
				response.data.sort(
					(a, b) => new Date(b.timestamp) - new Date(a.timestamp)
				)
			);
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const getMessageList = async () => {
		try {
			const response = await API.getMessageList(auth.getUser(), chat);
			setMessageList(
				response.data
					.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
					.reverse()
			);
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const sendMessage = async () => {
		try {
			const response = await API.sendMessage(auth.getUser(), newMessage);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
		setNewMessage({ ...newMessage, messageContent: '' });
		getMessageList();
	};

	const handleChange = (event) => {
		setNewMessage({
			receiverId: chat,
			messageContent: event.target.value,
		});
		console.log(newMessage);
	};

	const Chat = ({ data }) => {
		return (
			<div
				className={`cursor-pointer ${
					data.withUserId != data.owner && data.isRead ? `` : `bg-blue-300`
				}`}
				onClick={() => {
					data.setChat(data.withUserId);
				}}
			>
				<h1 className={`font-bold`}>{data.withUserName}</h1>
				<h1 className={`text-[15px]`}>{data.message.substring(0, 20)}...</h1>
			</div>
		);
	};

	const ChatView = ({ messageList, chat }) => {
		return (
			<div
				className={`overflow-scroll overflow-x-hidden flex flex-col gap-1 justify-between`}
			>
				{messageList.map((message) => {
					return (
						<div
							className={
								message.senderId == chat
									? `bg-blue-400 w-fit`
									: `bg-green-400 self-end`
							}
							key={message.timestamp}
						>
							<div className={`w-fit`}>
								{message.productId ? (
									<div className={`flex gap-1 text-[13px]`}>
										<h1>About</h1>
										<h1
											className={`cursor-pointer text-blue-700`}
											onClick={() =>
												window.open(`/view/${message.productId}`, '_blank')
											}
										>
											this product
										</h1>
									</div>
								) : (
									<></>
								)}
								<h1>{message.message}</h1>

								<h1 className={`text-[13px] flex gap-4 justify-between`}>
									{new Date(message.timestamp).toLocaleTimeString()}
									{message.senderId != chat ? (
										<FaCheckDouble
											className={
												message.isRead ? ` text-blue-600` : ` text-gray-500`
											}
										/>
									) : (
										<></>
									)}
								</h1>
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	return (
		<div
			className={`w-[100vw] h-[100vh] flex justify-center items-center absolute top-0 bg-[#00000080]`}
		>
			<div className={`w-[800px] h-[600px] bg-[#fff] rounded-[10px]`}>
				<div className="w-full h-[50px] bg-[#0f824b] rounded-t-[10px] flex items-center">
					<h1 className="w-[calc(100%-50px)] text-[25px] text-[#fff] flex items-center justify-center font-bold h-[50px]">
						Chat
					</h1>
					<IoClose className={`text-white text-5xl`} onClick={close} />
				</div>
				<div className={`flex h-[550px]`}>
					<div className={`w-1/4 m-2 bg-purple-200`}>
						{chatList.map((chat) => (
							<Chat key={chat.withUserId} data={{ ...chat, setChat }} />
						))}
					</div>
					<div
						className={`w-3/4 m-2 flex flex-col justify-between bg-lime-300`}
					>
						{chat !== 0 ? (
							<ChatView messageList={messageList} chat={chat} />
						) : (
							<div className={`flex h-full w-full items-center justify-center`}>
								<h1>Select a Chat</h1>
							</div>
						)}
						<div className={`w-full flex`}>
							<input
								className={`w-full text-3xl m-2`}
								type="text"
								value={newMessage.messageContent}
								onChange={handleChange}
								onKeyDown={(event) => {
									if (event.key === 'Enter') sendMessage();
								}}
							/>
							<IoIosSend
								className={`text-5xl cursor-pointer`}
								onClick={sendMessage}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MessageBox;
