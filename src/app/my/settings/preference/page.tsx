import { NextPage } from "next";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
// import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";

import React from "react";

const Settings: NextPage = withPageAuthRequired(
  async () => {
    // const session = await getSession();
    // const user: any = session?.user;
    return (
      <div className="content-layout px-44">
        <h1 style={{ marginTop: "2rem" }}>Protected User Settings</h1>
        {/* <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p> */}
      </div>
    );
  },
  { returnTo: "/my/settings/preference" }
);

export default Settings;
