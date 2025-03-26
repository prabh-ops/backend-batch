import express from 'express';
import { addfollowerController, unfollowerController } from '../controllers/follower.controller.js';



const followerRouter = express.Router();
followerRouter.post('/follower',addfollowerController);
followerRouter.post('/unfollower',unfollowerController);


export default followerRouter;



