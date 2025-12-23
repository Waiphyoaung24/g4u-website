'use client';

export default function SolidPanel() {
  return (
    <section className="panel solid">
      <div className="Grid Grid--gutters Grid--cols-3">
        <div className="Grid-cell">
          <div className="panel-card">
            <h3>Quality</h3>
            <p>Hand-selected premium products.</p>
          </div>
        </div>
        <div className="Grid-cell">
          <div className="panel-card">
            <h3>Trust</h3>
            <p>Transparent sourcing and testing.</p>
          </div>
        </div>
        <div className="Grid-cell">
          <div className="panel-card">
            <h3>Service</h3>
            <p>Dedicated customer support.</p>
          </div>
        </div>
      </div>
      <h2>2</h2>
    </section>
  );
}
