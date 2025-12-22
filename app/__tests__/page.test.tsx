import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home Page', () => {
  it('renders the HelloWorld component', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Hello, G4U!');
  });

  it('renders Get Started button with correct link', () => {
    render(<Home />);

    const getStartedLink = screen.getByRole('link', { name: /get started/i });
    expect(getStartedLink).toBeInTheDocument();
    expect(getStartedLink).toHaveAttribute('href', 'https://nextjs.org/docs');
    expect(getStartedLink).toHaveAttribute('target', '_blank');
    expect(getStartedLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders Learn More button with correct link', () => {
    render(<Home />);

    const learnMoreLink = screen.getByRole('link', { name: /learn more/i });
    expect(learnMoreLink).toBeInTheDocument();
    expect(learnMoreLink).toHaveAttribute('href', 'https://github.com');
    expect(learnMoreLink).toHaveAttribute('target', '_blank');
    expect(learnMoreLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has proper responsive layout classes', () => {
    const { container } = render(<Home />);

    const main = container.querySelector('main');
    expect(main).toHaveClass('flex', 'flex-col', 'items-center', 'justify-center');
  });

  it('renders with gradient background', () => {
    const { container } = render(<Home />);

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass('bg-gradient-to-br');
  });

  it('renders all CTA buttons', () => {
    render(<Home />);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });
});
