import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";
import "./solarSystem.css";
import solTexture from "../../assets/planetas/solTexture.png"; // Asegúrate de tener la ruta correcta

const SolarSystem = () => {
  const mountRef = useRef(null);
  const [cameraZ, setCameraZ] = useState(25);
  const [cameraRotation, setCameraRotation] = useState({ x: 0, y: 0 });
  const [sunRotationSpeed, setSunRotationSpeed] = useState(0.00005);
  const navigate = useNavigate();
  const planetsRef = useRef([]);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);
    scene.background = null;  // Fondo transparente

    // Luz direccional para simular la luz del Sol
    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(0, 1, 1).normalize();
    scene.add(light);

    // Luz ambiental suave
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5); // Luz suave para detalles y sombras sutiles
    scene.add(ambientLight);

    // Crear el Sol con MeshStandardMaterial para poder usar 'emissive'
    const sunGeometry = new THREE.SphereGeometry(2, 128, 128); // Mayor resolución para que la textura se vea mejor
    const sunTextureMap = new THREE.TextureLoader().load(solTexture); // Cargar la textura del Sol

    const sunMaterial = new THREE.MeshStandardMaterial({
      map: sunTextureMap,  // Textura del sol
      emissive: 0xffd200, // Resplandor amarillo
      emissiveIntensity: 1.5, // Intensidad del resplandor
      roughness: 0.2, // Textura ligeramente rugosa
      metalness: 0.5, // Un toque metálico
      emissiveMap: sunTextureMap,  // Asignar la misma textura al resplandor
    });

    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Añadir efecto de resplandor (Glow) al Sol
    const glowGeometry = new THREE.SphereGeometry(2.5, 128, 128); // Más grande que la esfera del Sol
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffd200,
      transparent: true,
      opacity: 0.3, // Hacerlo más transparente
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);

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

    // Función de animación mejorada
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotación del Sol
      sun.rotation.y += sunRotationSpeed;

      // Movimiento de los planetas (órbitas)
      planetsRef.current.forEach(({ planet, distance, angle }, index) => {
        angle += 0.0005;
        planet.position.x = Math.cos(angle) * distance;
        planet.position.z = Math.sin(angle) * distance;
        planetsRef.current[index].angle = angle;
      });

      // Actualización de la cámara
      camera.position.z = cameraZ;
      camera.rotation.x = cameraRotation.x;
      camera.rotation.y = cameraRotation.y;

      // Renderizado de la escena
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

    // Agregar eventos
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("click", onMouseClick);

    // Limpieza de eventos al desmontar
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("click", onMouseClick);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [cameraZ, cameraRotation, sunRotationSpeed, navigate]);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }}></div>;
};

export default SolarSystem;
