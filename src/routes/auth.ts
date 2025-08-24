import { Elysia } from "elysia";
import { jwt } from "@elysiajs/jwt";
import { cors } from "@elysiajs/cors";
import {supabase} from "../supabase";


export default (app: Elysia) => {
    //Login
    return app.post('auth/login', async ({body, set}) => {
        const {email, password} = body as { email?: string; password?: string };

        if (!email || !password) {
            return {status: 401, code: 403, message: "Invalid email or password"};
        }

        const {data, error} = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) {
            return {status: 500, code: 500, message: error.message}
        }

        const session = data.session;
        const user = data.user;

        if (session && session.refresh_token ) {
            const refreshToken = session.refresh_token;
            set.headers['Set-Cookie'] = `sb-refreshToken = ${refreshToken}; HttpOnly; Path=/; SameSite=Strict; Max-Age=2592000; Secure`
        }

        return {status: 'ok', data: {user, session}}

    })

    //----------------------------------------------------LOGOUT----------------------------------------------------//
    app.post('auth/logout', async ({request, set}) => {
        const authHeader = request.headers.get('authorization') || ' '
        const token = authHeader.replace('Bearer', '');
        if(token) {
            const {error} = await supabase.auth.signOut();
            if(error) return {status: 500, code: 500, message: error.message}
        }
        set.headers['Set-Cookie'] = `sb-refresh-token=; HttpOnly; Path=/; Max-Age=0; Secure`;

        return {status: 'ok'}
    })


}





