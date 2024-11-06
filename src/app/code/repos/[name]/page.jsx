import React from 'react';

const RepoPage = ({params}) => {

    // console.log(params);
    return (
        <div>
        <div className='card'>
            <h2 className='font-bold'>{params.name}</h2>
            
        </div>
        
        </div>
    );
};

export default RepoPage;