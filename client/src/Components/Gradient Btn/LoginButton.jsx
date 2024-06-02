import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = ({ placeHolder }) => {
    const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
    console.log(isAuthenticated)
    if (isAuthenticated) {
        console.log(user)
        console.log(isAuthenticated)
        const response = fetch("https://devauction.onrender.com/auth", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
    }





    return <button className="bg-gradient-to-r from-[#9A76FF] via-[#0CA3E7] to-[#23DD9F] p-2 text-[#11111] px-6 rounded-xl font-semibold font-sans" onClick={() => loginWithRedirect()}>{placeHolder}</button>;
};

export default LoginButton;