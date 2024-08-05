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

  // 없으면 기본 제공하는 /api/auth/signin 페이지로 이동
  // TODO. 현재 다른 경로로 설정해도 /api/auth/signin 으로 이동함
  pages: {
    // signIn: "/auth/signin",
    // signOut: "/auth/signout",
  },

  secret: process.env.SECRET,

  callbacks: {
    // async jwt({ token, user }) {
    //   return { ...token, ...user }
    // },
    // async session({ session, token }) {
    //   session.user = token
    //   return session
    // },
  },

  events: {
    async signOut(msg) {
      // console.log(msg)
    },
    async signIn() {},
  },
}
