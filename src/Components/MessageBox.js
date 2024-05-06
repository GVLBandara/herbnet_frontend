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
			productId: 1,
			messageContent: '',
		});
	}, [chat]);

	const getChatList = async (e) => {
		try {
			const response = await API.getChatList(auth.getUser());
			setChatList(
				response.data.sort(
					(a, b) => new Date(a.timeStamp) - new Date(b.timeStamp)
				)
			);
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const getMessageList = async (e) => {
		try {
			const response = await API.getMessageList(auth.getUser(), chat);
			setMessageList(
				response.data
					.sort((a, b) => new Date(a.timeStamp) - new Date(b.timeStamp))
					.reverse()
			);
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const sendMessage = async (e) => {
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
			productId: 1,
			messageContent: event.target.value,
		});
		console.log(newMessage);
	};

	const Chat = ({ data }) => {
		return (
			<h1
				className={`cursor-pointer`}
				onClick={() => {
					data.setChat(data.withUserId);
				}}
			>
				{data.withUserName}
			</h1>
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
							<h1>Empty</h1>
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
