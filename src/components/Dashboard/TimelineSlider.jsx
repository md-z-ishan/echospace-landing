import React from 'react';
import { Calendar, Play, RotateCcw } from 'lucide-react';
import { playNodeChime } from '../../utils/audio';

export const TimelineSlider = ({
  currentStep,
  onChangeStep,
  maxSteps = 5,
  dates = ["Aug 06", "Aug 10", "Aug 13", "Aug 15", "Aug 16"]
}) => {
  return (
    <div className="flex items-center gap-3 px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono select-none">
      <div className="flex items-center gap-1.5 text-violet-700 font-bold">
        <Calendar className="w-3.5 h-3.5" />
        <span>Time Travel:</span>
      </div>

      <input
        type="range"
        min="1"
        max={maxSteps}
        value={currentStep}
        onChange={(e) => {
          onChangeStep(parseInt(e.target.value));
          playNodeChime(440 + parseInt(e.target.value) * 60);
        }}
        className="w-24 sm:w-32 accent-violet-600 cursor-pointer"
      />

      <span className="bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-800 font-bold min-w-[64px] text-center">
        {dates[currentStep - 1] || "All Dates"}
      </span>

      {currentStep < maxSteps ? (
        <button
          onClick={() => {
            onChangeStep(maxSteps);
            playNodeChime(880);
          }}
          className="text-violet-600 hover:text-violet-800 font-semibold cursor-pointer"
          title="Fast Forward to Present"
        >
          Present ➔
        </button>
      ) : (
        <button
          onClick={() => {
            onChangeStep(1);
            playNodeChime(523.25);
          }}
          className="text-slate-400 hover:text-slate-700 cursor-pointer"
          title="Reset Timeline"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};

export default TimelineSlider;
