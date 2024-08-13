import { NextAuthOptions } from "next-auth"
import KakaoProvider from "next-auth/providers/kakao"
import NaverProdiver from "next-auth/providers/naver"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),
    NaverProdiver({
      clientId: process.env.NAVER_CLIENT_ID || "",
      clientSecret: process.env.NAVER_CLIENT_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],

  secret: process.env.SECRET,

  callbacks: {
    async jwt({ token, user }) {
      // console.log(token, user)
      return { ...token, ...user }
    },
    // async session({ session, token }) {
    //   session.user = token
    //   return session
    // },
  },

  pages: {
    signIn: "/auth/signin",
  },
}
