import { api } from "@/endpoints";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";

export const authOptions: NextAuthOptions = {

providers: [
  CredentialsProvider({
    name: 'Credentials',
    credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: { label: "Password", type: "password" },
      },
    async authorize(credentials, req) {

        if (!credentials?.username || !credentials?.password) return null;
     
        const { username, password } = credentials;
        const res = await fetch(api.loginStudent, {
          method: "POST",
          body: JSON.stringify({
            username,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status == 401) {
          console.log(res.statusText);

          return null;
        }
        const user = await res.json();
        return user;
      }

    })
  ]
}


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


// import { api } from "@/endpoints";
// import { JWT } from "next-auth/jwt";



//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         username: {
//           label: "Username",
//           type: "text",
//           placeholder: "jsmith",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         if (!credentials?.username || !credentials?.password) return null;
//         const { username, password } = credentials;
//         const res = await fetch(api.loginStudent, {
//           method: "POST",
//           body: JSON.stringify({
//             username,
//             password,
//           }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         if (res.status == 401) {
//           console.log(res.statusText);

//           return null;
//         }
//         const user = await res.json();
//         return user;
//       },
//     }),
//   ],

//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) return { ...token, ...user };

    
//       // return await refreshToken(token);
//     },

//     async session({ token, session }) {
//       // session.user = token.user;
//       // session.backendTokens = token.backendTokens;

//       return session;
//     },
//   },
// };

