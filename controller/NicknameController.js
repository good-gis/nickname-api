import NicknameService from "../service/NicknameService.js";

class NicknameController {
    async create(req, res) {
        try {
            const nickname = await NicknameService.create(req.body)
            res.json(nickname)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const nicknames = await NicknameService.getAll();
            return res.json(nicknames);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const nickname = await NicknameService.getOne(req.params.id)
            return res.json(nickname)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedNickname = await NicknameService.update(req.params.id, req.body);
            return res.json(updatedNickname);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const nickname = await NicknameService.delete(req.params.id);
            return res.json(nickname)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new NicknameController();
