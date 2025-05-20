"use client"

import { useCallback, useEffect, useState } from "react"
import Particles from "react-particles"
import type { Container, Engine } from "tsparticles-engine"
import { loadSlim } from "tsparticles-slim"

export default function ParticleBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    if (container) {
      console.log("Particles container initialized:", container)
    }
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: ["#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#e91e63"],
            },
            shape: {
              type: "char",
              character: {
                value: "Z",
                font: "Arial",
                style: "bold",
                weight: "bold",
              },
            },
            opacity: {
              value: 0.8,
              random: true,
              animation: { // Thay anim thành animation
                enable: true,
                speed: 1,
                minimumValue: 0.4, // Thay opacity_min thành minimumValue
                sync: false,
              },
            },
            size: {
              value: 25, // Giữ nguyên kích thước chữ Z
              random: true,
              animation: { // Thay anim thành animation
                enable: true,
                speed: 2,
                minimumValue: 15, // Thay size_min thành minimumValue
                sync: false,
              },
            },
            links: { // Thay line_linked thành links
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              outMode: "out", // Thay out_mode thành outMode
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detectsOn: "canvas", // Thay detect_on thành detectsOn
            events: {
              onHover: { // Thay onhover thành onHover
                enable: true,
                mode: "grab",
              },
              onClick: { // Thay onclick thành onClick
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                links: { // Thay line_linked thành links
                  opacity: 0.8,
                },
              },
              push: {
                quantity: 4, // Thay particles_nb thành quantity
              },
            },
          },
          detectRetina: true, // Thay retina_detect thành detectRetina
          background: {
            color: "#0a0a29",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
    </div>
  )
}
