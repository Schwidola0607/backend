import express from 'express'

const router = express.Router();

//Order CRUD
router.post('/',getOrders);

router.post('/newPost',newPost)

router.post('/deletePost',deletePost)

router.post('/updatePost',updatePost)



export default router