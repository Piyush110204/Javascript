import expree from "express";
import { saveInBulk } from "../controller/category.controller.js";
const route=expree.Router();

route.post("/save-in-bulk",saveInBulk);

export default route;