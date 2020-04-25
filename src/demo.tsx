import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Box
} from "@material-ui/core";

const options = [
  "Latest Activity",
  "Order Date (Oldest First)",
  "Order Date (Newest First)"
];

export default function SimpleListMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      height="500px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <List component="nav" aria-label="sort-by-filter">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="sort-by-menu"
          aria-label="sort-by"
          onClick={handleClickListItem}
        >
          <ListItemText primary={`Sort By : ${options[selectedIndex]}`} />
        </ListItem>
      </List>
      <Menu
        id="sort-by-menu"
        anchorEl={anchorEl}
        // keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={event => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
