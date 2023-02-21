import React from "react";
import { getAuth } from "@clerk/nextjs/server";
import type { NextApiRequest, NextApiResponse } from 'next'
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

export default function MiniProfile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div className="flex flex-col self-center w-full">
        <p className="text-stone-500">Welcome {user.name}!</p>
        <motion.div className="self-center">
          <Button underline="true" href="/api/auth/logout">Logout</Button>
        </motion.div>
      </div>
    );
  }
  return (
    <motion.div className="self-center mt-10">
      <Button underline="true" href="/sign-in">Login</Button>
    </motion.div>
  );
}
