import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

// Middleware function to handle the redirect
export function middleware(req: NextRequest) {
  // Randomly select a login page
  const randomLogin = Math.floor(Math.random() * 10) + 1;
  
  // Construct the login URL based on the random number
  const loginUrl = `/login/login1`;

  // If the user is on the homepage, redirect to the random login page
  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/login/login2', req.url));
  }

  // Return the response if no redirection is needed
  return NextResponse.next();
}