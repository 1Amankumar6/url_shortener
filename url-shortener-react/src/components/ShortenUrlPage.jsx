import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

const ShortenUrlPage = () => {
  const { url } = useParams();

  useEffect(() => {
    if (url) {
      window.location.href = import.meta.env.VITE_BACKEND_URL + `/${url}`;
    }
  }, [url]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-50 text-slate-800 px-4">
      <FaSpinner className="animate-spin text-4xl text-blue-500 mb-4" />
      <h1 className="text-2xl font-semibold mb-2">Redirecting...</h1>
      <p className="text-gray-600 text-center max-w-sm">
        Please wait while we redirect you to your destination. If you are not
        redirected automatically, click the link below.
      </p>
      {url && (
        <a
          href={import.meta.env.VITE_BACKEND_URL + `/${url}`}
          className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Go Now
        </a>
      )}
    </div>
  );
};

export default ShortenUrlPage;
