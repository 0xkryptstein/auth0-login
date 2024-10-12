export const LogoutButton = () => {
  return (
    <a
      href="/api/auth/logout"
      style={{ color: "white", textDecoration: "none" }}
    >
      Log Out
    </a>
  );
};
