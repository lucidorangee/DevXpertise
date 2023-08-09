const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true },
  displayName: { type: String, required: true },
});

userSchema.statics.findOrCreate = async function (condition, userData) {
    try {
        let user = await this.findOne(condition);
        if (!user) {
        user = await this.create(userData);
        }

        return user;
    } catch (error) {
        console.error('Error in findOrCreateUser:', error);
        throw error;
    }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
