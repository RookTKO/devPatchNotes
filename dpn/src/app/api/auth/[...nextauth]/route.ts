import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// TODO: Add more providers (Google, Discord, Email, etc)

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // TODO: Implement user lookup/validation
                return { id: "1", email: credentials?.email };
            }
        })
    ],
    // TODO: Add Prisma adapter, session, callbacks, etc
});

export { handler as GET, handler as POST };
