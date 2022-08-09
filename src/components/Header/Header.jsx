import { Box, Nav, Link } from './Header.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const Header = () => {
  return (
    <Box>
      <Nav>
        {navItems.map(({ href, text }) => (
          <Link to={href} key={href}>
            {text}
          </Link>
        ))}
      </Nav>
    </Box>
  );
};
