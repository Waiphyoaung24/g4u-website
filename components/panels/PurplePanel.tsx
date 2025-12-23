'use client';

export default function PurplePanel() {
  return (
    <section className="panel purple">
      <div className="Grid Grid--gutters Grid--cols-4">
        <div className="Grid-cell">
          <div className="panel-card">
            <h3>Shop</h3>
            <p>Browse our collection.</p>
          </div>
        </div>
        <div className="Grid-cell">
          <div className="panel-card">
            <h3>Learn</h3>
            <p>Educational resources.</p>
          </div>
        </div>
        <div className="Grid-cell">
          <div className="panel-card">
            <h3>Connect</h3>
            <p>Join our community.</p>
          </div>
        </div>
        <div className="Grid-cell">
          <div className="panel-card">
            <h3>Support</h3>
            <p>Get help anytime.</p>
          </div>
        </div>
      </div>
      <h2>3</h2>
    </section>
  );
}
