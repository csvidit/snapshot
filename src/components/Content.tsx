import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { motion } from "framer-motion";

const Content = () =>
{
const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
}

export default Content;