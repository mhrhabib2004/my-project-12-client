import ViewStoryModal from "../ViewStoryModal/ViewStoryModal";

import { useState, useEffect } from 'react';
import axios from 'axios';

const Succses = () => {
    const [successStories, setSuccessStories] = useState([]);
    const [selectedStory, setSelectedStory] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    useEffect(() => {
      fetchSuccessStories();
    }, []);
  
    const fetchSuccessStories = () => {
      axios.get(`${import.meta.env.VITE_LINK}/reviews`)
        .then(response => {
          setSuccessStories(response.data);
        })
        .catch(error => {
          console.error('Error fetching success stories:', error);
        });
    };
  
    const handleViewStory = (story) => {
      setSelectedStory(story);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedStory(null);
    };
    return (
        <div className="mt-7">
        <h1 className="text-3xl text-green-500 font-bold uppercase text-center">Success Stories</h1>
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Male Biodata Id</th>
                <th className="px-4 py-2 border-b">Female Biodata Id</th>
                <th className="px-4 py-2 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {successStories.map((story) => (
                <tr key={story.id}>
                  <td className="px-4 py-2 border-b">{story.maleBiodataId}</td>
                  <td className="px-4 py-2 border-b">{story.femaleBiodataId}</td>
                  <td className="px-4 py-2 border-b">
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded-md"
                      onClick={() => handleViewStory(story)}
                    >
                      View Story
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {isModalOpen && (
          <ViewStoryModal
            isOpen={isModalOpen}
            closeModal={closeModal}
            story={selectedStory}
          />
        )}
      </div>
    );
};

export default Succses;