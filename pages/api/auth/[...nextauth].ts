import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { userSessionHelper } from '../../../utils/api_helpers/api_user/api-user.helper';
import destructureSigningKey from '../../../utils/api_helpers/api_auth/api-auth.helper';

const options = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'example@gmail.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        return { email: credentials.email };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    jwt: true,
    maxAge: 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    signingKey: destructureSigningKey(process.env.JWT_SIGNING_KEY),
    encryption: true,
    encryptionKey: process.env.JWT_ENCRYPTION_KEY,
    decryptionKey: process.env.JWT_ENCRYPTION_KEY,
  },
  callbacks: {
    signIn: async () => true,
    session: async (session) => {
      const userSession = await userSessionHelper(session.token.email);
      if (!userSession) return null;
      session.user = { ...userSession };
      return session;
    },
    jwt: async (token) => {
      token = { email: token.token.email };
      return token;
    },
  },
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options as any);
