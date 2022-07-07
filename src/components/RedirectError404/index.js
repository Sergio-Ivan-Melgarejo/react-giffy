import React from "react";
import { Redirect } from "wouter";

const RedirectError404 = () => {
  return <Redirect to="/404" />
}

export default RedirectError404;
