import React from "react";
import useAuth from "../../hooks/useAuth";
import { profile } from "../../services/admin.service";
import { useLoaderData, defer, Await } from "react-router-dom";
import type { Admin } from "../../contexts/AuthProvider";

export default function Admin() {
  const profileData = useLoaderData() as { profile: Admin };

  return (
    <React.Suspense fallback={<p>Loading</p>}>
      <Await resolve={profileData.profile} errorElement={<p>loading error</p>}>
        {(profile) => (
          <section className="max-w-7xl mx-auto mt-3">
            <h2 className="text-2xl font-bold text-center">
              {profile.username}
            </h2>
            <p className="text-center">{profile.email}</p>
            <p className="text-center">{profile._id}</p>
            <div className="flex items-center justify-center gap-3">
              <span>{profile.role}</span>
              <span>{profile?.createdAt}</span>
            </div>
          </section>
        )}
      </Await>
    </React.Suspense>
  );
}

export async function loader() {
  // TODO: load profile if not avaliable;
  return defer({ profile: await profile() });
}
