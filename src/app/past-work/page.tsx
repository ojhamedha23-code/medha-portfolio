import WorkEntry from "@/components/past-work/WorkEntry";
import { workHistory } from "@/lib/work";

export const metadata = {
  title: "Past Work — Medha Ojha",
};

export default function PastWorkPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="font-serif text-4xl text-ink mb-4">Past Work</h1>
        <p className="font-sans text-muted text-lg leading-relaxed max-w-xl">
          Roles, companies, and what I actually did. The full story of how I got
          here.
        </p>
      </div>

      <div>
        {workHistory.map((entry, i) => (
          <WorkEntry key={i} entry={entry} />
        ))}
      </div>
    </div>
  );
}
