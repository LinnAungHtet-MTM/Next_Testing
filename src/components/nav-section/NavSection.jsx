import PropTypes from 'prop-types';
import { Box, List, ListItemText } from '@mui/material';
import { StyledNavItem, StyledNavItemIcon } from './styles';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const NavSection = ({ data = [], ...other }) => {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
};

const NavItem = ({ item }) => {
  const { title, path, icon, info } = item;
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const routerPath = router.pathname.split('/')[1];

    setIsActive(routerPath === path.split('/')[1]);
  }, [router.pathname, path]);

  return (
    <StyledNavItem
      className={isActive ? 'active' : ''}
      sx={{
        '&.active': {
          color: 'milky.base',
          bgcolor: 'text.base',
          borderRadius: '7.5px'
        },
      }}
      onClick={() => {
        router.push(path);
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
};

export default NavSection;

NavItem.propTypes = {
  item: PropTypes.object,
};

NavSection.propTypes = {
  data: PropTypes.array,
};
