import { NextRequest, NextResponse } from "next/server"
import { match } from "path-to-regexp"

const pathsForAuth = ["/calendar/*"]

const isMatch = (pathname: string, urls: string[]) =>
  urls.some((url) => !!match(url)(pathname))

// config.matcher 에 정의된 경로들에 대해서만 middleware 가 호출되며,
// 호출된 경로들 중 경우에 따라 동작을 분기하도록 할 수 있음
function middleware(req: NextRequest) {
  // console.log(" => ", req.nextUrl.pathname, req.url)
  return NextResponse.next()
}

// middleware 로직이 호출되었으면 하는 경로들
const config = {
  matcher: [
    "/(?!_next/static|_next/image).*",
    "/(?!favicon.ico)",
    "/(?!*.jpg)",
  ],
}

export { middleware, config }
