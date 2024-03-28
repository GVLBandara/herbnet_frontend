import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { API } from '../API/API';
import { IoClose } from 'react-icons/io5';

const MessageBox = ({ close }) => {
	const auth = useAuth();
	const [chat, setChat] = useState(0);
	const [chatList, setChatList] = useState([
		{
			withUserId: 6,
			withUserName: 'Grace Brown',
			message: 'Last inquiry about Plant1.',
			timestamp: '2023-11-16T15:00:00',
			isRead: true,
		},
		{
			withUserId: 4,
			withUserName: 'Eva Williams',
			message: 'Another message about Plant1.',
			timestamp: '2023-11-16T13:20:00',
			isRead: true,
		},
		{
			withUserId: 2,
			withUserName: 'Alice Smith',
			message: 'messageContent',
			timestamp: '2024-01-08T00:25:53',
			isRead: false,
		},
	]);
	const [messageList, setMessageList] = useState([
		{
			senderId: 2,
			message: 'messageContent',
			isRead: false,
			timestamp: '2024-01-08T00:25:53',
		},
		{
			senderId: 2,
			message: 'Hi! Sure, what information would you like about Plant2?',
			isRead: false,
			timestamp: '2023-11-16T15:45:00',
		},
		{
			senderId: 1,
			message: "Hello! I'm interested in your Plant1.",
			isRead: true,
			timestamp: '2023-11-16T15:30:00',
		},
	]);
	// useEffect(() => {
	// 	getChatList();
	// }, []);

	// useEffect(() => {
	// 	if (chat !== 0) getMessageList();
	// }, [chat]);

	const getChatList = async (e) => {
		try {
			const response = await API.getChatList(auth.getUser());
			setChatList(response.data);
			console.log(chatList);
		} catch (error) {
			console.log(error);
		}
	};

	const getMessageList = async (e) => {
		try {
			const response = await API.getMessageList(auth.getUser(), chat);
			setMessageList(response.data);
			console.log(messageList);
		} catch (error) {
			console.log(error);
		}
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
			<h1>
				{messageList.map((message) => {
					return (
						<h1
							className={
								message.senderId == chat ? `bg-blue-400` : `bg-green-400`
							}
							key={message.timestamp}
						>
							{message.message}
						</h1>
					);
				})}
			</h1>
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
				<div className={`flex justify-around`}>
					<div>
						{chatList.map((chat) => (
							<Chat
								key={chat.withUserId}
								data={{ ...chat, setChat }}
								onClick={() => {
									console.log('test');
								}}
							/>
						))}
					</div>
					<div>
						{chat !== 0 ? (
							<ChatView messageList={messageList} chat={chat} />
						) : (
							<h1>Empty</h1>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MessageBox;
