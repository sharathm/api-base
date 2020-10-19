import { replyToHealthPing } from './handler';
export function registerHealthComponentRoute(router, logger) {
	router.get('/health', async(request, response) => {
		try {
			const healthResponse = await replyToHealthPing(request.query.name);
			response.status(200).json(healthResponse);
		} catch (e) {
			response.status(500).json({ err: e });
		}
	});
}
