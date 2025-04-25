import LogoutButton from "@/components/auth/logout-button";
import { getUser } from "@/lib/dal";

export default async function Profile() {
  const user = await getUser();

  return (
    <div>
      Profile {
        user && (
          <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        )
      }

      <LogoutButton />
    </div>
  );
}
