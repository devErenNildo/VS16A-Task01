import { useGoogleLogin } from "@react-oauth/google";
import { useState, useEffect } from "react";
import axios from "axios";

interface GoogleUser {
    name: string;
    email: string;
    picture: string;
};

export default function useGoogleAuth() {
    const [user, setUser] = useState<GoogleUser | null>(null);

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        Authorization: `Bearer ${tokenResponse.access_token}`
                    }
                });

                const { name, email, picture } = res.data;
                const loggedUser = { name, email, picture };
                setUser(loggedUser);
            } catch (err) {
                console.error("Erro ao buscar dados:", err);
            }
        }, onError: (err) => {
            console.error("Erro no login:", err);
        },
    });

    const logout = () => {
        setUser(null);
    };

    return { user, login, logout };
}