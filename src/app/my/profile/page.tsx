import { getSession } from "@auth0/nextjs-auth0";
import ProfileClient from "./components/user-client";
import ProfileServer from "./components/user-server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/");
  }
  return (
    <>
      <h1 style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        Protected Profile Page which will be the Dashboard
      </h1>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "50px", marginBottom: "5rem" }}>
          <h1>Client Component</h1>
          <ProfileClient />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "50px" }}>
          <h1>Server Component</h1>
          <ProfileServer />
        </div>
      </div>
    </>
  );
};

export default Profile;
