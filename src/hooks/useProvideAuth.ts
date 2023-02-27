import React from "react";

export default function useProvideAuth() {
  const [admin, setAdmin] = React.useState(null);

  return {
    admin,
  };
}
