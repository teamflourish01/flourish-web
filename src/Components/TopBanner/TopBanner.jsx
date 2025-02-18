import React, { useRef } from "react";
import "../TopBanner/TopBanner.css";
import YellowBtn from "../YellowBtn/YellowBtn";
import { PiHandTap } from "react-icons/pi";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import pdf from "../../assets/fcpl.pdf";
import { Link } from "react-router-dom";

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
      <meshBasicMaterial wireframe color="rgba(254, 254, 254, 0.2)" />{" "}
      {/* Black with 50% opacity */}
    </mesh>
  );
};

const TopBanner = ({ homeDetails }) => {
  const str = homeDetails?.top_title || "";
  const arr = str.split(" ");
  const text = arr;
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
            {text[0]} <span className="span-txt-t-b">{text[1]}</span> {text[2]}{" "}
            <span className="span-txt-t-b">{text[3]}</span>{" "}
            <span className="under-line">{text[4]}</span>
          </p>
          <p className="desc-text-area">{homeDetails?.top_text}</p>
          <Link to="/about" className="text-deco">
            <YellowBtn btnName="What We Do" />
          </Link>
        </div>
        <div className="view-works-container">
          <Link
            to="/work"
            className="text-deco"
            onClick={() => window.scrollTo(0, 0)}
          >
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
                <text
                  fill="white"
                  className="view-circle-title"
                  textLength="565"
                >
                  <textPath href="#outerCirclePath" startOffset="0%">
                    View Works • View Works • View Works • View Works •
                  </textPath>
                </text>
              </svg>
              {/* <PiHandTap /> */}
              <div
                className="clickable-icon"
                onClick={() => window.open({ pdf }, "_blank")}
                style={{ cursor: "pointer" }}
              >
                <PiHandTap size={40} color="white" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
