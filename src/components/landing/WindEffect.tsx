'use client';

import { useEffect, useRef } from 'react';

const WindEffect = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Wind particles
    class WindParticle {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      angle: number;
      thickness: number;
      waveAmount: number;
      waveSpeed: number;
      time: number;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 80 + 20;
        this.speed = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.angle = Math.random() * 0.2 - 0.1; // Slight angle variation
        this.thickness = Math.random() * 2 + 0.5;
        this.waveAmount = Math.random() * 30 + 10;
        this.waveSpeed = Math.random() * 0.02 + 0.01;
        this.time = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.speed;
        this.time += this.waveSpeed;
        
        // Add wave motion
        this.y += Math.sin(this.time) * 0.5;

        // Reset particle when it goes off screen
        if (this.x > canvas.width + this.length) {
          this.x = -this.length;
          this.y = Math.random() * canvas.height;
        }
      }

      draw() {
        ctx.save();
        
        // Calculate wave position
        const waveY = this.y + Math.sin(this.time) * this.waveAmount;
        
        // Create gradient for the wind line
        const gradient = ctx.createLinearGradient(
          this.x, waveY, 
          this.x + this.length, waveY
        );
        gradient.addColorStop(0, `rgba(20, 184, 166, 0)`);
        gradient.addColorStop(0.5, `rgba(20, 184, 166, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(20, 184, 166, 0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.thickness;
        ctx.lineCap = 'round';
        
        ctx.beginPath();
        ctx.moveTo(this.x, waveY);
        
        // Draw curved wind line
        const controlX = this.x + this.length / 2;
        const controlY = waveY + Math.sin(this.time) * 20;
        ctx.quadraticCurveTo(controlX, controlY, this.x + this.length, waveY);
        
        ctx.stroke();
        ctx.restore();
      }
    }

    // Create wind particles
    const particles = [];
    const particleCount = window.innerWidth < 768 ? 8 : 15; // Reduce particles on mobile
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new WindParticle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default WindEffect;
