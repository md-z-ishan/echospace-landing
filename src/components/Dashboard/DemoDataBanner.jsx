import React from 'react';
import { Info } from 'lucide-react';

export const DemoDataBanner = () => {
  return (
    <div className="w-full mb-6 p-4 bg-blue-50 dark:bg-blue-950/70 border-l-4 border-blue-500 dark:border-blue-400 rounded-r-xl rounded-l-sm shadow-sm transition-colors">
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
        <div className="space-y-1 text-left">
          <h4 className="text-sm font-bold text-blue-900 dark:text-blue-100 tracking-tight">
            ↓ Demo Knowledge Map — Example Data ↓
          </h4>
          <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-200 leading-relaxed font-sans">
            This visualization shows how EchoSpace connects your memories and ideas. Try creating your own map with your own data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoDataBanner;
