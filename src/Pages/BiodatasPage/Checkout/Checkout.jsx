
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';

const Checkout = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, cardNumber } = event.target.elements;

    const response = await fetch(`${import.meta.env.VITE_LINK}/contact-request`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: user._id,
        biodataId: id,
        email: email.value,
        cardNumber: cardNumber.value,
      }),
    });

    const result = await response.json();
    if (result.modifiedCount > 0) {
      Swal.fire('Success', 'Contact request submitted', 'success');
      navigate('/user/dashboard');
    } else {
      Swal.fire('Error', 'Something went wrong', 'error');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-5 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-5">Request Contact Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Biodata ID</label>
          <input type="text" value={id} readOnly className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label
          className="block text-gray-700 mb-2">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Stripe Card Number</label>
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
