import {Box, Text, useInput} from 'ink';
import React, {useEffect, useState} from 'react';
import {getAllData} from '../utils/dataStore.js';
import clipboard from 'clipboardy';

export type ListViewSceneProps = {
	onReturn: () => void;
	onExit: () => void;
};

const ListView = (props: ListViewSceneProps) => {
	const [clistData, setClistData] = useState<string[]>([]);
	const [indexSelect, setIndexSelect] = useState<number | null>();

	useEffect(() => {
		getSetDataFromDb();
		setTimeout(() => {
			getSetDataFromDb();
		}, 500);
	}, []);

	useInput((input, key) => {
		if (key.backspace || key.delete) {
			indexSelect ? setIndexSelect(null) : props.onReturn();
		} else if (key.return) {
			if (!indexSelect) {
				props.onReturn();
			} else if (!!indexSelect) {
				clipboard.write(clistData[indexSelect - 1] || '');
				props.onExit();
			}
		} else {
			const inputAsInt = parseInt(input);
			if (inputAsInt <= clistData.length) {
				setIndexSelect(inputAsInt);
			}
		}
	});

	const getSetDataFromDb = async () => {
		getAllData().then(data => {
			setClistData(data.clist);
		});
	};

	if (!!indexSelect) {
		return (
			<Text>Return to copy "{clistData[indexSelect - 1]}" to clipboard</Text>
		);
	}

	return (
		<Box flexDirection="column">
			<Box borderStyle="single" flexDirection="column">
				{clistData.length ? (
					clistData?.map((item, index) => {
						return (
							<Text key={index + item}>
								{index + 1}. {item}
							</Text>
						);
					})
				) : (
					<Text color={'gray'}>
						Add notes to view in list. Press backspace / delete for menu
					</Text>
				)}
			</Box>
			<Text>Enter index to select or backspace for menu </Text>
		</Box>
	);
};

export default ListView;
