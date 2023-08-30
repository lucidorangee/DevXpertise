const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true },
  displayName: { type: String, required: true },
  createdPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
});

userSchema.statics.findOrCreate = async function (condition, userData) {
    try {
        let user = await this.findOne(condition);
        if (!user) {
            user = await this.create(userData);
        }

        return user;
    } catch (error) {
        throw error;
    }
};

userSchema.statics.findOneByGoogleId = function(googleId) {
    return this.findOne({ googleId });
};

userSchema.statics.createUser = function(userData) {
    return this.create(userData);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
