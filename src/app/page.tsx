"use client";
import styles from "./page.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

export default function Home() {
  const { user, isLoading } = useUser();

  console.log(user);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {!user && !isLoading && (
          <>
            <h1>PROTECTED LANDING PAGE</h1>
            <div className={styles.ctas}>
              <a className={styles.primary} href="api/auth/login">
                Log in
              </a>
              <a href="/api/auth/signup" className={styles.secondary}>
                Sign up
              </a>
            </div>
          </>
        )}
        {user && !isLoading && (
          <>
            <h1>PROTECTED LANDING USER PAGE</h1>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>

            <div
              className={styles.ctas}
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <a href="/api/auth/logout" className={styles.primary}>
                Logout
              </a>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
