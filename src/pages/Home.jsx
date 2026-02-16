import { Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import { useState } from 'react';

import Navbar from '../components/navbar';
import Product from '../components/navbar/products';

function Home() {
    const [open, setOpen] = useState(false)

    return <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
            <Navbar setDrawerOpen={setOpen} />
        </Grid>
        <Grid size={{ xs: 12, md: 10 }}>
            <Product></Product>
        </Grid>
        <Grid size={{ xs: 12, md: 10 }}>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <ShoppingBasketIcon />
                            </ListItemIcon>
                            <ListItemText primary="Carrello" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Grid>
    </Grid>
}
export default Home;