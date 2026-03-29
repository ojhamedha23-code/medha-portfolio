import Tag from "@/components/ui/Tag";
import { WorkEntry as WorkEntryType } from "@/types";

interface WorkEntryProps {
  entry: WorkEntryType;
}

export default function WorkEntry({ entry }: WorkEntryProps) {
  return (
    <div className="flex gap-6 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-burgundy mt-1.5 flex-shrink-0" />
        <div className="w-px flex-1 bg-muted/30 mt-2" />
      </div>

      <div className="flex-1 pb-2">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
          <div>
            <h3 className="font-serif text-xl text-ink">{entry.role}</h3>
            <p className="font-sans text-sm font-medium text-burgundy">
              {entry.company}
            </p>
          </div>
          <span className="font-sans text-sm text-muted whitespace-nowrap">
            {entry.dateRange}
          </span>
        </div>

        <p className="font-sans text-sm text-muted leading-relaxed mb-3">
          {entry.description}
        </p>

        {entry.bullets.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {entry.bullets.map((bullet, i) => (
              <li key={i} className="font-sans text-sm text-muted flex gap-2">
                <span className="text-burgundy mt-1">–</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5">
          {entry.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
