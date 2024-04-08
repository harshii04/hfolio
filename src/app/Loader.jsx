const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="border-t-4 border-gray-500 rounded-full h-12 w-12 animate-spin"></div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  );
};

export default Loader;
