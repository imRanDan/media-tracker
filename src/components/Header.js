// function Header() {
//   return (
//     <div className="header">
//       <img src="" alt="Media Tracker Logo" />
//       <Navbar />
//       </div>
//   );
// }

// function Navbar() {
//   return (
//     <nav cl
//   )
// }

import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // For optional hamburger menu
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        {/* ... other nav links */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
