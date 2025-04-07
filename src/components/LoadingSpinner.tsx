
import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader2 className="h-8 w-8 animate-spin text-forest" />
      <span className="ml-2 text-forest font-medium">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
