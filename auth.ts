import NextAuth from "next-auth";

import Google from "next-auth/providers/google";
import { emailNotification, getMember } from "./app/_lib/data-services";
import { createMember } from "./app/_lib/actions";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    // This is a follow-through function for middleware. Before middleware can grant access to specific pages as specified, it first checks if the user is authorised, then it returns a boolean result
    authorized({ auth }) {
      return !!auth?.user;
    },

    async signIn({ user }) {
      try {
        const existingMember = await getMember(user.email);
        if (!existingMember) {
          await createMember({ email: user.email, fullName: user.name });

          if (user.email && user.name) {
            await emailNotification(
              "Your sign-up was successful 😊",
              String(user.name?.split(" ")[0]),
              user.email
            );
          }
        }

        return true;
      } catch {
        return false;
      }
    },

    // Session Callback - used to modify the session
    async session({ session }) {
      const member = await getMember(session.user.email);

      session.user.memberId = member.id;
      // await emailNotification("Your sign-up was successful 😊");

      return session;
    },
  },

  // This enables us to create a custom login page. If the user is not authorised, the user is redirected to the login page.
  pages: { signIn: "/login" },
});
