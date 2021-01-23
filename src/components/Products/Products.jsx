import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//     { 
//         id              :           1, 
//         name            :           'Shoes',  
//         price           :           '$10.35', 
//         description     :           'This is a running shoes',
//         image           :           'https://cdn.shopify.com/s/files/1/0419/1525/files/1400x1000-Best-Mens-Boots-Wingtip-Color77_768x544.jpg?v=1581450931'
//     },
//     { 
//         id              :           2, 
//         name            :           'iPhone', 
//         price           :           '$100.305', 
//         description     :           'Exclusive Collection iPhone 11',
//         image           :           'https://media.wired.com/photos/5e9721955cf5b3000849ce73/master/w_2560%2Cc_limit/Gear-iPhone_SE-Blk_HeroVertical_Campaign_Screen.jpg'
//     }
// ];


const Products = ( { products } ) => {

    const classes = useStyles();

    return(
        <main className={classes.content}>
            <div className={classes.toolbar} />

            <Grid container justify="center" spacing={4}>
                {
                    products.map((product) => {

                        return(
                            <Grid item key={product.id}
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3} 
                            >
                                <Product product={product} />
                            </Grid>
                        ) 
                    })
                }
            </Grid>
        </main>
    )
    
}

export default Products;