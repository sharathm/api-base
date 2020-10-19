export function generateNotFoundErrorResponse(msg) {
	return { status: 400, message: msg };
}
export function generateInternalServerErrorRepsonse(e) {
	// TODO: log error and upload if required for further analysis. Introduce critical flagging.
	console.log(e);
	return { status: 500, message: 'Unexpected error occurred' };
}
export function sendForbiddenErrorResponse(response) {
	response.status(403).json({ message: 'Not allowed' });
}
export function generateUniqueViolationResponse(e, message) {
	return { status: 422, message: message };
}
export function sendErrorHttpResponse(response, e) {
	response.status(e.status).json({ message: e.message });
}
