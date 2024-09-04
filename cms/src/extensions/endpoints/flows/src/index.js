import { logger } from "./utils/logger";
import { runPages } from "./services/pagesFlow";

export default (router, { env }) => {
	router.post('/pages/:id', async (req, res, next) => {
		try {
			const id = req.params.id;
			const response = await runPages(id);
			res.json(response);
		}
		catch (error) {
			logger.error('Error in /pages', { error: error.message });
			next(error);
		}
	});

	router.use((err, req, res, next) => {
		res.status(500).json({
		  status: 'error',
		  message: err.message
		});
	});

};
