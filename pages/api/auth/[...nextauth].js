import { compare } from "bcrypt";
import User from "@/libs/models/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default function authHandler(req, res) {
    return NextAuth(req, res, {
        providers: [
            CredentialsProvider({
              credentials: {
                firstname: { label: "firstname", type: "text" },
                lastname: { label: "lastname", type: "text" },
                email: { label: "email", type: "email" },
                password: { label: "Password", type: "password" }
              },
              async authorize(credentials, req) {
                try {
                    // Find user by email from MongoDB
                    const user = await User.findOne({ email: credentials.email });

                    // If user not found or password doesn't match, return null
                    if (!user || !(await compare(credentials.password, user.password))) {
                        return null;
                    }

                    // If user and password match, return user object
                    return {
                        id: user._id,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        email: user.email
                        // You can add additional user properties here if needed
                    };
                } catch (error) {
                    console.error("Error during authentication:", error);
                    return null;
                }
              }
            })
        ]
    });
}
