import React, {useEffect, useState} from 'react';
import ListInput from './scenes/ListInput.js';
import {Text, useApp, useInput} from 'ink';
import ListView from './scenes/ListView.js';
import AlterListView from './scenes/AlterListView.js';

type Props = {
	add: string | undefined;
};

type Scene = 'list' | 'input' | 'edit' | 'clearScene' | undefined;

export default function App({add = ''}: Props) {
	const [scene, setScene] = useState<Scene>();

	const {exit} = useApp();

	useEffect(() => {
		setScene('list');
	}, [add]);

	useInput((input, key) => {
		if (key.escape) {
			cleanAndExit();
		}

		if (!!scene) return;

		switch (input) {
			case '1':
				setScene('input');
				break;
			case '2':
				setScene('list');
				break;
			case '3':
				setScene('edit');
				break;
		}
	});

	const cleanAndExit = () => {
		setScene('clearScene');
		setTimeout(() => {
			exit();
		}, 500);
	};

	const DefaultView = () => {
		return (
			<Text>{` 1. Add new \n 2. List all \n 3. Edit saved \nPress 'esc' to close`}</Text>
		);
	};

	switch (scene) {
		case 'list':
			return (
				<ListView onReturn={() => setScene(undefined)} onExit={cleanAndExit} />
			);
		case 'input':
			return <ListInput onInputEnd={() => setScene('list')} />;
		case 'edit':
			return (
				<AlterListView
					onReturn={() => setScene('list')}
					onExit={cleanAndExit}
				/>
			);
		case 'clearScene':
			return <Text />;
		default:
			return <DefaultView />;
	}
}
