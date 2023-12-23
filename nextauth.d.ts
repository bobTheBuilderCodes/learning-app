import type { JWT as NextAuthJWT, Session as NextAuthSession, User as NextAuthUser } from 'next-auth';

declare module 'next-auth/jwt' {
  interface JWT extends NextAuthJWT {
    id: string;
    rollId: string;
    loggedInUser: string;
    userRole: string;
    accessToken: string;
  }
}

declare module 'next-auth' {
  interface Session extends NextAuthSession {
    user: NextAuthUser & {
      rollId: string;
      loggedInUser: string;
      userRole: string;
      accessToken: string;
    };
  }
}
