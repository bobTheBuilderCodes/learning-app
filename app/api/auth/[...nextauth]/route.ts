
import { api } from "@/libs/endpoints";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      
      name: "Credentials",
      
      credentials: {
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
       
        const res = await fetch(api.loginStudent , {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await res.json();

        if (user) {
          
          console.log("Logged in user", user)
          return user;
        } else {
        
          return null;

          
        }
      },
    }),
  ],
  pages: {
    signIn: '/'
  },
  callbacks: {
    async jwt({ token, user,  }) {
        
      return { ...token, ...user };
    },
    
    
    async session({ session, token }) {
      if(token){
session.user.rollId = token.rollId
session.user.loggedInUser = token.loggedInUser
session.user.userRole  = token.userRole
      } 
     
       
      return session;
    },
    // async session({ session, token }) {
    //   session.user = token as any;   
     
       
    //   return session;
    // },
    
    
  
  },
});

export { handler as GET, handler as POST };