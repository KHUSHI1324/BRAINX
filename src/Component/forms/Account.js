import React, {useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink,useNavigate } from 'react-router-dom';
const Account = ({setUser,user, mode }) => {
  const [isEditing, setIsEditing] = useState(false);
  const history = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({
          ...user,
          profilePic: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);

  if (!user) {
   window.location.href = '/login';
  }

  return (
    
    <div className='min-h-screen  -my-8 flex items-center justify-center'>
      <div className='bg-gray-100 p-6 rounded-lg  w-full max-w-lg font-sans'>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Account Information</h2>
          <button
  className="max-w-32 bg-transparent items-center justify-center flex border-2 border-sky-500 shadow-lg hover:bg-sky-500 text-sky-500 hover:text-white duration-300 cursor-pointer active:scale-[0.98] relative overflow-hidden py-2 px-4 rounded-lg focus:outline-none"
  onClick={isEditing ? handleSave : handleEdit}
>
  {isEditing ? 'Save' : 'Edit'}
  <span
    className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 hover:opacity-10 transition-opacity duration-100 ease-linear"
  ></span>
</button>

        </div>

        <form>
         
          
            <div className="mb-4">
            <label className="block text-lack mb-2" htmlFor="name">Name</label>
            <input
              className='w-full p-3 borderrounded-lg  shadow'
              type="text"
              id="name"
              name="name"
              value={user.name || 'null'}
              
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="mb-4">
            <label className="block text-lack mb-2" htmlFor="email">Email</label>
            <input
              className='w-full p-3 border rounded-lg  shadow'
              type="email"
              id="email"
              name="email"
              value={user.email || 'null'}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="mb-4">
            <label className="block textblack mb-2" htmlFor="contact">Contact</label>
            <input
              className='w-full p-3 border  rounded-lg  shadow'
              type="text"
              id="password"
              name="password"
              value={user.password || 'null'}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          
          
        </form>
      </div>
    </div>
    
  );
};

Account.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default Account;