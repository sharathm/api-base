export async function replyToHealthPing(name) {
	return Promise.resolve({ result: 'Hi ' + name });
}
