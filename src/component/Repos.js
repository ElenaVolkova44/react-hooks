import React from 'react';

const Repos = ({repos}) => {
   return (
      <>
         {repos.map(repo => {
            return (
               <div className="card mb-3" key={repo.id}>
                  <div className="card-body">
                     <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                  </div>
               </div>
            )
         })}
      </>
   );
};

export default Repos;
