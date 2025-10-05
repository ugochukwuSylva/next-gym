import NextAuth, { DefaultSession } from "next-auth";

NextAuth;

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      memberId?: number;
      id: string;
    } & DefaultSession["user"];
  }
}
