import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const saltRounds = 10;

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    nickname: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 15,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    }
});

UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});

module.exports = mongoose.model('users', UserSchema);