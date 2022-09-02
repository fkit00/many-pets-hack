import express from "express";
export const router = express.Router();
import { policies } from '../models/index.js'

router.get("/", (req, res) => {
const result = await policies()
res.json({
        success: true,
        payload: result
    })
  });



export default router;
