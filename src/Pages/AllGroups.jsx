import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router'; 

const AllGroups = () => {
  const originalGroups = useLoaderData();
  const [groups, setGroups] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterCategory, setFilterCategory] = useState('All');

  useEffect(() => {
    let filtered = [...originalGroups];

    // Apply filter
    if (filterCategory !== 'All') {
      filtered = filtered.filter(group => group.hobbyCategory === filterCategory);
    }

    // Apply sort
    filtered.sort((a, b) => {
      const nameA = a.groupname.toLowerCase();
      const nameB = b.groupname.toLowerCase();
      return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });

    setGroups(filtered);
  }, [originalGroups, sortOrder, filterCategory]);

  // Extract unique categories for filter dropdown
  const categories = ['All', ...new Set(originalGroups.map(group => group.hobbyCategory))];

  return (
    <div className="my-5 w-full max-w-7xl mx-auto px-4">
      <div className="text-center my-8">
        <h2 className="text-4xl font-bold mb-2">All Interest Groups</h2>
        <p className="text-lg italic text-gray-500">
          "From creativity to adventure — there’s something for everyone."
        </p>
      </div>

      {/* Filter & Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div>
          <label className="my-4 font-semibold">Filter by Category:</label>
          <select
            value={filterCategory}
            onChange={e => setFilterCategory(e.target.value)}
            className="select select-bordered"
          >
            {categories.map(cat => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="my-4 font-semibold">Sort by Name:</label>
          <select
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
            className="select select-bordered"
          >
            <option value="asc">A → Z</option>
            <option value="desc">Z → A</option>
          </select>
        </div>
      </div>

      {/* Group Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {groups.map(group => (
          <div key={group._id} className="card bg-base-100 shadow-xl">
            <figure className="h-64 overflow-hidden">
              <img src={group?.imageURL} className="object-cover w-full h-full" alt={group.groupname} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{group?.groupname}</h2>
              <p>{group.description}</p>
              <div className="card-actions justify-end">
                <Link to={`/group/${group?._id}`} className="btn btn-primary btn-outline">See Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGroups;
