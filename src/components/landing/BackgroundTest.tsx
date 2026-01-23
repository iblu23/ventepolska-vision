import React from "react";

export function BackgroundTest() {
  return (
    <div className="min-h-screen bg-sky-50 p-8">
      <h1 className="text-2xl font-bold mb-8">Background Test</h1>
      
      {/* Test mesh gradient */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Mesh Gradient</h2>
        <div className="h-48 rounded-lg border border-teal-200/50 relative overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(at 40% 20%, #14b8a6 0px, transparent 50%),
                radial-gradient(at 80% 0%, #06b6d4 0px, transparent 50%),
                radial-gradient(at 40% 80%, #0d9488 0px, transparent 50%)
              `
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-white/80 px-3 py-1 rounded text-sm font-medium">Mesh Gradient</span>
          </div>
        </div>
      </div>

      {/* Test floating orbs */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Floating Orbs</h2>
        <div className="h-48 rounded-lg border border-teal-200/50 relative overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 20% 50%, #14b8a6/20 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, #06b6d4/15 0%, transparent 50%),
                radial-gradient(circle at 40% 20%, #0d9488/10 0%, transparent 50%)
              `
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-white/80 px-3 py-1 rounded text-sm font-medium">Floating Orbs</span>
          </div>
        </div>
      </div>

      {/* Test CSS variables */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">CSS Variables Test</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-32 rounded border border-teal-200/50 bg-mesh relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white/80 px-2 py-1 rounded text-xs">bg-mesh</span>
            </div>
          </div>
          <div className="h-32 rounded border border-teal-200/50 bg-orbs relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white/80 px-2 py-1 rounded text-xs">bg-orbs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
