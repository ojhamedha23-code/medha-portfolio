interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="inline-block px-2.5 py-0.5 text-xs font-sans font-medium text-muted bg-ink/[0.05] rounded-full tracking-wide border border-ink/[0.08]">
      {label}
    </span>
  );
}
