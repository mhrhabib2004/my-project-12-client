import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useSearchUsers = (search) => {
  return useQuery(
    ['searchUsers', search],
    async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_LINK}/users?username=${search}`);
      return data;
    },
    {
      enabled: !!search,
      onError: (err) => {
        console.error('Error fetching users:', err);
      },
    }
  );
};

export default useSearchUsers;
