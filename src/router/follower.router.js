import express from 'express';
import { addfollowerController, unfollowerController } from '../controllers/follower.controller.js';



const followerRouter = express.Router();
followerRouter.post('/followers/?',addfollowerController);
followerRouter.delete('/followers/?',unfollowerController);


export default followerRouter;



