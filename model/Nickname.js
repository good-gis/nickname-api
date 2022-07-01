import mongoose from 'mongoose';

const Nickname = new mongoose.Schema({
    nickname: {type: String, required: true},
    category: {type: String, required: true},
    isShort: {type: Boolean}
})

export default mongoose.model('Nickname', Nickname)
