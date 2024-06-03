import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className='flex mb-6' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      <span class="material-symbols-outlined text-[#0CA3E7]">
        move_item
      </span>
      <span className='font-semibold ml-2 text-[16px]'>Logout</span>
    </button>
  );
};

export default LogoutButton;