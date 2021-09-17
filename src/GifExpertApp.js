import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpert = () => {

    const [categories, setCategories] = useState(['One Punch']); 

    // const handleAdd = () => {
    //     setCategories( categories => [ ...categories, 'Nanatsu no taizai' ] ); 
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                { 
                    categories.map( category => 
                        <GifGrid 
                        key={ category }
                        category={ category } />
                    )
                }
            </ol>
        </>
    );
}