export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep cyber dark base */}
      <div className="absolute inset-0 bg-[#050510]" />

      {/* Top primary blue radial glow */}
      <div
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-25 blur-[140px]"
        style={{
          background: "radial-gradient(circle, #2c67ed 0%, #1e3a8a 50%, transparent 75%)",
        }}
      />

      {/* Secondary cyan ambient accent left */}
      <div
        className="absolute top-[35%] -left-[200px] w-[600px] h-[600px] rounded-full opacity-15 blur-[130px]"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, #0369a1 60%, transparent 80%)",
        }}
      />

      {/* Secondary purple/violet accent right */}
      <div
        className="absolute top-[65%] -right-[200px] w-[650px] h-[650px] rounded-full opacity-15 blur-[140px]"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, #4c1d95 60%, transparent 80%)",
        }}
      />

      {/* Bottom subtle blue glow */}
      <div
        className="absolute -bottom-[150px] left-1/3 w-[700px] h-[500px] rounded-full opacity-20 blur-[130px]"
        style={{
          background: "radial-gradient(circle, #1d4ed8 0%, transparent 70%)",
        }}
      />

      {/* Subtle modern cyber grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 50% 50%, black 40%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 40%, transparent 95%)",
        }}
      />

      {/* Very faint noise/grain effect */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />
    </div>
  );
}
