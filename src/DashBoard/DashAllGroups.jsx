import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import GroupTable from './GroupTable';





const DashAllGroups = () => {
  
  const originalGroups = useLoaderData();
  console.log(originalGroups)
  const [groups, setGroups] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterCategory, setFilterCategory] = useState('All');

  useEffect(() => {
    let filtered = [...originalGroups];

    if (filterCategory !== 'All') {
      filtered = filtered.filter(group => group.hobbyCategory === filterCategory);
    }

    filtered.sort((a, b) => {
      const nameA = a.groupname.toLowerCase();
      const nameB = b.groupname.toLowerCase();
      return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });

    setGroups(filtered);
  }, [originalGroups, sortOrder, filterCategory]);

  const categories = ['All', ...new Set(originalGroups.map(group => group.hobbyCategory))];

  return (
    <div className="my-5 w-full max-w-7xl mx-auto px-4">
      <div className="text-center my-8">
        <h2 className="text-4xl font-bold mb-2">All Interest Groups</h2>
        <p className="text-lg italic text-gray-500">
          "From creativity to adventure — there’s something for everyone."
        </p>
      </div>

      {/* Filter & Sort */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div>
          <label className="font-semibold">Filter by Category:</label>
          <select
            value={filterCategory}
            onChange={e => setFilterCategory(e.target.value)}
            className="select select-bordered ml-2"
          >
            {categories.map(cat => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-semibold">Sort by Name:</label>
          <select
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
            className="select select-bordered ml-2"
          >
            <option value="asc">A → Z</option>
            <option value="desc">Z → A</option>
          </select>
        </div>
      </div>

      {/* Table View */}
      {/* <GroupTable groups={groups} /> */}
     <GroupTable groups={groups} ></GroupTable>
    </div>
  );

}
export default DashAllGroups;
