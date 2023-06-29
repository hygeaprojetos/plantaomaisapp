import React from "react";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {

  const isAuthenticated = false
  const loading = false
  return (
    isAuthenticated ? <AppRoutes/> : <AuthRoutes />
  )
}
