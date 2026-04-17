import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  const url = request.nextUrl.clone()

  // Redireccionar dominio sin www a www (excepto localhost)
  if (
    host === 'valentinproteccionintegral.com' ||
    host === 'http://valentinproteccionintegral.com' ||
    host === 'https://valentinproteccionintegral.com'
  ) {
    url.host = 'www.valentinproteccionintegral.com'
    url.protocol = 'https'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}
