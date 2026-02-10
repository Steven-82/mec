import { Button, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import { useState } from 'react';

function Home() {
    const [open, setOpen] = useState(false)

    return <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
            <Button onClick={() => setOpen(true)}>sidebar</Button>
            <Typography xs={12} variant="h1" component="h1">Welcome to the Home Page</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 2 }}>
            <Typography xs={12} md={2} sx={{ border: '2px solid red' }}>Sidebar</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 10 }}>
            <Typography xs={12} md={10} sx={{ border: '2px solid blue' }}>Prodotti</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 10 }}>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <ShoppingBasketIcon />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemText primary="Carrello" />
                    </ListItem>
                </List>
            </Drawer>
        </Grid>
    </Grid>
}
export default Home;