import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";
import "./solarSystem.css";

const SolarSystem = () => {
  const mountRef = useRef(null);
  const [cameraZ, setCameraZ] = useState(25);
  const [cameraRotation, setCameraRotation] = useState({ x: 0, y: 0 });
  const [sunRotationSpeed, setSunRotationSpeed] = useState(0.00005);
  const navigate = useNavigate();
  const planetsRef = useRef([]);

  // Crear la escena, cámara, renderizador, planetas y sol
  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);
    scene.background = null;

    // Luz direccional
    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(0, 1, 1).normalize();
    scene.add(light);

    // Sol
    const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
    const sunMaterial = new THREE.MeshStandardMaterial({ color: '#873600', emissive: 0xffd200 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Planetas
    const planets = [
      { size: 0.3, distance: 5, color: '#9b59b6', link: '/viewsdescription' },
      { size: 0.5, distance: 8, color: '#0066FF', link: '/projects' },
      { size: 0.7, distance: 12, color: '#00FF00', link: '/contacts' },
      { size: 1, distance: 16, color: '#FF0000', link: '/' },
    ];

    planetsRef.current = planets.map(({ size, distance, color, link }) => {
      const geometry = new THREE.SphereGeometry(size, 32, 32);
      const material = new THREE.MeshStandardMaterial({ color });
      const planet = new THREE.Mesh(geometry, material);
      planet.position.x = distance;
      planet.userData = { link };
      scene.add(planet);
      return { planet, distance, angle: Math.random() * Math.PI * 2 };
    });

    camera.position.z = cameraZ;

    // Función de animación
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotación del Sol
      sun.rotation.y += sunRotationSpeed;

      // Movimiento planetas
      planetsRef.current.forEach(({ planet, distance, angle }, index) => {
        angle += 0.001;
        planet.position.x = Math.cos(angle) * distance;
        planet.position.z = Math.sin(angle) * distance;
        planetsRef.current[index].angle = angle;
      });

      // Actualizar cámara
      camera.position.z = cameraZ;
      camera.rotation.x = cameraRotation.x;
      camera.rotation.y = cameraRotation.y;

      // Renderizar escena
      renderer.render(scene, camera);
    };

    animate();

    // Manejo del scroll
    const handleScroll = (event) => {
      const delta = event.deltaY;
      setCameraZ((prevCameraZ) => Math.max(10, prevCameraZ - delta * 0.02));
      setCameraRotation((prevRotation) => ({
        x: prevRotation.x + delta * 0.0005,
        y: prevRotation.y + delta * 0.0005,
      }));
    };

    // Manejo de clics sobre los planetas
    const onMouseClick = (event) => {
      const mouse = new THREE.Vector2();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(planetsRef.current.map(p => p.planet));

      if (intersects.length > 0) {
        const planet = intersects[0].object;
        if (planet.userData.link) {
          navigate(planet.userData.link);
        }
      }
    };

    // Agregar los eventos
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("click", onMouseClick);

    // Limpieza de los eventos al desmontar el componente
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("click", onMouseClick);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [cameraZ, cameraRotation, sunRotationSpeed, navigate]);

  // Actualizar el tamaño del renderizado al cambiar el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      const renderer = mountRef.current.querySelector('canvas').__renderer;
      renderer.setSize(width, height);
      const camera = mountRef.current.querySelector('canvas').__camera;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }}></div>;
};

export default SolarSystem;
