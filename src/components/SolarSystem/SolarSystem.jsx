import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import universoFondo from '../../assets/img/universo-blue-purple.png';
import "./solarSystem.css";

const SolarSystem = () => {
  const mountRef = useRef(null);
  const [cameraZ, setCameraZ] = useState(25); // Estado para controlar la distancia de la cámara
  const [cameraRotation, setCameraRotation] = useState({ x: 0, y: 0 }); // Estado para controlar la rotación de la cámara
  const [planetRotationSpeed, setPlanetRotationSpeed] = useState(0.005); // Velocidad de rotación de los planetas

  useEffect(() => {
    // Tamaño de la escena
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Escena, cámara y renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Cargar la textura de fondo solo una vez
    const textureLoader = new THREE.TextureLoader();
    const backgroundTexture = textureLoader.load(universoFondo);
    scene.background = backgroundTexture; // Asignar el fondo a la escena

    // Crear una luz direccional para iluminar los planetas
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 1, 1).normalize();
    scene.add(light);

    // Crear el Sol con un material más realista
    const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
    const sunMaterial = new THREE.MeshStandardMaterial({ color: 0xFDB813, emissive: 0xFDB813 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Crear planetas con materiales más realistas
    const planets = [
      { size: 0.3, distance: 5, color: 0x888888 },
      { size: 0.5, distance: 8, color: 0x0066FF },
      { size: 0.7, distance: 12, color: 0x00FF00 },
      { size: 1, distance: 16, color: 0xFF0000 },
    ];

    const planetMeshes = planets.map(({ size, distance, color }) => {
      const geometry = new THREE.SphereGeometry(size, 32, 32);
      const material = new THREE.MeshStandardMaterial({ color });
      const planet = new THREE.Mesh(geometry, material);
      planet.position.x = distance;
      scene.add(planet);
      return { planet, distance, angle: Math.random() * Math.PI * 2 };
    });

    // Posicionar la cámara
    camera.position.z = cameraZ;

    // Función de animación
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotar el sol
      sun.rotation.y += 0.01;

      // Orbitar los planetas alrededor del sol
      planetMeshes.forEach(({ planet, distance, angle }) => {
        angle += planetRotationSpeed; // Ajustamos la velocidad de rotación
        planet.position.x = Math.cos(angle) * distance;
        planet.position.z = Math.sin(angle) * distance;
      });

      // Actualizar la posición de la cámara directamente sin modificar el estado
      camera.position.z = cameraZ;

      // Rotar la cámara levemente en base al scroll
      camera.rotation.x = cameraRotation.x;
      camera.rotation.y = cameraRotation.y;

      // Renderizar la escena
      renderer.render(scene, camera);
    };

    animate();

    // Función de scroll para acercar o alejar la cámara y rotar los planetas
    const handleScroll = (event) => {
      const delta = event.deltaY;

      // Ajustar la posición de la cámara
      setCameraZ((prevCameraZ) => Math.max(10, prevCameraZ - delta * 0.05));

      // Incrementar un pequeño giro de la cámara en el eje X o Y con el scroll
      setCameraRotation((prevRotation) => ({
        x: prevRotation.x + delta * 0.001, // Rota ligeramente en el eje X
        y: prevRotation.y + delta * 0.001, // Rota ligeramente en el eje Y
      }));

      // Ajustar la velocidad de rotación de los planetas con el scroll
      setPlanetRotationSpeed((prevSpeed) => Math.max(0.001, prevSpeed + delta * 0.0001));
    };

    window.addEventListener("wheel", handleScroll);

    // Limpiar recursos cuando el componente se desmonta
    return () => {
      window.removeEventListener("wheel", handleScroll);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [cameraZ, cameraRotation, planetRotationSpeed]);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }}></div>;
};

export default SolarSystem;
