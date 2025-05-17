import { DefaultSession } from "next-auth";

// declare module "next-auth" {
//   interface User {
//     memberId?: string;
//   }

//   interface Session {
//     user: {
//       memberId?: string;
//     } & DefaultSession["user"];
//   }
// }
declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      memberId?: number; // 👈 Add this line
    };
  }
}
