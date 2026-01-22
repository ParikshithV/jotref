import {Box, Text, useInput} from 'ink';
import React, {useEffect, useState} from 'react';
import {deleteRowByIndex, getAllData} from '../utils/dataStore.js';
import {ListViewSceneProps} from './ListView.js';

const AlterListView = (props: ListViewSceneProps) => {
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
				deleteRowByIndex(indexSelect).then(() => {
					setIndexSelect(null);
					setTimeout(() => {
						getSetDataFromDb();
					}, 500);
				});
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
			<Text>
				Return to delete "{indexSelect}. {clistData[indexSelect - 1]}"
			</Text>
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
					<Text>Add notes to view in list</Text>
				)}
			</Box>
			<Text color={'gray'}>Enter index to delete or backspace for menu </Text>
		</Box>
	);
};

export default AlterListView;
