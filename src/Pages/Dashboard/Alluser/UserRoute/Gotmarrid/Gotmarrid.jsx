
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const GotMarried = () => {
  const { register, handleSubmit,reset } = useForm();
//   const navigate = useNavigate();

const onsubmit = async (data) =>{
    console.log(data);
   
    fetch(`${import.meta.env.VITE_LINK}/reviews`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
            
        },
        body:JSON.stringify(data),
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if (data.insertedId){
            reset()
            Swal({
                title: "WoW",
                text: "You added biodata successfully",
                icon: "success",
                confirmaButtonText:'cool'
              })
        }
    })
}

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 border border-gray-300 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Got Married</h1>
      <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
        <div>
          <label htmlFor="selfBiodataId" className="block text-sm font-medium text-gray-700">
            Male Biodata ID
          </label>
          <input
            type="text"
            id="selfBiodataId"
            {...register('maleBiodataId', { required: true })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="partnerBiodataId" className="block text-sm font-medium text-gray-700">
            female Biodata ID
          </label>
          <input
            type="text"
            id="partnerBiodataId"
            {...register('femaleBiodataId', { required: true })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            {...register('imageUrl', { required: true })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Success Story</label>
          <textarea
            {...register('successStoryText', { required: true })}
            className="w-full px-3 py-2 border rounded-lg"
          ></textarea>
         
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default GotMarried;
