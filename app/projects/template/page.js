"use client";

import Link from "next/link";
import Post from "./post.md";
import Sidebar from "../../Components/sidebar/Sidebar";

export default function <Name>() {
  return (
    <>
      <Sidebar />
      <div className="project-detail">
        <Post />
      </div>
    </>
  );
}
