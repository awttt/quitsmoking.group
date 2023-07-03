import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { Controller, Scene } from "react-scrollmagic";
import { useSpring, animated } from "@react-spring/web";
import { Typewriter } from "@site/src/components/Typewriter";
import FloatingSvg from "../components/FloatingSvg";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <h1>Welcome to my world！</h1>
        <span>这里提供戒烟指导</span>
        <span>承接ts技术栈项目</span>

        <h2>
          <Typewriter />
        </h2>
      </div>
    </Layout>
  );
}
