"use client"

import { useEffect } from "react"

interface AboutProps {children: React.ReactNode};

export default function AboutTemplate({children}: AboutProps) {
  useEffect(() => {
    console.log('about');
  }, []);

  return (
    <div>{children}</div>
  )
};
