"use client";

import Link from "next/link";
import Post from "./post.mdx";
import Sidebar from "../../Components/sidebar/Sidebar";

export default function RobotHand() {
  return (
    <>
      <Sidebar />
      <div className="project-detail">
        <Post />
      </div>
    </>
  );
}
