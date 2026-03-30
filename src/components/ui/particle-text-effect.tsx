"use client";

import { useEffect, useRef } from "react";

interface Vector2D {
  x: number;
  y: number;
}

class Particle {
  pos: Vector2D = { x: 0, y: 0 };
  vel: Vector2D = { x: 0, y: 0 };
  acc: Vector2D = { x: 0, y: 0 };
  target: Vector2D = { x: 0, y: 0 };

  closeEnoughTarget = 50;
  maxSpeed = 2.0;
  maxForce = 0.15;
  particleSize = 3;
  isKilled = false;

  startColor = { r: 251, g: 191, b: 36 }; // Gold colors
  targetColor = { r: 251, g: 191, b: 36 };
  colorWeight = 0;
  colorBlendRate = 0.02;

  move() {
    let proximityMult = 1;
    const distance = Math.sqrt(Math.pow(this.pos.x - this.target.x, 2) + Math.pow(this.pos.y - this.target.y, 2));

    if (distance < this.closeEnoughTarget) {
      proximityMult = distance / this.closeEnoughTarget;
    }

    const towardsTarget = {
      x: this.target.x - this.pos.x,
      y: this.target.y - this.pos.y,
    };

    const magnitude = Math.sqrt(towardsTarget.x * towardsTarget.x + towardsTarget.y * towardsTarget.y);
    if (magnitude > 0) {
      towardsTarget.x = (towardsTarget.x / magnitude) * this.maxSpeed * proximityMult;
      towardsTarget.y = (towardsTarget.y / magnitude) * this.maxSpeed * proximityMult;
    }

    const steer = {
      x: towardsTarget.x - this.vel.x,
      y: towardsTarget.y - this.vel.y,
    };

    const steerMagnitude = Math.sqrt(steer.x * steer.x + steer.y * steer.y);
    if (steerMagnitude > 0) {
      steer.x = (steer.x / steerMagnitude) * this.maxForce;
      steer.y = (steer.y / steerMagnitude) * this.maxForce;
    }

    this.acc.x += steer.x;
    this.acc.y += steer.y;

    this.vel.x += this.acc.x;
    this.vel.y += this.acc.y;
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    this.acc.x = 0;
    this.acc.y = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.colorWeight < 1.0) {
      this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1.0);
    }

    const currentColor = {
      r: Math.round(this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight),
      g: Math.round(this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight),
      b: Math.round(this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight),
    };

    ctx.fillStyle = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.particleSize / 2, 0, Math.PI * 2);
    ctx.fill();
  }

  kill(width: number, height: number) {
    if (!this.isKilled) {
      const angle = Math.random() * Math.PI * 2;
      const mag = (width + height) / 2;
      this.target.x = width / 2 + Math.cos(angle) * mag;
      this.target.y = height / 2 + Math.sin(angle) * mag;
      this.isKilled = true;
    }
  }
}

interface ParticleTextEffectProps {
  words: string[];
}

export function ParticleTextEffect({ words }: ParticleTextEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const frameCountRef = useRef(0);
  const wordIndexRef = useRef(0);

  const pixelSteps = 4;

  const nextWord = (word: string, canvas: HTMLCanvasElement) => {
    const offscreenCanvas = document.createElement("canvas");
    offscreenCanvas.width = canvas.width;
    offscreenCanvas.height = canvas.height;
    const offscreenCtx = offscreenCanvas.getContext("2d")!;

    // Using "Outfit" or "Inter" bold for premium feel
    offscreenCtx.fillStyle = "white";
    offscreenCtx.font = "black 120px sans-serif";
    offscreenCtx.textAlign = "center";
    offscreenCtx.textBaseline = "middle";
    offscreenCtx.fillText(word.toUpperCase(), canvas.width / 2, canvas.height / 2);

    const imageData = offscreenCtx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;

    const goldColor = { r: 251, g: 191, b: 36 }; // #fbbf24

    const particles = particlesRef.current;
    let particleIndex = 0;

    const coordsIndexes: number[] = [];
    for (let i = 0; i < pixels.length; i += pixelSteps * 4) {
      if (pixels[i + 3] > 128) {
        coordsIndexes.push(i);
      }
    }

    for (const pixelIndex of coordsIndexes) {
      const x = (pixelIndex / 4) % canvas.width;
      const y = Math.floor(pixelIndex / 4 / canvas.width);

      let particle: Particle;

      if (particleIndex < particles.length) {
        particle = particles[particleIndex];
        particle.isKilled = false;
        particleIndex++;
      } else {
        particle = new Particle();
        const angle = Math.random() * Math.PI * 2;
        const mag = (canvas.width + canvas.height) / 2;
        particle.pos.x = canvas.width / 2 + Math.cos(angle) * mag;
        particle.pos.y = canvas.height / 2 + Math.sin(angle) * mag;
        particle.maxSpeed = Math.random() * 4 + 2;
        particle.maxForce = particle.maxSpeed * 0.05;
        particles.push(particle);
        particleIndex++;
      }

      particle.targetColor = goldColor;
      particle.colorWeight = 0;
      particle.target.x = x;
      particle.target.y = y;
    }

    for (let i = particleIndex; i < particles.length; i++) {
      particles[i].kill(canvas.width, canvas.height);
    }
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    const particles = particlesRef.current;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];
      particle.move();
      particle.draw(ctx);

      if (particle.isKilled) {
        if (particle.pos.x < -100 || particle.pos.x > canvas.width + 100 || 
            particle.pos.y < -100 || particle.pos.y > canvas.height + 100) {
          particles.splice(i, 1);
        }
      }
    }

    frameCountRef.current++;
    if (frameCountRef.current % 240 === 0) {
      wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
      nextWord(words[wordIndexRef.current], canvas);
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = 1200;
    canvas.height = 400;

    nextWord(words[0], canvas);
    animate();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [words]);

  return (
    <div className="w-full flex flex-col items-center justify-center bg-transparent pointer-events-none select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-auto opacity-70"
        style={{ maxWidth: "100%", maxHeight: "300px" }}
      />
    </div>
  );
}
