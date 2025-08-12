import React, { useEffect, useRef } from "react";
import "./OrbitAnimation.css"; // We will create this file next
import logo from "../../assets/Logo/logo 1.png";
const OrbitAnimation = () => {
  // Data for the planets to avoid repetition in JSX
  const planetsData = [
    { id: 1, text: "Real Time<br>Support" },
    { id: 2, text: "24/7<br>Support" },
    { id: 3, text: "Expert<br>Developers" },
    { id: 4, text: "Quality<br>Assurance" },
    { id: 5, text: "Project<br>Management" },
    { id: 6, text: "Timely<br>Delivery" },
  ];

  const containerRef = useRef(null);
  // useRef to hold an array of refs for each planet
  const planetRefs = useRef([]);
  // useRef for the animation angle to persist value without re-rendering
  const angleRef = useRef(0);
  // useRef to hold the animation frame ID for cleanup
  const animationFrameId = useRef(null);

  useEffect(() => {
    const animatePlanets = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.width / 2;
      const centerY = containerRect.height / 2;
      const radius = containerRect.width * 0.35;

      planetRefs.current.forEach((planet, i) => {
        if (!planet) return;

        // Calculate the angle for each planet
        const theta =
          angleRef.current + (i * (Math.PI * 2)) / planetsData.length;

        // Get planet dimensions to center it on the orbit path
        const planetRect = planet.getBoundingClientRect();
        const planetWidth = planetRect.width;
        const planetHeight = planetRect.height;

        // Calculate position using trigonometry
        const x = centerX + radius * Math.cos(theta) - planetWidth / 2;
        const y = centerY + radius * Math.sin(theta) - planetHeight / 2;

        planet.style.left = `${x}px`;
        planet.style.top = `${y}px`;
      });

      // Increment angle for the next frame
      angleRef.current += 0.005;

      // Request the next animation frame
      animationFrameId.current = requestAnimationFrame(animatePlanets);
    };

    // Start the animation
    animationFrameId.current = requestAnimationFrame(animatePlanets);

    // Cleanup function to cancel animation when the component unmounts
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [planetsData.length]); // Re-run effect if the number of planets changes

  return (
    <div ref={containerRef} className="orbit-container">
      <div className="orbit-path"></div>
      <div className="center-logo">
        <img src={logo} alt="Logo" />
      </div>

      {planetsData.map((planet, i) => (
        <div
          key={planet.id}
          // Assign the ref to the corresponding element in the ref array
          ref={(el) => (planetRefs.current[i] = el)}
          className="planet"
        >
          {/* Using dangerouslySetInnerHTML to render the <br> tag from data */}
          <span dangerouslySetInnerHTML={{ __html: planet.text }} />
          <div className="check">✔</div>
        </div>
      ))}
    </div>
  );
};

export default OrbitAnimation;
