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
import FloatingSvg from "../components/FloatingSvg";





export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [reverse, setReverse] = useState(false);

  const springProps = useSpring({
    from: { transform: "translateY(0px)" },
    to: {
      transform: reverse ? "translateY(0px)" : "translateY(20px)",
    },
    loop: false,
    config: { duration: 2000 },
    onRest: () => {
      setReverse(!reverse);
    },
  });

  

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
         <FloatingSvg/>
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
