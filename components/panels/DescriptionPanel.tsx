'use client';

export default function DescriptionPanel() {
  return (
    <div className="panel description">
      <div className="panel-content">
        <h1>Layered pinning from bottom</h1>
        <p>A simple example where overlapping panels reveal from the bottom.</p>
        <div className="scroll-down">
          <div className="arrow"></div>
        </div>
      </div>
    </div>
  );
}
