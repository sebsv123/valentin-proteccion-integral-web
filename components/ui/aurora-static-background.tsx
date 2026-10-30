/** Frozen Aurora composition. No timers, animation library or per-frame work. */
export function AuroraStaticBackground() {
  return <div aria-hidden="true" data-aurora-static className="fixed inset-0 -z-10 overflow-hidden bg-[var(--bg)]">
    <div className="absolute inset-0 md:hidden" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 50%, #f0f9ff 100%)' }} />
    <div className="absolute inset-0 hidden md:block">
      <div className="absolute -left-[20%] -top-[20%] h-[140%] w-[140%] opacity-20 blur-[120px]" style={{ background: 'radial-gradient(circle at center, var(--blue) 0%, transparent 60%)' }} />
      <div className="absolute -right-[20%] -bottom-[20%] h-[140%] w-[140%] opacity-20 blur-[120px]" style={{ background: 'radial-gradient(circle at center, var(--green) 0%, transparent 60%)', transform: 'scale(1.2)' }} />
    </div>
  </div>;
}
