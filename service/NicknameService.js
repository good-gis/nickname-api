import Nickname from "../model/Nickname.js";

class NicknameService {
    async create(nickname) {
        return await Nickname.create({...nickname});
    }

    async getAll() {
        return Nickname.find();
    }
    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        return Nickname.findById(id);
    }

    async update(id, nickname) {
        if (!id) {
            throw new Error('не указан ID')
        }
        return Nickname.findByIdAndUpdate(id, nickname, {new: true});
    }

    async delete(id) {
            if (!id) {
                throw new Error('не указан ID')
            }
        return Nickname.findByIdAndDelete(id);
    }
}

export default new NicknameService();
