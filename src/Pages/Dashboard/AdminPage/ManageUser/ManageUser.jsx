import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/users?username=${search}`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Error fetching users:', err));
  }, [search]);

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/${id}/makeAdmin`, {
      method: 'POST'
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setUsers(users.map(user => user._id === id ? { ...user, role: 'admin' } : user));
          Swal.fire('Success', 'User has been made admin', 'success');
        }
      })
      .catch((err) => console.error('Error making user admin:', err));
  };

  const handleMakePremium = (id) => {
    fetch(`http://localhost:5000/users/${id}/makePremium`, {
      method: 'POST'
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setUsers(users.map(user => user._id === id ? { ...user, isPremium: true } : user));
          Swal.fire('Success', 'User has been made premium', 'success');
        }
      })
      .catch((err) => console.error('Error making user premium:', err));
  };

  return (
    <div className="flex flex-col mt-6">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by username"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300">User Name</th>
                  <th className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300">User Email</th>
                  <th className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300">Make Admin</th>
                  <th className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300">Make Premium</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300">{user.name}</td>
                    <td className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300">{user.email}</td>
                    <td className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300">
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="text-blue-500 hover:underline"
                        disabled={user.role === 'admin'}
                      >
                        Make Admin
                      </button>
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300">
                      <button
                        onClick={() => handleMakePremium(user._id)}
                        className="text-green-500 hover:underline"
                        disabled={user.isPremium}
                      >
                        Make Premium
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
