"use client";

const problems = [
  {
    num: "Problem 1",
    title: "App fatigue is real",
    color: { header: "#E1F5EE", badge: "#E1F5EE", badgeText: "#085041" },
    points: [
      "The average engaged parent uses 4 to 7 apps to manage their child's learning",
      "None of them talk to each other",
      "The parent becomes the integration layer — and that is exhausting",
      "More tools did not make parenting easier. It made it harder.",
    ],
  },
  {
    num: "Problem 2",
    title: "Finding the right resource is a part time job",
    color: { header: "#EEEDFE", badge: "#EEEDFE", badgeText: "#26215C" },
    points: [
      "Child struggles with fractions — parent spends 45 minutes searching YouTube",
      "Child shows interest in coding — parent researches 10 platforms before deciding",
      "Every learning moment requires a research project before it can begin",
      "Parents are spending more time managing than actually parenting",
    ],
  },
  {
    num: "Problem 3",
    title: "Nothing is tracked — continuity is lost",
    color: { header: "#FAEEDA", badge: "#FAEEDA", badgeText: "#633806" },
    points: [
      "No system for remembering what worked, building on it, or connecting it forward",
      "Most parents keep their child's progress in their head or nowhere at all",
      "Every week starts from scratch",
      "There is no living record of what their child has actually learned",
    ],
  },
  {
    num: "Problem 4",
    title: "Parents have no idea if it is actually working",
    color: { header: "#FAECE7", badge: "#FAECE7", badgeText: "#712B13" },
    points: [
      "Apps show streaks and badges — not real developmental progress",
      "A parent can spend 3 months on a reading app and still not know if their child improved",
      "Busy does not mean effective — and parents cannot tell the difference",
      "Confidence in their child's progress is completely absent",
    ],
  },
  {
    num: "Problem 5",
    title: "The emotional tax underneath all of it",
    color: { header: "#E6F1FB", badge: "#E6F1FB", badgeText: "#0C447C" },
    points: [
      "Every managing failure feels like a parenting failure",
      "Decision fatigue turns into guilt — in both directions every time",
      "Parents know more than ever about child development — and feel worse than ever about it",
      "The problem is not lack of love or effort. It is lack of the right infrastructure.",
    ],
  },
];

export default function ProblemsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">
        Presentation — parent problems
      </p>
      <h1 className="text-2xl font-medium text-slate-800 dark:text-slate-100 mb-8">
        What normal parents are dealing with right now
      </h1>

      <div className="flex flex-col gap-4">
        {problems.map((p) => (
          <div
            key={p.num}
            className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            <div
              className="flex items-center gap-3 px-4 py-3"
              style={{ backgroundColor: p.color.header }}
            >
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-md"
                style={{ backgroundColor: p.color.badge, color: p.color.badgeText }}
              >
                {p.num}
              </span>
              <span className="text-sm font-medium text-slate-800">{p.title}</span>
            </div>
            <div className="bg-white dark:bg-slate-900 px-4 pb-4">
              {p.points.map((point, i) => (
                <p
                  key={i}
                  className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed py-1.5 border-t border-slate-100 dark:border-slate-800 first:border-t-0 first:pt-3"
                >
                  <span className="text-slate-300 dark:text-slate-600 mr-1">—</span>
                  {point}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <hr className="my-8 border-slate-200 dark:border-slate-700" />
      <p className="text-center text-sm font-medium italic text-blue-600 dark:text-blue-400 leading-relaxed">
        "The problem in 2026 is not a lack of resources. It is the overwhelming abundance of them."
      </p>
    </div>
  );
}
