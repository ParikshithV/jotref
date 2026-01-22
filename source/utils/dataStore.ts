import {JSONFilePreset} from 'lowdb/node';
export type dbData = {clist: string[]};

const defaultData: dbData = {clist: []};
const db = await JSONFilePreset('db.json', defaultData);

export const addToClist = async (newStr: string) => {
	await db.update(({clist}) => clist.push(newStr));
};

export const getAllData = async (): Promise<dbData> => {
	await db.read();
	const data = db.data;
	return data;
};

export const deleteRowByIndex = async (idx: number): Promise<boolean> => {
	await db.read();
	const data = db.data.clist;
	if (idx <= data.length) {
		await db.update(({clist}) => clist.splice(idx - 1, 1));
		return true;
	}
	return false;
};
