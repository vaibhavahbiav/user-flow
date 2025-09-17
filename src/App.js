import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function Splash() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-end h-screen bg-blue-50 p-5 space-y-8 tracking-wide xl:mx-auto xl:items-center xl:justify-center xl:space-y-10">
      <div className='flex flex-col items-start justify-end text-left space-y-2 xl:space-y-5 xl:items-center xl:justify-center xl:text-center'>
        <h1 className="text-2xl font-bold text-gray-800 xl:text-5xl">Welcome to PopX</h1>
        <h3 className='text-xl text-gray-500 xl:text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eaque!</h3>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 w-full xl:w-[40%] xl:justify-center">
        <button
          onClick={() => navigate('/signup')}
          className="px-4 py-2 w-full bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 text-base xl:text-lg sm:text-base sm:w-auto">
          Create an account
        </button>
        <button
          onClick={() => navigate('/login')}
          className="px-4 py-2  w-full bg-gray-400 text-gray-800 font-semibold rounded-lg hover:bg-gray-700 hover:text-white text-base xl:text-lg sm:text-base sm:w-auto">
          Already Regestired? Login
        </button>
      </div>
    </div>
  );
}

function Signup() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/settings');
  };
  return (
    <div className="flex flex-col items-start justify-start h-screen bg-blue-50 p-5 tracking-wide w-screen xl:items-center xl:justify-center">
      <h2 className="text-3xl font-bold text-left w-[70%] text-gray-800 xl:text-center xl:text-5xl mt-4">Create your PopX Account</h2>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col space-y-4 w-full xl:mt-16 xl:space-y-8 xl:w-[30%]">
        <div className='relative'>
          <label htmlFor="fullname" className='absolute bg-blue-50 -top-2 left-3 text-violet-600 text-sm pl-1 pr-6 font-semibold'>Full Name<span className='text-red-500'>*</span></label>
          <input type="text" name='fullname' placeholder="enter full name..." required className="py-3 px-4 border w-full border-gray-400 rounded-lg outline-none bg-blue-50 text-gray-700 font-semibold placeholder:font-normal placeholder:text-sm" />
        </div>
        <div className='relative'>
          <label htmlFor="phone" className='absolute bg-blue-50 -top-2 left-3 text-violet-600 text-sm pl-1 pr-6 font-semibold'>Phone Number<span className='text-red-500'>*</span></label>
          <input type="tel" name='phone' placeholder="enter phone number..." required className="py-3 px-4 border w-full border-gray-400 rounded-lg outline-none bg-blue-50 text-gray-700 font-semibold placeholder:font-normal placeholder:text-sm" />
        </div>
        <div className='relative'>
          <label htmlFor="email" className='absolute bg-blue-50 -top-2 left-3 text-violet-600 text-sm pl-1 pr-6 font-semibold'>Email Address<span className='text-red-500'>*</span></label>
          <input type="email" name='email' placeholder="enter email..." required className="py-3 px-4 border w-full border-gray-400 rounded-lg outline-none bg-blue-50 text-gray-700 font-semibold placeholder:font-normal placeholder:text-sm" />
        </div>
        <div className='relative'>
          <label htmlFor="passowrd" className='absolute bg-blue-50 -top-2 left-3 text-violet-600 text-sm pl-1 pr-6 font-semibold'>Password<span className='text-red-500'>*</span></label>
          <input type="password" name='passowrd' placeholder="enter password..." required className="py-3 px-4 border w-full border-gray-400 rounded-lg outline-none bg-blue-50 text-gray-700 font-semibold placeholder:font-normal placeholder:text-sm" />
        </div>
        <div className='relative'>
          <label htmlFor="company" className='absolute bg-blue-50 -top-2 left-3 text-violet-600 text-sm pl-1 pr-6 font-semibold'>Company Name</label>
          <input type="text" name='company' placeholder="enter company name..." required className="py-3 px-4 border w-full border-gray-400 rounded-lg outline-none bg-blue-50 text-gray-700 font-semibold placeholder:font-normal placeholder:text-sm" />
        </div>
        <div className='flex flex-col items-start justify-start space-y-2'>
          <label htmlFor="agency" className='text-gray-800 text-sm font-semibold'>Are you an Agency<span className='text-red-50-500'>*</span></label>
          <div className='flex items-center justify-center space-x-3 text-sm text-gray-800 font-semibold'>
            <div className='flex items-center justify-center space-x-3'>
              <input type="radio" name="agency" value="yes" className='accent-violet-500 size-5' />
              <label htmlFor="agency-yes">Yes</label>
            </div>
            <div className='flex items-center justify-center space-x-3'>
              <input type="radio" name="agency" value="no" className='accent-violet-500 size-5' />
              <label htmlFor="agency-no">No</label>
            </div>
          </div>
        </div>
        <div className='pt-40 w-full xl:pt-20'>
          <button
            type="submit"
            className="w-full xl:w-[40%] xl:ml-40 bg-violet-600 text-white py-2 rounded-lg hover:bg-violet-700 text-lg font-semibold ">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

function Login() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/settings');
  };
  return (
    <div className="flex flex-col items-start justify-start h-screen bg-blue-50 p-5 tracking-wide w-screen xl:items-center xl:justify-center">
      <div className='mt-4 text-left flex flex-col space-y-2 items-center justify-center xl:space-y-6'>
        <h2 className="text-3xl font-bold text-gray-800 xl:text-center xl:text-5xl w-[70%] xl:w-full xl:mt-4">Signin to your PopX Account</h2>
        <h3 className='text-xl text-gray-500 xl:w-[50%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, laudantium autem eum animi veniam voluptatum a repudiandae doloribus unde! Hic!</h3>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col space-y-4 w-full xl:mt-16 xl:space-y-8 xl:w-[30%]">
        <div className='relative'>
          <label htmlFor="email" className='absolute bg-blue-50 -top-2 left-3 text-violet-600 text-sm pl-1 pr-6 font-semibold'>Email Address<span className='text-red-500'>*</span></label>
          <input type="email" name='email' placeholder="enter email..." required className="py-3 px-4 border w-full border-gray-400 rounded-lg outline-none bg-blue-50 text-gray-700 font-semibold placeholder:font-normal placeholder:text-sm" />
        </div>
        <div className='relative'>
          <label htmlFor="passowrd" className='absolute bg-blue-50 -top-2 left-3 text-violet-600 text-sm pl-1 pr-6 font-semibold'>Password<span className='text-red-500'>*</span></label>
          <input type="password" name='passowrd' placeholder="enter password..." required className="py-3 px-4 border w-full border-gray-400 rounded-lg outline-none bg-blue-50 text-gray-700 font-semibold placeholder:font-normal placeholder:text-sm" />
        </div>
        <div className='w-full'>
          <button
            type="submit"
            className="w-full xl:w-[40%] xl:ml-40 bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500 text-lg font-semibold ">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

function Settings() {
  return (
    <div className="flex flex-col items-start justify-start h-screen bg-blue-50 tracking-wide">
      <h2 className="text-xl bg-white pl-5 py-4 w-full text-left font-semibold xl:text-5xl xl:text-center xl:py-8">Account Settings</h2>
      <div className='py-6 flex flex-col items-start justify-center p-5 space-y-8  border-b border-gray-300 border-dashed xl:py-12 xl:items-center xl:justify-center xl:w-full xl:border-b-2'>
        <div className='flex items-start justify-start space-x-5 text-left xl:space-x-10'>
          <div className='relative'>
            <img className='size-20 xl:size-40 rounded-full' src="https://randomuser.me/api/portraits/med/women/75.jpg" alt="user profile" />
            <button className='absolute bottom-1 right-0 flex items-center justify-center bg-indigo-500 size-5 xl:size-12 rounded-full active:scale-95 hover:bg-indigo-600 group hover:scale-110 transition-all'>
              <img className='size-3 xl:size-8 invert group-hover:scale-110' src="/assets/camera.png" alt="upload icon" />
            </button>
          </div>
          <div className='flex flex-col space-y-1 xl:text-2xl xl:items-start xl:mt-5'>
            <span className='text-gray-800 font-semibold'>Name Name</span>
            <span className='text-gray-700 ml-0'>email@website.com</span>
          </div>
        </div>
        <p className='text-gray-700 xl:text-xl xl:w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, odio vitae? Adipisci, officia! Iusto, sunt. Vitae architecto ut placeat, repellat sapiente eius, consequuntur quod accusamus at iure dolores, cupiditate perspiciatis!</p>
      </div>
    </div>
  );
};


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
