import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "424114765652-39g9g94uq0v1d9f6tj9634upevmccsub.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});
