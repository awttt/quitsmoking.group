import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { Controller, Scene } from "react-scrollmagic";
import { ReactNebula } from "@flodlc/nebula";
import { useSpring, animated } from "@react-spring/web";
import { Typewriter } from "@site/src/components/Typewriter";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title} welcome 2 my page</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const texts = ["Hello", "World", "React Spring"];
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div style={{ position: "absolute", zIndex: "2" }}>
          <h1>
            Welcome to the <Typewriter /> Example
          </h1>
        </div>
        <ReactNebula
          style={{ position: "absolute", zIndex: "1" }}
          config={{
            starsCount: 560,
            starsColor: "#FFFFFF",
            starsRotationSpeed: 10.5,
            cometFrequence: 37,
            nebulasIntensity: 3,
            bgColor: "rgb(8,8,8)",
            sunScale: 0,
            planetsScale: 0,
            solarSystemOrbite: 0,
            solarSystemSpeedOrbit: 0,
          }}
        />
      </main>
    </Layout>
  );
}
