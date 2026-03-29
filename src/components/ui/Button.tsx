import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "outline" | "ghost";
  children: React.ReactNode;
  download?: boolean | string;
  external?: boolean;
}

export default function Button({
  href,
  variant = "primary",
  children,
  download,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-sans font-medium rounded-lg transition-all duration-150";
  const styles =
    variant === "primary"
      ? `${base} bg-ink text-paper hover:bg-ink/85 shadow-sm`
      : variant === "outline"
      ? `${base} border border-ink/20 text-ink hover:border-ink/40 hover:bg-ink/4`
      : `${base} text-burgundy hover:underline underline-offset-2`;

  if (download) {
    return (
      <a href={href} download={typeof download === "string" ? download : true} className={styles}>
        {children}
      </a>
    );
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
