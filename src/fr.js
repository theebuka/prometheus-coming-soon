import React, { useMemo } from 'react';
import { Polygon } from 'react-leaflet';
import { pathDataToPolys } from 'svg-path-to-polygons';

const CustomShape = ({ svgPath, options, ...props }) => {
  const polygons = useMemo(() => {
    return pathDataToPolys(svgPath, options);
  }, [svgPath, options]);

  return polygons.map((polygon, index) => (
    <Polygon positions={polygon} key={index} {...props} />
  ));
};

export default CustomShape;



import React, { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import * as THREE from 'three';
import { ExtrudeGeometry } from 'three';
import * as svgPathToPolygons from 'svg-path-to-polygons';
import { OrbitControls } from '@react-three/drei';
import { ReactComponent as LogoC } from './images/logo-c.svg';
import { ReactComponent as MenuButton } from './images/menu-button.svg';
import { ReactComponent as RArrow } from './images/right-arrow-desktop.svg';

extend({ OrbitControls });

const CustomShape = () => {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
//   const { size, viewport } = useThree();


  const shapeGeom = useMemo(() => {
    const path = 'M 46 474 L 220 444 L 83 45 L 313 272 L 331 60 L 548 45 L 486 259 Z';
    const polygons = svgPathToPolygons(path, { decimals: 2 });
    const shapePoints = polygons[0].map(([x, y]) => new THREE.Vector2(x / 100, y / 100));
    const shape = new THREE.Shape(shapePoints);
    const extrudeSettings = {
      steps: 2,
      depth: 2,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelOffset: 0,
      bevelSegments: 5,
    };

    return new ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  useFrame((state) => {
    const step = 0.05;
    mesh.current.rotation.x += step * state.mouse.y;
    mesh.current.rotation.y += step * state.mouse.x;
  });

  return (
    <mesh
      ref={mesh}
      geometry={shapeGeom}
      scale={0.5}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

const Home = () => {
  return (
    <section className='fullPage'>
      <nav className='navigation'>
        <div className='logo'>
          <LogoC />
        </div>
        <div className='menu-button'>
          <MenuButton />
        </div>
      </nav>
      <div className='home'>
        <div className='heading-1'>
          <span>Curious huh?</span>
          <span>Us too.</span>
        </div>
      <div className='3d-image'>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <CustomShape />
          <OrbitControls />
        </Canvas>
      </div>
      <div className='heading-2'>
          <span>We're launching</span>
          <div>
            <span className='soon'>soon</span>
            <div className='newsletter'>
              <input
                className='newsletter-email-input'
                placeholder='your email goes here'
              ></input>
              <button className='newsletter-submit-button'>Let me know</button>
            </div>
          </div>
        </div>
      </div>
      <footer className='contact'>
        <div className='section-title'>
          <span>Get in touch</span>
          <span>
            <RArrow />
          </span>
        </div>
        <div className='social-links'>
          {/* Your social links */}
        </div>
      </footer>
    </section>
  );
};

export default Home;
