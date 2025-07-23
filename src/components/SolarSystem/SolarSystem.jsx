import { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer";
import { useNavigate } from "react-router-dom";
import "./solarSystem.css";
import solTexture from "../../assets/planetas/solTexture.png";
import planetaRojo from "../../assets/planetas/planetaRojo.png";
import planetaAzul from "../../assets/planetas/planetaAzul.png";
import planetaPurple from "../../assets/planetas/planetaPurple.png";
import planetaVerde from "../../assets/planetas/planetaVerde.png";
import smokeCometa from "../../assets/planetas/smokeBlue2.png";

const SolarSystem = () => {
  const mountRef = useRef(null);
  const navigate = useNavigate();

  const planetsRef = useRef([]);
  const cometsRef = useRef([]);
  const cometGenerationActive = useRef(true);

  const sunRotationSpeed = 0.00005;
  const currentSunRotationSpeedRef = useRef(sunRotationSpeed);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    currentMount.appendChild(renderer.domElement);

    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(width, height);
    labelRenderer.domElement.style.position = "absolute";
    labelRenderer.domElement.style.top = "0px";
    labelRenderer.domElement.style.pointerEvents = "none";
    currentMount.appendChild(labelRenderer.domElement);

    scene.background = null;
    scene.add(new THREE.DirectionalLight(0xffffff, 4).position.set(0, 1, 1).normalize());
    scene.add(new THREE.AmbientLight(0x404040, 1.5));

    const loader = new THREE.TextureLoader();
    const textures = {
      planetaRojo: loader.load(planetaRojo),
      planetaAzul: loader.load(planetaAzul),
      planetaVerde: loader.load(planetaVerde),
      planetaPurple: loader.load(planetaPurple),
      sol: loader.load(solTexture),
      smoke: loader.load(smokeCometa),
    };

    const sunGeometry = new THREE.SphereGeometry(2, 128, 128);
    const sunMaterial = new THREE.MeshStandardMaterial({
      map: textures.sol,
      emissive: 0xffd200,
      emissiveIntensity: 1.5,
      roughness: 0.2,
      metalness: 0.5,
      emissiveMap: textures.sol,
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    const glowMaterials = [];
    [2.5, 3, 3.5, 4, 4.5].forEach((radius, i) => {
      const material = new THREE.MeshBasicMaterial({
        color: 0xffd200,
        transparent: true,
        opacity: [0.2, 0.15, 0.1, 0.05, 0.02][i],
        side: THREE.BackSide,
      });
      glowMaterials.push(material);
      const glowSphere = new THREE.Mesh(
        new THREE.SphereGeometry(radius, 128, 128),
        material
      );
      scene.add(glowSphere);
    });

    const planetConfigs = [
      { size: 0.3, distance: 5, texture: textures.planetaRojo, name: "Description", link: "/viewsdescription" },
      { size: 1, distance: 8, texture: textures.planetaAzul, name: "Projects", link: "/projects" },
      { size: 0.5, distance: 12, texture: textures.planetaVerde, name: "Contact", link: "/contacts" },
      { size: 0.7, distance: 16, texture: textures.planetaPurple, name: "Home", link: "/" },
    ];

    const planetGeometries = [];
    const planetMaterials = [];

    planetsRef.current = planetConfigs.map(({ size, distance, texture, name, link }) => {
      const geometry = new THREE.SphereGeometry(size, 32, 32);
      planetGeometries.push(geometry);

      const material = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.8,
        metalness: 0,
        emissive: new THREE.Color(0x222222),
        emissiveIntensity: 0.2
      });
      planetMaterials.push(material);

      planetMaterials.push(material);

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = distance;
      mesh.userData.link = link;

      const labelDiv = document.createElement("div");
      labelDiv.className = "planet-label";
      labelDiv.textContent = name;
      const labelObj = new CSS2DObject(labelDiv);
      labelObj.position.set(0, size + 0.5, 0);
      mesh.add(labelObj);

      scene.add(mesh);
      return { planet: mesh, distance, angle: Math.random() * Math.PI * 2 };
    });

    const cometGeometry = new THREE.SphereGeometry(0.15, 8, 8);
    const cometMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x446ede,
      emissiveIntensity: 1.5,
      roughness: 0.2,
      metalness: 0.5,
      transparent: true,
      opacity: 0.8,
    });

    const createComet = () => {
      if (!cometGenerationActive.current) return;

      const cometMesh = new THREE.Mesh(cometGeometry, cometMaterial.clone());
      cometMesh.position.set(
        Math.random() * 40 - 20,
        Math.random() * 20 - 10,
        Math.random() * 40 - 20
      );

      const tailParticles = Array.from({ length: 50 }, () => cometMesh.position.clone());
      const tailGeometry = new THREE.BufferGeometry().setFromPoints(tailParticles);
      const tailMaterial = new THREE.PointsMaterial({
        size: 0.1,
        map: textures.smoke,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
        vertexColors: false,
      });
      const tailMesh = new THREE.Points(tailGeometry, tailMaterial);

      scene.add(cometMesh);
      scene.add(tailMesh);

      const direction = new THREE.Vector3(
        Math.random() * 0.2 - 0.1,
        Math.random() * 0.2 - 0.1,
        Math.random() * 0.2 - 0.1
      ).normalize().multiplyScalar(0.1 + Math.random() * 0.1);

      cometsRef.current.push({
        comet: cometMesh,
        tail: tailMesh,
        tailParticles,
        tailGeometry,
        direction,
        opacity: 0.8,
      });
    };

    const cometInterval = setInterval(createComet, 3000);

    const handleScroll = (e) => {
      camera.position.z = Math.max(10, Math.min(50, camera.position.z - e.deltaY * 0.02));

      camera.rotation.x += e.deltaY * 0.00005;
      camera.rotation.y += e.deltaY * 0.00005;
      currentSunRotationSpeedRef.current += e.deltaY * 0.0000005;
      currentSunRotationSpeedRef.current = Math.max(0.00001, Math.min(0.0005, currentSunRotationSpeedRef.current)); // Clamp sun speed
    };

    const handleClick = (event) => {
      const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(planetsRef.current.map((p) => p.planet));
      if (intersects.length > 0) {
        const { link } = intersects[0].object.userData;
        if (link) navigate(link);
      }
    };

    const handleVisibilityChange = () => {
      cometGenerationActive.current = !document.hidden;
      if (!document.hidden) {
        if (!frameId) {
          animate();
        }
      }
    };

    const handleResize = () => {
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      labelRenderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("click", handleClick);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("resize", handleResize);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      sun.rotation.y += currentSunRotationSpeedRef.current;

      planetsRef.current.forEach((obj) => {
        obj.angle += 0.005;
        obj.planet.position.x = Math.cos(obj.angle) * obj.distance;
        obj.planet.position.z = Math.sin(obj.angle) * obj.distance;
      });

      cometsRef.current = cometsRef.current.filter((cometObj) => {
        cometObj.comet.position.add(cometObj.direction);

        for (let i = cometObj.tailParticles.length - 1; i > 0; i--) {
          cometObj.tailParticles[i].copy(cometObj.tailParticles[i - 1]);
        }
        cometObj.tailParticles[0].copy(cometObj.comet.position);
        cometObj.tailGeometry.setFromPoints(cometObj.tailParticles);

        cometObj.opacity -= 0.005;
        cometObj.comet.material.opacity = cometObj.opacity;
        cometObj.tail.material.opacity = cometObj.opacity * 0.8;

        if (cometObj.comet.position.length() > 50 || cometObj.opacity <= 0.01) {
          scene.remove(cometObj.comet);
          scene.remove(cometObj.tail);
          cometObj.comet.geometry.dispose();
          cometObj.comet.material.dispose();
          cometObj.tail.geometry.dispose();
          cometObj.tail.material.dispose();
          return false;
        }
        return true;
      });

      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      clearInterval(cometInterval);

      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("click", handleClick);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", handleResize);

      if (currentMount) {
        if (renderer.domElement.parentNode === currentMount) {
          currentMount.removeChild(renderer.domElement);
        }
        if (labelRenderer.domElement.parentNode === currentMount) {
          currentMount.removeChild(labelRenderer.domElement);
        }
      }

      scene.traverse((object) => {
        if (object.isMesh || object.isPoints) {
          object.geometry?.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material?.dispose();
          }
        }
      });

      sunGeometry.dispose();
      sunMaterial.dispose();
      glowMaterials.forEach(mat => mat.dispose());
      planetGeometries.forEach(geo => geo.dispose());
      planetMaterials.forEach(mat => mat.dispose());
      cometGeometry.dispose();
      cometMaterial.dispose();
      Object.values(textures).forEach(texture => texture.dispose());

      renderer.dispose();
      labelRenderer.domElement = null;
      console.log("SolarSystem component unmounted and resources disposed.");
    };
  }, [navigate]);

  return <div ref={mountRef} className="solar-system-container" />;
};

export default SolarSystem;