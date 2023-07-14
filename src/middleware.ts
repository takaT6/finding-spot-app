import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';
import type { Database } from '@/types/database.types';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });

  // await supabase.auth.getSession();

  // const { data: { user } } = await supabase.auth.getUser();

  // if (user && req.nextUrl.pathname === "/") {
  //   return NextResponse.redirect(new URL("/map", req.url));
  // }

  // if (!user && req.nextUrl.pathname === "/") {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }

  // return res;

  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/map", req.url));
  }
}