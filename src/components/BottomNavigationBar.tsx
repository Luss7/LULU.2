// BottomNavigationBar.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';

interface Styles {
  [key: string]: React.CSSProperties;
}

// Style pour la barre de navigation en bas
const styles: Styles = {
  bottomNav: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
};

function BottomNavigationBar() {
  const navigate = useNavigate(); // Hook de navigation

  return (
    <div style={styles.bottomNav}>
      <BottomNavigation
        value={window.location.pathname} // Utiliser le chemin actuel comme valeur
        onChange={(event, newValue) => {
          navigate(newValue); // Naviguer vers le nouvel itinéraire
        }}
        showLabels
      >
        <BottomNavigationAction label="Accueil" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favoris" value="/favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Réglages" value="/settings" icon={<SettingsIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default BottomNavigationBar;
