const Spinner = () => {
  return (
    <div className="bg-opacity-70 fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent" />
    </div>
  );
};

export default Spinner;
