"use client";

import React, { useState } from "react";

const Page = () => {
  const [user, setUser] = useState<string>("");

  return user ? (
    <>{user}</>
  ) : (
    <>
      <p>유저 식별을 위해 해쉬값을 입력해 주세요.</p>
      <button
        onClick={() => {
          setUser("hash");
          console.log("hello");
        }}>
        user
      </button>
    </>
  );
};

export default Page;
