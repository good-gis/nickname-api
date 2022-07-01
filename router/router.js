import Router from 'express'
import NicknameController from "../controller/NicknameController.js";

const router = new Router()

router.post('/nickname', NicknameController.create)
router.get('/nickname', NicknameController.getAll)
router.get('/nickname/:id', NicknameController.getOne)
router.put('/nickname/:id', NicknameController.update)
router.delete('/nickname/:id', NicknameController.delete)

export default router;
