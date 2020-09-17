import React, {useContext} from 'react';
import Search from "../component/Search";
import Card from "../component/Card";
import {GithubContext} from "../context/github/githubContext";

const Home = props => {

   const {loading, users} = useContext(GithubContext);

   return (
      <>
         <Search/>
         <div className="row">

            {loading ? <p className="text-center">Loading...</p> :
               users.map(user => {
                  return (
                     <div className="col-sm-4 mb-4" key={user.id}>
                        <Card user={user}/>
                     </div>
                  )
               })
            }
         </div>
      </>
   );
};

export default Home;
