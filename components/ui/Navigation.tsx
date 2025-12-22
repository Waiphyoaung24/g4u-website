import { Menu } from 'lucide-react';

interface NavigationProps {
  categories?: string[];
}

export default function Navigation({
  categories = ['fashion', 'beauty', 'bridal', 'relationships', 'culture', 'celebrity']
}: NavigationProps) {
  return (
    <nav>
      <div className="list">
        <ul>
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </div>
      <div className="menu">
        <span>
          <p className="subtitle">Subscribe</p>
        </span>
        <span>
          <Menu size={24} />
        </span>
      </div>
    </nav>
  );
}
