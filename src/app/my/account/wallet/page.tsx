import { NextPage } from "next";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Image from "next/image";
import React from "react";

type User = {
  name: string;
  email: string;
  picture: string;
};

const Wallet: NextPage = withPageAuthRequired(
  async () => {
    const session = await getSession();
    const user = session?.user as User;
    return (
      <div className="content-layout px-44">
        <h1 style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          Protected Wallet
        </h1>

        <Image src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    );
  },
  { returnTo: "/my/account/wallet" }
);

export default Wallet;
