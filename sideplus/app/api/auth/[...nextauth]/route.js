import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
        clientId: "571622428626-dc49jthq1vib8o5ihjjfp687vijgbvip.apps.googleusercontent.com",
        clientSecret: "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"
    }),
  ],
};

const Handler = NextAuth(authOptions);

export { Handler as GET, Handler as POST };