import React from "react";

/**
 * A basic loading spinner modal to display while waiting for a response from the server.
 */
const LoadingModal: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
};

export default LoadingModal;
