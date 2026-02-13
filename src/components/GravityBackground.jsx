import React, { useEffect, useRef } from 'react';

const GravityBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        const particleCount = 400; // Increased count

        let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        let focalPoint = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

        const handleMouseMove = (e) => {
            // Only update the target focal point if mouse is outside the navbar
            if (e.clientY >= 120) {
                mouse.x = e.clientX;
                mouse.y = e.clientY;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        class Sparkle {
            constructor() {
                this.init();
            }

            init() {
                this.rad = Math.random() * Math.PI * 2;
                // baseRadius increased to prevent getting too close (approx 6cm/220px)
                this.baseRadius = 220 + Math.random() * 200;
                this.size = 3 + Math.random() * 4; // 3-7px
                this.speed = 0.002 + Math.random() * 0.003;
                this.angle = 0;
                this.history = [];
                // Particle color: Premium Orange (#ff4500)
                this.color = '255, 69, 0';
                this.opacity = Math.random() * 0.5 + 0.3;
            }

            update(beat) {
                // "Beat" effect: Expand/Contract radius
                // beatAmplitude increased to 0.5 to move "more distance" as requested
                const currentRadius = this.baseRadius + (this.baseRadius * 0.5 * beat);

                // Use the smoothed focalPoint instead of raw mouse coords
                this.x = focalPoint.x + Math.cos(this.rad) * currentRadius;
                this.y = focalPoint.y + Math.sin(this.rad) * currentRadius;

                this.rad += this.speed;

                // Trail effect
                /*
                this.history.push({ x: this.x, y: this.y });
                if (this.history.length > 5) {
                    this.history.shift();
                }
                */
            }

            draw(ctx) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
                ctx.shadowBlur = 10;
                ctx.shadowColor = `rgba(${this.color}, 0.8)`;
                ctx.fill();
            }
        }

        const initPoints = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Sparkle());
            }
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initPoints(); // Re-init to ensure coverage if needed, or just let them loop
        };

        window.addEventListener('resize', resize);
        resize();

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Smooth the focal point movement (LERP)
            // This prevents "snapping" and keeps the movement liquid
            focalPoint.x += (mouse.x - focalPoint.x) * 0.05;
            focalPoint.y += (mouse.y - focalPoint.y) * 0.05;

            // Beat Logic: Slow breathe
            // beatFrequency 0.002
            const beat = Math.sin(Date.now() * 0.002);

            particles.forEach(p => {
                p.update(beat);
                p.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="gravity-background"
            style={{
                position: 'absolute', // Changed from fixed to absolute to stay in container
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0 // Behind content but visible
            }}
        />
    );
};

export default GravityBackground;