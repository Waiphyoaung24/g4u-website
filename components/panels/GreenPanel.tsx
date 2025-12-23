'use client';

export default function GreenPanel() {
  return (
    <section className="panel green">
      <div className="Grid Grid--gutters Grid--cols-2">
        <div className="Grid-cell">
          <div className="panel-card">
            <h3>Feature One</h3>
            <p>Premium quality products grown with sustainable practices.</p>
          </div>
        </div>
        <div className="Grid-cell">
          <div className="panel-card">
            <h3>Feature Two</h3>
            <p>Eco-friendly farming that respects the environment.</p>
          </div>
        </div>
      </div>
      <h2>1</h2>
    </section>
  );
}
