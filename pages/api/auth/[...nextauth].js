import axios from "axios";
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

const options = {
    // Configure one or more authentication providers
    providers: [
        Credentials({
            name: "Ingreso con Email y contraseña",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email@email.com" },
                password: { label: "Contraseña", type: "password" },
            },
            async authorize(credentials) {
                // Toda la lógica -> axios, BBDD...
                const user = { name: "Lionel Richie", email: credentials.email };
                if (user) return user;
                return null;
            }
        }),
        // ...add more providers here
    ],
    jwt: {
        signingKey: { "kty": "oct", "kid": "jVsnMhPOBZb5G_P9E6XPvNUbjkMXvpsiICKGeeFM-m8", "alg": "HS512", "k": "S0ryw0JEODA4FQMwKnaaGt2h1-m41OCs2Ki2mkRj4vj_ix-555UGP66gJzlDMlsfe6mha8BRl05v5mera2nQDw" },
        verificationOptions: {
            algorithms: ["HS256"]
        }
    },
    session: {
        jwt: true
    }
}

export default (req, res) => NextAuth(req, res, options);
