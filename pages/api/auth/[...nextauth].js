import bcrypt from "bcryptjs";
import connectDB from "@/utils/connectDB";
import User from "@/libs/models/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";

let userAccount;
export const authOptions = {
    providers: [
        CredentialsProvider({
            id:"credentials",
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                try {
                    await connectDB();
                    const user = await User.findOne({ email: credentials?.email });
                    
                    if (!user) {
                        throw new Error("User not found"); // Throw an error if user is not found
                    }
                    console.log(user);
                    const passwordMatch = await bcrypt.compare(credentials?.password, user.password);
                    if (credentials.email === user.email && passwordMatch) {
                         userAccount = {
                            userid: user._id,
                            firstname: user.firstname,
                            lastname: user.lastname,
                            email: user.email
                        };
                        return userAccount; // Resolve with user account data
                    } else {
                        throw new Error("Invalid password"); // Throw an error if password doesn't match
                    }
                } catch (err) {
                    console.error("Error: ", err);
                    throw new Error("Authentication failed"); // Throw a generic error for other exceptions
                }
            }
            
            
        }),
    ],
    jwt: {
        encryption: true,
     
    },
    session: {
        strategy: "jwt",
        jwt: true
    },
    callbacks: {
    
          async session(session) {
            if(session) {
                session.user = {
                    _id: userAccount.userid,
                    firstname: userAccount.firstname,
                    lastname: userAccount.lastname,
                    email: userAccount.email
                };
             
            }
            console.log(session.user);
            return session;

        },
        async signIn(user, account, profile){
            try {
                // Generate JWT token
                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        
                // Encode token for URL
                const encodedToken = encodeURIComponent(token);
        
                // Construct the redirect URL with the token as a query parameter
                const redirectUrl = `/?token=${encodedToken}`;
        
                // Return a 302 (temporary) redirect response with the URL in the Location header
                return {
                    statusCode: 302,
                    headers: {
                        Location: redirectUrl,
                    },
                };
            } catch (error) {
                console.error('Error generating token:', error);
                throw new Error('Failed to generate token');
            }
        }
    },
    pages: {
        signIn: "/login",
        callBackUrl: "/"
    },
};
const handler = NextAuth(authOptions);

export default handler;
export const GET = (req, res) => handler.handleRequest(req, res, { ...authOptions });
export const POST = (req, res) => handler.handleRequest(req, res, { ...authOptions });