import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "outline";
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
    "inline-block px-5 py-2.5 text-sm font-sans font-medium rounded transition-colors duration-200";
  const styles =
    variant === "primary"
      ? `${base} bg-burgundy text-white hover:bg-[#6e1422]`
      : `${base} border border-burgundy text-burgundy hover:bg-blush`;

  if (download) {
    return (
      <a
        href={href}
        download={typeof download === "string" ? download : true}
        className={styles}
      >
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
