import { Link } from "react-router";


const FeaturedGroups = ({ initfeatureds }) => {
  
  return (
    <>
    
    <div className="my-5 w-full max-w-7xl mx-auto px-4">
      {/* <h1 className='text-7xl'>{initfeatureds.length}</h1> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
{/* .slice(0, 6) */}
        {initfeatureds?.slice(0, 8).map((featured) => (

          <div key={featured._id} className="card bg-base-100 shadow-lg w-full">
            <figure className="h-48 overflow-hidden">
              <img
                src={featured?.imageURL}
                alt={featured?.hobbyCategory}
                className="object-cover w-full h-full"
              />
            </figure>
            <div className="card-body flex">
              
              <h2 className="card-title">{featured?.groupname}</h2>

               <p>{featured?.description}</p>
      
    <div className="card-actions justify-end ">
      
    <Link to={`/group/${featured?._id}`} className="btn btn-primary">See More</Link>
    </div>
             
            </div>
          </div>
          
        ))}

        {/* .slice(0, 6) */}
        
      </div>

    </div>
    </>
  );
};

export default FeaturedGroups;
