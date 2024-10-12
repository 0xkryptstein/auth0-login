"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { SignupButton } from "@/components/signup-button";
import { LoginButton } from "@/components/login-button";
import { LogoutButton } from "@/components/logout-button";
import React from "react";

const NavBar = () => {
  const { user, error, isLoading } = useUser();

  return (
    <div
      style={{
        backgroundColor: "black",
        maxHeight: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <div style={{ display: "flex", gap: "40px" }}>
        <a href="/" style={{ color: "white", textDecoration: "none" }}>
          Home Logo Icon
        </a>
        <a href="/" style={{ color: "white", textDecoration: "none" }}>
          Buy Crypto
        </a>
        <a href="/" style={{ color: "white", textDecoration: "none" }}>
          Markets
        </a>
        {!user && !isLoading && (
          <>
            <a href="/" style={{ color: "white", textDecoration: "none" }}>
              Trade
            </a>
          </>
        )}
        {user && !isLoading && (
          <>
            <a href="/" style={{ color: "white", textDecoration: "none" }}>
              Trade
            </a>
            <a
              href="/my/account/wallet"
              style={{ color: "white", textDecoration: "none" }}
            >
              Wallet
            </a>
            <a
              href="/my/account"
              style={{ color: "white", textDecoration: "none" }}
            >
              Account
            </a>
            <a
              href="/my/settings/preference"
              style={{ color: "white", textDecoration: "none" }}
            >
              Settings
            </a>
          </>
        )}
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        {!user && !isLoading && (
          <>
            <SignupButton />
            <LoginButton />
          </>
        )}
        {user && !isLoading && <LogoutButton />}
      </div>
    </div>
  );
};

export default NavBar;
