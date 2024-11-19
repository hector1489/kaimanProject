import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";
import "./solarSystem.css";

const SolarSystem = () => {
  const mountRef = useRef(null);
  const [cameraZ, setCameraZ] = useState(25);
  const [cameraRotation, setCameraRotation] = useState({ x: 0, y: 0 });
  const [planetRotationSpeed, setPlanetRotationSpeed] = useState(0.001);
  const [sunRotationSpeed, setSunRotationSpeed] = useState(0.00005);
  const navigate = useNavigate();
  

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Crear la escena, cámara y renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Configurar el fondo de la escena como transparente
    scene.background = null;

    // Crear una luz direccional para iluminar los planetas
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 1, 1).normalize();
    scene.add(light);

    // Crear el Sol
    const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
    const sunMaterial = new THREE.MeshStandardMaterial({ color: '#873600', emissive: 0xFDB813 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Definir los planetas y sus enlaces
    const planets = [
      { size: 0.3, distance: 5, color: '#9b59b6', link: '/viewsdescription' },
      { size: 0.5, distance: 8, color: '#0066FF', link: '/projects' },
      { size: 0.7, distance: 12, color: '#00FF00', link: '/contacts' },
      { size: 1, distance: 16, color: '#FF0000', link: '/' },
    ];

    // Crear los planetas
    const planetMeshes = planets.map(({ size, distance, color, link }) => {
      const geometry = new THREE.SphereGeometry(size, 32, 32);
      const material = new THREE.MeshStandardMaterial({ color });
      const planet = new THREE.Mesh(geometry, material);
      planet.position.x = distance;
      planet.userData = { link };
      scene.add(planet);
      return { planet, distance, angle: Math.random() * Math.PI * 2 };
    });

    // Raycaster y mouse para detección de clics en los planetas
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    camera.position.z = cameraZ;

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotar el Sol lentamente
      sun.rotation.y += sunRotationSpeed; // Ajustamos la velocidad de rotación del Sol

      // Rotar los planetas lentamente alrededor del Sol
      planetMeshes.forEach(({ planet, distance, angle }) => {
        angle += planetRotationSpeed; // Ajustamos la velocidad de rotación de los planetas
        planet.position.x = Math.cos(angle) * distance;
        planet.position.z = Math.sin(angle) * distance;
      });

      // Actualizar la posición de la cámara
      camera.position.z = cameraZ;
      camera.rotation.x = cameraRotation.x;
      camera.rotation.y = cameraRotation.y;

      // Renderizar la escena
      renderer.render(scene, camera);
    };

    animate();

    // Manejar el scroll para acercar o alejar la cámara y rotar los planetas
    const handleScroll = (event) => {
      const delta = event.deltaY;

      // Reducir el factor de cambio
      setCameraZ((prevCameraZ) => Math.max(10, prevCameraZ - delta * 0.02));
      setCameraRotation((prevRotation) => ({
        x: prevRotation.x + delta * 0.0005,
        y: prevRotation.y + delta * 0.0005,
      }));
      setPlanetRotationSpeed((prevSpeed) => Math.max(0.001, Math.min(0.01, prevSpeed + delta * 0.0005)));
    };

    // Manejar los clics para navegar a través de los enlaces
    const onMouseClick = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(planetMeshes.map(p => p.planet));

      if (intersects.length > 0) {
        const planet = intersects[0].object;
        if (planet.userData.link) {
          navigate(planet.userData.link);
        }
      }
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("click", onMouseClick);

    // Limpiar los recursos cuando el componente se desmonta
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("click", onMouseClick);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [cameraZ, cameraRotation, planetRotationSpeed, sunRotationSpeed, navigate]);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }}></div>;
};

export default SolarSystem;
