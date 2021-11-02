import NextAuth from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    user: {
      /** The user's account id. */
      _id: string;
      /** The user's account firstname. */
      firstName: string;
      /** The user's account lastname. */
      lastName: string;
      /** The user's account email. */
      email: string;
    };
  }
}
