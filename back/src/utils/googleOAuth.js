const GoogleStrategy = require('passport-google-oauth20').Strategy;
import { UserModel } from "../db";

const config = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
};

const findOrCreateUser = async ({ name, email }) => {
    const user = await UserModel.findByEmail({ email });
    if (user) return user;

    const newUser = await UserModel.addUser({
        name,
        email,
        password: 'GOOGLE_OAUTH',
    });

    return newUser;
}

module.exports = new GoogleStrategy(config, async (accessToken, refreshToken, profile, done) => {
    const { name, email } = profile._json;
    console.log('name, email');
    console.log(name, email);
    try {

        const user = await findOrCreateUser({ name, email });
        done(null, user);
    } catch (e) {
        done(e, null);
    }
});
