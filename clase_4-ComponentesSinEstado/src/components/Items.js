import React from 'react';
import Item from './Item';

function Items() {
    return (
       <React.Fragment>
            < Item />
            < Item />
            < Item />
            
        </React.Fragment> 

        // Si yo no hago esto con react fragment me inserta elementos html dentro de la lista donde es utilizado el componente
    );
}

export default Items;