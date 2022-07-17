import { NextRequest, NextResponse, NextFetchEvent } from 'next/server'
import Redis from 'ioredis';


export function middleware(NextRequest, NextFetchEvent) {
    const { pathname } = NextRequest.nextUrl;
    const confirmedUrl = ['/projects', '/contract'];

    const cookies = NextRequest.cookies['madahm_test'];

    if (confirmedUrl.includes(pathname)) {
        console.log('NextRequest', pathname);
    }

    const redis = new Redis({
        port: REDIS_PORT,
        host: REDIS_HOST,
        password: REDIS_PASSWORD
    });
        
    NextFetchEvent.waitUntil(
        (async () => {
           
        })()
    );
    
    return NextResponse.next();
}

export async function getServerSideProps(context) {
    console.log('aaa');
}