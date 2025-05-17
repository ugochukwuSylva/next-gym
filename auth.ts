import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { getMember } from "./app/_lib/data-services";
import { createMember } from "./app/_lib/actions";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],

  callbacks: {
    // This is a follow-through function for middleware. Before middleware can grant access to specific pages as specified, it first checks if the user is authorised, then it returns a boolean result
    authorized({ auth }) {
      return !!auth?.user;
    },

    async signIn({ user, account, profile }) {
      try {
        const existingMember = await getMember(user.email);

        if (!existingMember)
          await createMember({ email: user.email, fullName: user.name });

        return true;
      } catch {
        return false;
      }
    },

    // Session Callback - used to modify the session
    async session({ session, user }) {
      const member = await getMember(session.user.email);
      session.user.memberId = member.id;

      return session;
    },
  },

  // This enables us to create a custom login page. If the user is not authorised, the user is redirected to the login page.
  pages: { signIn: "/login" },
});
