import { api } from "@/libs/endpoints";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials, req) {
        const res = await fetch(api.loginStudent, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });

        const user = await res.json();

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_URL,
  pages: {
    signIn: "/",
    // signOut: ''
    // error: 'auth/error'
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      if (token) {
        session.user.rollId = token.rollId;
        session.user.loggedInUser = token.loggedInUser;
        session.user.userRole = token.userRole;
        session.user.accessToken = token.accessToken;
        // session.user.class = token.cla
      }

      return session;
    },
  },
});

export { handler as GET, handler as POST };
