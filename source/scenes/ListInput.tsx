import React, {useState} from 'react';
import {Box, Text, useInput} from 'ink';
import TextInput from 'ink-text-input';
import {addToClist} from '../utils/dataStore.js';

type ListInputSceneProps = {
	onInputEnd: () => void;
};

const ListInput = (props: ListInputSceneProps) => {
	const [textInputVal, setTextInputVal] = useState('');

	useInput((_, key) => {
		if (key.return) {
			if (textInputVal.trim().length) {
				addToClist(textInputVal);
			}
			props.onInputEnd();
		}
	});

	return (
		<Box flexDirection="column">
			<Text>New record:</Text>
			<TextInput value={textInputVal} onChange={setTextInputVal} />
		</Box>
	);
};

export default ListInput;
