import React from 'react';
import { Scale } from 'lucide-react';

export const OverlappingCTA: React.FC = () => {
  return (
    <div className="relative z-30 max-w-[1180px] mx-auto px-4 sm:px-6 -mt-10 sm:-mt-14 mb-12 sm:mb-16">
      <div className="bg-[#172B4D] border-t-4 border-[#C3A45D] rounded shadow-2xl p-6 sm:p-8 lg:p-9 flex items-center gap-5">
        <div className="hidden sm:flex w-12 h-12 rounded bg-[#20395F] items-center justify-center border border-[#C3A45D]/40 flex-shrink-0">
          <Scale className="w-6 h-6 text-[#C3A45D]" />
        </div>
        <div>
          <h2 className="font-serif-luxury text-xl sm:text-2xl lg:text-[24px] font-bold text-white mb-1.5 leading-snug">
            A salvaguarda de direitos fundamentais exige solidez técnica, serenidade e discrição.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base font-normal">
            Atuação pautada pela estrita legalidade, dever de confidencialidade e rigor procedimental em todas as instâncias.
          </p>
        </div>
      </div>
    </div>
  );
};
