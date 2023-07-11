/* import React, { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { ExtrudeGeometry } from 'three';
import { pathDataToPolys } from 'svg-path-to-polygons';
import { OrbitControls } from '@react-three/drei';
import { ReactComponent as LogoC } from './images/logo-c.svg';
import { ReactComponent as MenuButton } from './images/menu-button.svg';
import { ReactComponent as RArrow } from './images/right-arrow-desktop.svg';

extend({ OrbitControls });

const CustomShape = () => {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const { size, viewport } = useThree();

  const shapeGeom = useMemo(() => {
    const path = 'M 46 474 L 220 444 L 83 45 L 313 272 L 331 60 L 548 45 L 486 259 Z';
    const polygons = pathDataToPolys(path, { tolerance: 4, decimals: 1 });
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
    mesh.current.rotation.x += step * state.mouse.y * -1;
    mesh.current.rotation.y += step * state.mouse.x * -1;
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
}; */

/* import React, { useEffect, useRef, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Application } from '@splinetool/runtime';
import { ReactComponent as LogoC } from './images/logo-c.svg';
import { ReactComponent as MenuButton } from './images/menu-button.svg';
import { ReactComponent as RArrow } from './images/right-arrow-desktop.svg';

extend({ OrbitControls, Canvas });

const SplineScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);
    app.load('https://prod.spline.design/dulgIWpUS02bwIc2/scene.splinecode');

    return () => {
      app.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

const Loading = () => {
  return <div>Loading...</div>;
};

const Home = () => {
    // const { gl, camera } = useThree();

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
        <Canvas concurrent shadowMap>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={<Loading />}>
                <SplineScene />
            </Suspense>
            <OrbitControls />
        </Canvas>
      </div>
      <div className='heading-2'>
          <span>We're launching</span>
          <div>
            <span className='soon'>soon</span>
            <div className='newsletter'>
              <input
                className='newsletter-email-input' placeholder='your email goes here'></input>
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
            <a href="https://www.twitter.com/prometheus_HQ" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com/prometheus_HQ" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/company/prometheus-hq" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:hello@prometheustech.co" target="_blank" rel="noopener noreferrer">Email</a>
          </div>
        </footer>
      </section>
    );
};
    
export default Home; */

/* import React, { useEffect, useRef, Suspense } from 'react';
import * as THREE from 'three';
import { extend } from '@react-three/fiber';
import { OrbitControls as StdlibOrbitControls } from 'three-stdlib';
import { Canvas, useThree } from '@react-three/fiber';
import { Application } from '@splinetool/runtime';
import { ReactComponent as LogoC } from './images/logo-c.svg';
import { ReactComponent as MenuButton } from './images/menu-button.svg';
import { ReactComponent as RArrow } from './images/right-arrow-desktop.svg';

extend({ Canvas });


const SplineScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);
    app.load('https://prod.spline.design/dulgIWpUS02bwIc2/scene.splinecode');

    return () => {
      app.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

const Loading = () => {
  return <div>Loading...</div>;
};

function OrbitControls() {
    const { camera, gl } = useThree();
    const controls = useRef();
  
    useEffect(() => {
      controls.current = new StdlibOrbitControls(camera, gl.domElement);
      return () => controls.current.dispose();
    }, [camera, gl.domElement]);
  
    return null;
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
                <Canvas concurrent shadowMap>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={<Loading />}>
                    <SplineScene />
                </Suspense>
                <OrbitControls />
                </Canvas>
            </div>
            <div className='heading-2'>
                <span>We're launching</span>
                <div>
                    <span className='soon'>soon</span>
                    <div className='newsletter'>
                        <input className='newsletter-email-input' placeholder='your email goes here'></input>
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
                <a href="https://www.twitter.com/prometheus_HQ" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.instagram.com/prometheus_HQ" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.linkedin.com/company/prometheus-hq" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:hello@prometheustech.co" target="_blank" rel="noopener noreferrer">Email</a>
            </div>
        </footer>
      </section>
  );
};

export default Home;

 */

import React, { useState, useEffect, useRef, Suspense } from 'react';
// import Spline from '@splinetool/react-spline';
// import * as THREE from 'three';
// import { OrbitControls as StdlibOrbitControls } from 'three-stdlib';
import { Canvas, useThree } from '@react-three/fiber';
// import { Application } from '@splinetool/runtime';
import { ReactComponent as LogoC } from './images/logo-c.svg';
import { ReactComponent as MenuButton } from './images/menu-button.svg'; /* this is the open menu button */
import { ReactComponent as XButton } from './images/x-button.svg'; /* this is the close menu button */
import { ReactComponent as RArrow } from './images/right-arrow-desktop.svg';

/* const SplineScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);
    app.load('https://prod.spline.design/dulgIWpUS02bwIc2/scene.splinecode');

    return () => {
      app.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

const Loading = () => {
  return <div>Loading...</div>;
};

function OrbitControls() {
    const { camera, gl } = useThree();
    const controls = useRef();
  
    useEffect(() => {
      controls.current = new StdlibOrbitControls(camera, gl.domElement);
      return () => controls.current.dispose();
    }, [camera, gl.domElement]);
  
    return null;
  }; */

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
            <Canvas concurrent shadowMap>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {/* <Suspense fallback={<Loading />}> */}
                {/* <SplineScene /> */}
            {/* </Suspense> */}
            {/* <OrbitControls /> */}
            {/* <Spline scene="https://prod.spline.design/dulgIWpUS02bwIc2/scene.splinecode" /> */}
            </Canvas>
        </div>
        <div className='heading-2'>
                <span>We're launching</span>
                <div>
                    <span className='soon'>soon</span>
                    <div className='newsletter'>
                        <input className='newsletter-email-input' placeholder='your email goes here'></input>
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
                <a href="https://www.twitter.com/prometheus_HQ" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.instagram.com/prometheus_HQ" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.linkedin.com/company/prometheus-hq" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:hello@prometheustech.co" target="_blank" rel="noopener noreferrer">Email</a>
            </div>
        </footer>
    </section>
  );
};

// export default Home;


    /* useEffect(() => {
      const cursor = document.querySelector('.cursor');
      if (!cursor) return;
    
      const onMouseMove = (e) => {
        const updatePosition = () => {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
        };
        requestAnimationFrame(updatePosition);
      };
      document.addEventListener('mousemove', onMouseMove);
    
      document.addEventListener("mousemove", function (event) {
        const hoverElements = document.querySelectorAll(".hover-reverse-color");
        hoverElements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const inElement =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;
          if (inElement) {
            const xPos = event.clientX - rect.left;
            element.style.setProperty("--cursor-x", `${xPos}px`);
            element.style.setProperty("--before-width", `${xPos}px`);
            element.classList.add("cursor-hover");
          } else {
            element.style.removeProperty("--cursor-x");
            element.style.removeProperty("--before-width");
            element.classList.remove("cursor-hover");
          }
        });
      });      

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []); */
