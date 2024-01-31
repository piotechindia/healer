import type { Awaitable, NextAuthOptions, RequestInternal, User } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials";


export const Options: NextAuthOptions = {
    providers : [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Your Username"
                },
                password: {
                    label:"Password",
                    type: "password",
                    placeholder: "your password",
                },
            },
            async authorize(credentials){
                const user = {id :"42",name: "Pihu",password: "nextauthpass"}

                if(credentials?.username === user.name && credentials?.password === user.password){
                    return user
                } else {
                    return null
                }
            }
        }),
    ],
}