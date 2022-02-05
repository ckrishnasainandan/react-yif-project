import React from 'react'
import Rest from './RestApi'
const Map = () => {
    console.log(Rest)
    return (
        <div>
           {Rest.map(
               (current) =>
               {
                   return(
                       <>
                            {current.id} and {current.name}
                       </>
                   );
               }
           )}
        </div>
    )
}

export default Map
