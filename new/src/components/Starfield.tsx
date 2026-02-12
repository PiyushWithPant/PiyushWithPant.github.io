"use client";
import React from 'react';

export default function Starfield() {
  return (
    <div className="star-container">
        <div className="star-layer" style={{ '--speed': '4s', '--opacity': '0.8' } as any} />
        <div className="star-layer" style={{ '--speed': '8s', '--opacity': '0.6' } as any} />
        <div className="star-layer" style={{ '--speed': '12s', '--opacity': '0.4' } as any} />
        <div className="warp-glow" />
    </div>
  );
}