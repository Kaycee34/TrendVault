import SignupFormDemo from '../../components/example/signup-form-demo';

const Pages = () => {
  return (
    <div className="min-h-screen flex justify-center items-start bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 p-4 mt-20 overflow-y-auto">
      {/* Content Container */}
      <div className="w-full max-w-screen-lg flex flex-col bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
        
        {/* Header: Contact Us */}
        <h1 className="text-4xl font-strike md:text-5xl font-bold p-8 text-gray-800">
          Contact Us
        </h1>
        
        {/* Form Section */}
        <div className="w-full p-4 md:p-8 flex flex-col justify-center">
          <SignupFormDemo />
        </div>
      </div>
    </div>
  );
};

export default Pages;
