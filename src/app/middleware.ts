import { NextRequest, NextResponse } from "next/server"

function middleware(req: NextRequest) {
  return NextResponse.redirect("/")
}

const config = {
  matcher: [{}],
}

export default middleware
