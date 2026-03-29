interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="inline-block px-2.5 py-0.5 text-xs font-sans font-medium bg-blush text-burgundy rounded-full border border-burgundy/20">
      {label}
    </span>
  );
}
