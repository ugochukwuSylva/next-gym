import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],

  callbacks: {
    // This is a follow-through function for middleware. Before middleware can grant access to specific pages as specified, it first checks if the user is authorised, then it returns a boolean result
    authorized({ auth }) {
      return !!auth?.user;
    },
  },

  // This enables us to create a custom login page. If the user is not authorised, the user is redirected to the login page.
  pages: { signIn: "/login" },
});
