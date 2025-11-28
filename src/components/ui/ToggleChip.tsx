type ToggleChipProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export function ToggleChip({ label, isActive, onClick }: ToggleChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full border text-sm transition-colors ${
        isActive
          ? 'border-[#D9A441] bg-[#FFF8E6] text-[#0A1A4A]'
          : 'border-[#D9A441]/20 text-[#0A1A4A]/80 hover:border-[#D9A441]/60'
      }`}
    >
      {label}
    </button>
  );
}
