import { Router } from 'express';

const toolsRouter = Router();

toolsRouter.get('/', (request, response) => {
    return response.json({msg: "All tools"})
});

toolsRouter.post('/', (request, response) => {
    return response.status(201).json({msg: 'New tool'});
});

export default toolsRouter;