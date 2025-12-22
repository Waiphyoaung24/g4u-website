import { Youtube, Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const footerLinks = ['About', 'Contact', 'Work with us', 'Careers', 'Cookie policy', 'Privacy policy'];

  return (
    <footer>
      <div>
        <Logo id="big-logo" />
        <div className="icons">
          <Youtube size={32} />
          <Facebook size={32} />
          <Instagram size={32} />
          <Twitter size={32} />
        </div>
      </div>
      <div className="text">
        <h6>Lorem Ipsum</h6>
        <ul>
          {footerLinks.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>
        <p>
          Orci porta non pulvinar neque laoreet. Justo laoreet sit amet cursus sit amet. Velit laoreet id donec
          ultrices tincidunt arcu non sodales neque. Ut faucibus pulvinar elementum integer enim. Suscipit adipiscing
          bibendum est ultricies. Urna molestie at elementum eu. Viverra ipsum nunc aliquet bibendum enim facilisis
          gravida neque convallis.
        </p>
        <p>&copy; 2025, Dignissim diam quis enim. All rights reserved.</p>
      </div>
    </footer>
  );
}
