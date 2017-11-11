import React from 'react';
import Ingredient from './Ingredient'
import Preparation from './Preparation';

function Recipe() {
    return(
        < div id="Ingredients_cont" > 
           <Ingredient />
            <Preparation /> 
        </div>
    );
}

export default Recipe;