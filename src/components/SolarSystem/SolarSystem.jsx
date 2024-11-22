import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";
import { useNavigate } from "react-router-dom";
import "./solarSystem.css";
import solTexture from "../../assets/planetas/solTexture.png";
import planetaRojo from "../../assets/planetas/planetaRojo.png";
import planetaAzul from "../../assets/planetas/planetaAzul.png";
import planetaPurple from "../../assets/planetas/planetaPurple.png";
import planetaVerde from "../../assets/planetas/planetaVerde.png";

const SolarSystem = () => {
  const mountRef = useRef(null);
  const [cameraZ, setCameraZ] = useState(25);
  const [cameraRotation, setCameraRotation] = useState({ x: 0, y: 0 });
  const [sunRotationSpeed, setSunRotationSpeed] = useState(0.00005);
  const navigate = useNavigate();
  const planetsRef = useRef([]);

  const sunRotationSpeedRef = useRef(sunRotationSpeed);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Crear CSS2DRenderer para etiquetas
    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(width, height);
    labelRenderer.domElement.style.position = "absolute";
    labelRenderer.domElement.style.top = "0px";
    mountRef.current.appendChild(labelRenderer.domElement);

    scene.background = null;

    // Luz direccional y ambiental
    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(0, 1, 1).normalize();
    scene.add(light);
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    // Sol con material emissivo
    const sunGeometry = new THREE.SphereGeometry(2, 128, 128);
    const sunTextureMap = new THREE.TextureLoader().load(solTexture);
    const sunMaterial = new THREE.MeshStandardMaterial({
      map: sunTextureMap,
      emissive: 0xffd200,
      emissiveIntensity: 1.5,
      roughness: 0.2,
      metalness: 0.5,
      emissiveMap: sunTextureMap,
    });

    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Resplandor del Sol
    const glowRadius = [2.5, 3, 3.5, 4, 4.5];
    const glowOpacity = [0.2, 0.15, 0.1, 0.05, 0.02];

    glowRadius.forEach((radius, index) => {
      const glowGeometry = new THREE.SphereGeometry(radius, 128, 128);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0xffd200,
        transparent: true,
        opacity: glowOpacity[index],
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      scene.add(glow);
    });

    // Cargar las texturas de los planetas
    const textures = {
      planetaRojo: new THREE.TextureLoader().load(planetaRojo),
      planetaAzul: new THREE.TextureLoader().load(planetaAzul),
      planetaPurple: new THREE.TextureLoader().load(planetaPurple),
      planetaVerde: new THREE.TextureLoader().load(planetaVerde),
    };

    const planets = [
      { size: 0.3, distance: 5, texture: textures.planetaRojo, name: "Descripcion", link: '/viewsdescription' },
      { size: 1, distance: 8, texture: textures.planetaAzul, name: "Proyectos", link: '/projects' },
      { size: 0.5, distance: 12, texture: textures.planetaVerde, name: "Contacto", link: '/contacts' },
      { size: 0.7, distance: 16, texture: textures.planetaPurple, name: "Home", link: '/' },
    ];

    planetsRef.current = planets.map(({ size, distance, texture, name, link }) => {
      const geometry = new THREE.SphereGeometry(size, 32, 32);
      const material = new THREE.MeshStandardMaterial({ map: texture });
      const planet = new THREE.Mesh(geometry, material);
      planet.position.x = distance;
      planet.userData = { link };

      // Crear una etiqueta con el nombre del planeta
      const label = document.createElement("div");
      label.className = "planet-label";
      label.textContent = name;
      label.style.color = "white";
      label.style.fontSize = "12px";
      const labelObject = new CSS2DObject(label);
      labelObject.position.set(0, 0, 0);
      planet.add(labelObject);

      scene.add(planet);
      return { planet, distance, angle: Math.random() * Math.PI * 2 };
    });

    camera.position.z = cameraZ;

    // Interpolación suave de la cámara y del Sol
    let targetCameraZ = cameraZ;
    let targetCameraRotation = { ...cameraRotation };
    let targetSunRotationSpeed = sunRotationSpeed;

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotación suave del Sol
      sun.rotation.y += sunRotationSpeedRef.current;

      // Movimiento orbital suave de los planetas
      planetsRef.current.forEach(({ planet, distance, angle }, index) => {
        angle += 0.0005;
        planet.position.x = Math.cos(angle) * distance;
        planet.position.z = Math.sin(angle) * distance;
        planetsRef.current[index].angle = angle;
      });

      // Suavizado de la posición de la cámara con Lerp
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetCameraZ, 0.05);
      camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, targetCameraRotation.x, 0.05);
      camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, targetCameraRotation.y, 0.05);

      // Renderizado
      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
    };

    animate();

    const handleScroll = (event) => {
      const delta = event.deltaY;

      // Suavizado de la velocidad de rotación del Sol
      targetSunRotationSpeed = sunRotationSpeed + delta * 0.0000005;
      sunRotationSpeedRef.current = THREE.MathUtils.lerp(sunRotationSpeedRef.current, targetSunRotationSpeed, 0.1);

      // Suavizado de la distancia de la cámara
      targetCameraZ = Math.max(10, targetCameraZ - delta * 0.02);

      // Suavizado de la rotación de la cámara
      targetCameraRotation = {
        x: cameraRotation.x + delta * 0.0005,
        y: cameraRotation.y + delta * 0.0005,
      };
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

    // Limpieza de eventos
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("click", onMouseClick);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
        mountRef.current.removeChild(labelRenderer.domElement);
      }
    };
  }, [cameraZ, cameraRotation, sunRotationSpeed, navigate]);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }}></div>;
};

export default SolarSystem;
