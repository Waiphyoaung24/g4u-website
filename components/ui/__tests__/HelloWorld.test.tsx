import { render, screen } from '@testing-library/react';
import HelloWorld from '../HelloWorld';

describe('HelloWorld Component', () => {
  it('renders with default name "World"', () => {
    render(<HelloWorld />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Hello, World!');
  });

  it('renders with custom name', () => {
    render(<HelloWorld name="G4U" />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Hello, G4U!');
  });

  it('displays welcome message', () => {
    render(<HelloWorld />);

    const welcomeText = screen.getByText('Welcome to your Next.js landing page');
    expect(welcomeText).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const customClass = 'custom-test-class';
    const { container } = render(<HelloWorld className={customClass} />);

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass(customClass);
  });

  it('has correct heading hierarchy', () => {
    render(<HelloWorld />);

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toBeInTheDocument();
  });

  it('applies dark mode styles correctly', () => {
    render(<HelloWorld />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('dark:text-zinc-50');
  });

  it('renders paragraph with proper styling', () => {
    render(<HelloWorld />);

    const paragraph = screen.getByText('Welcome to your Next.js landing page');
    expect(paragraph).toHaveClass('text-lg', 'text-zinc-600', 'dark:text-zinc-400');
  });
});
