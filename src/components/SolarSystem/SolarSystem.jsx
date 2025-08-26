import { useEffect, useRef, useCallback } from "react";
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
  const sunRotationSpeedRef = useRef(0.00005);
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());

  const handleScroll = useCallback((e) => {
    const camera = raycaster.current.camera;
    if (camera) {
      camera.position.z = Math.max(10, Math.min(50, camera.position.z - e.deltaY * 0.02));
      sunRotationSpeedRef.current = Math.max(0.00001, Math.min(0.0005, sunRotationSpeedRef.current + e.deltaY * 0.0000005));
    }
  }, []);

  const handleClick = useCallback((event) => {
    const camera = raycaster.current.camera;
    if (!camera) return;

    mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.current.setFromCamera(mouse.current, camera);

    const intersects = raycaster.current.intersectObjects(planetsRef.current.map((p) => p.planet));
    if (intersects.length > 0) {
      const { link } = intersects[0].object.userData;
      if (link) navigate(link);
    }
  }, [navigate]);

  const handleVisibilityChange = useCallback(() => {
    cometGenerationActive.current = !document.hidden;
  }, []);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 25;
    raycaster.current.camera = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(width, height);
    labelRenderer.domElement.style.position = "absolute";
    labelRenderer.domElement.style.top = "0px";
    labelRenderer.domElement.style.pointerEvents = "none";
    currentMount.appendChild(labelRenderer.domElement);

    scene.background = null;

    // Luces en los planetas
    scene.add(new THREE.DirectionalLight(0xffffff, 6).position.set(0, 1, 1).normalize());
    scene.add(new THREE.AmbientLight(0x404040, 2));

    const loader = new THREE.TextureLoader();
    const textures = {
      planetaRojo: loader.load(planetaRojo),
      planetaAzul: loader.load(planetaAzul),
      planetaVerde: loader.load(planetaVerde),
      planetaPurple: loader.load(planetaPurple),
      sol: loader.load(solTexture),
      smoke: loader.load(smokeCometa),
    };

    // Campo de estrellas
    const starGeometry = new THREE.BufferGeometry();
    const starVertices = [];
    for (let i = 0; i < 5000; i++) {
        const x = (Math.random() - 0.5) * 1000;
        const y = (Math.random() - 0.5) * 1000;
        const z = (Math.random() - 0.5) * 1000;
        starVertices.push(x, y, z);
    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5, transparent: true, opacity: 0.8 });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

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

    const glowMaterials = [2.5, 3, 3.5, 4, 4.5].map((radius, i) => {
      const material = new THREE.MeshBasicMaterial({
        color: 0xffd200,
        transparent: true,
        opacity: [0.2, 0.15, 0.1, 0.05, 0.02][i],
        side: THREE.BackSide,
      });
      const glowSphere = new THREE.Mesh(new THREE.SphereGeometry(radius, 128, 128), material);
      scene.add(glowSphere);
      return material;
    });

    const planetConfigs = [
      { size: 0.3, distance: 5, texture: textures.planetaRojo, name: "Description", link: "/viewsdescription" },
      { size: 1, distance: 8, texture: textures.planetaAzul, name: "Projects", link: "/projects" },
      { size: 0.5, distance: 12, texture: textures.planetaVerde, name: "Contact", link: "/contacts" },
      { size: 0.7, distance: 16, texture: textures.planetaPurple, name: "Home", link: "/" },
    ];

    planetsRef.current = planetConfigs.map(({ size, distance, texture, name, link }) => {
      const geometry = new THREE.SphereGeometry(size, 32, 32);
      const material = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.8,
        metalness: 0,
        emissive: new THREE.Color(0x222222),
        emissiveIntensity: 0.5,
      });
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
      return { planet: mesh, distance, angle: Math.random() * Math.PI * 2, material, geometry };
    });

    const cometGeometry = new THREE.SphereGeometry(0.15, 8, 8);
    // Material del núcleo del cometa mejorado
    const cometMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x446ede,
      emissiveIntensity: 1.8, // Mayor intensidad para un brillo más notable
      roughness: 0.2,
      metalness: 0.5,
      transparent: true,
      opacity: 0.9,
    });

    const createComet = () => {
      if (!cometGenerationActive.current) return;

      const cometMesh = new THREE.Mesh(cometGeometry, cometMaterial.clone());
      const tailParticles = Array.from({ length: 50 }, () => new THREE.Vector3());
      const tailGeometry = new THREE.BufferGeometry().setFromPoints(tailParticles);
      // Material de la cola del cometa mejorado
      const tailMaterial = new THREE.PointsMaterial({
        size: 0.15, // Aumentado el tamaño de las partículas
        map: textures.smoke,
        transparent: true,
        opacity: 0.3, // Menor opacidad para un efecto más difuso y sutil
        blending: THREE.AdditiveBlending,
      });
      const tailMesh = new THREE.Points(tailGeometry, tailMaterial);

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
        opacity: 0.9,
      });

      scene.add(cometMesh);
      scene.add(tailMesh);
    };

    const cometInterval = setInterval(createComet, 3000);

    const localHandleResize = () => {
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
    window.addEventListener("resize", localHandleResize);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      sun.rotation.y += sunRotationSpeedRef.current;

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
      window.removeEventListener("resize", localHandleResize);

      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
        currentMount.removeChild(labelRenderer.domElement);
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
      cometGeometry.dispose();
      cometMaterial.dispose();
      Object.values(textures).forEach(texture => texture.dispose());
      starGeometry.dispose();
      starMaterial.dispose();

      renderer.dispose();
      labelRenderer.domElement = null;
    };
  }, [navigate, handleScroll, handleClick, handleVisibilityChange]);

  return <div ref={mountRef} className="solar-system-container" />;
};

export default SolarSystem;