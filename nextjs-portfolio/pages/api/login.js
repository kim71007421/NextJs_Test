import { serialize } from "cookie";


const cookieOptions = {
    httpOnly: true,
    maxAge: 2592000,
    path: "/",
    sameSite: "Lax",
};


export default function handler(req, res) {
    res.setHeader('Set-Cookie', serialize("madahm_test", 'token', cookieOptions));
    res.end();
    // console.log(res.getHeader('Set-Cookie'));
}