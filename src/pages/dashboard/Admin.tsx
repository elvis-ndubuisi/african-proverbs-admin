import React from "react";
import { defer, useLoaderData, Await } from "react-router-dom";
import { profile } from "../../services/admin.service";
import { Admin as A } from "../../@types";

export default function Admin() {
  const profileData = useLoaderData() as { profile: A };
  return (
    <React.Suspense fallback={<p>Loading....</p>}>
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
