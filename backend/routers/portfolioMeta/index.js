import express from "express";

import { deleteItemById, getSearchedItem, postPortfolioMeta } from "../../controllers/portfolioMeta/index.js";
import { getItemById } from "../../controllers/portfolioMeta/index.js";
import { Upload } from "../../middleware/imgUpload.js";
import { updateItemById } from "../../controllers/portfolioMeta/index.js";
import { getAllItem } from "../../controllers/portfolioMeta/index.js";

const router = express.Router();

// POST
// 여러 파일 업로드하는, multer 미들웨어 설정 | key 이름이 1개 일 때
// router.post("/", Upload.array("architectureImg"), postPortfolioMeta);
// Upload.array("architectureImg") 여기 이름이름 input 에서 file 넣을 때 name 이 일치 해야 함

// key 이름이 2개 일 때
router.post(
  "/",
  Upload.fields([
    { name: "architectureImg", maxCount: 10 }, // architectureImg 필드에서 최대 5개 파일 허용
    { name: "demoVideo", maxCount: 10 },
  ]),
  postPortfolioMeta
);

// GET
router.get("/itemById/:id", getItemById);  // path parameter 의 경우, url 에 추가 표시 있음
router.get("/allMetaData", getAllItem);
router.get("/search", getSearchedItem);   // query parameter 의 경우, url 에 추가 표시 하지 않음


// PATCH
router.patch(
  "/updatedItem/:id",
  Upload.fields([
    { name: "architectureImg", maxCount: 10 }, // architectureImg 필드에서 최대 5개 파일 허용
    { name: "demoVideo", maxCount: 10 },
  ]),
  updateItemById
);

// Delete
router.delete("/deleteItem/:id" , deleteItemById );

export default router;
