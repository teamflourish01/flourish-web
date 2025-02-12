import React, { useRef } from "react";
import "../TopBanner/TopBanner.css";
import YellowBtn from "../YellowBtn/YellowBtn";
import { PiHandTap } from "react-icons/pi";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import pdf from '../../assets/fcpl.pdf'
const RotatingIcosahedron = () => {
  const meshRef = useRef();

  // Rotates the icosahedron continuously
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Adjust speed as needed
      meshRef.current.rotation.x += 0.005; // Slight tilt effect
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 0]} /> {/* Increased size */}
      <meshBasicMaterial wireframe color="rgba(254, 254, 254, 0.2)" /> {/* Black with 50% opacity */}
    </mesh>
  );
};

const TopBanner = () => {
  return (
    <div className="top-banner">
      {/* Background icosahedron */}
      <div className="icosahedron-bg icosahedron-right">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <RotatingIcosahedron />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <div className="icosahedron-bg icosahedron-left">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <RotatingIcosahedron />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      <div className="top-banner-container">
        <div className="t-b-desc">
          <p className="we-tra-txt">
            We <span className="span-txt-t-b">transform</span> business{" "}
            <span className="span-txt-t-b">into</span>{" "}
            <span className="under-line">BRAND</span>
          </p>
          <p className="desc-text-area">
            We craft stunning brand identities and digital experiences that help
            businesses grow and thrive. We are a branding and marketing agency
            in Ahmedabad that turns ideas into impactful visuals that leave a
            lasting impression.
          </p>
          <YellowBtn btnName="View Works" />
        </div>
        <div className="view-works-container">
          <div className="view-works-circle">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              className="circle-text"
            >
              <defs>
                <path
                  id="outerCirclePath"
                  d="M 100, 100 m -90, 0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0"
                />
              </defs>
              <text fill="white" className="view-circle-title" textLength="565">
                <textPath href="#outerCirclePath" startOffset="0%">
                  View Works • View Works • View Works • View Works •
                </textPath>
              </text>
            </svg>
            {/* <PiHandTap /> */}
            <div
    className="clickable-icon"
    onClick={() => window.open({pdf}, "_blank")}
    style={{ cursor: "pointer" }}
  >
    <PiHandTap size={40} color="white" />
  </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;

