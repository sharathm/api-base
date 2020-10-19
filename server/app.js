'use strict';
import logger from './setup/logger';
import { app, teardown } from './setup/express';
import { registerHealthComponentRoute } from './components/health';
(async() => {
	try {
		logger.info('Application Started');
		process.on('SIGINT', () => {
			console.log(`Exiting application `);
			try {
				teardown();
			} catch (e) { console.error(e); }
			process.exit(0);
		});

		registerHealthComponentRoute(app, logger);

		app.use((err, req, res, next) => {
			// set locals, only providing error in development
			res.locals.message = err.message;
			res.locals.error = req.app.get('env') === 'development' ? err : {};
			if (req.app.get('env') === 'development') { console.log('Error: ', err); }
			return res.status(err.status || 500).json(err.message);
		});
	} catch (e) {
		console.error(e);
	}
})();
