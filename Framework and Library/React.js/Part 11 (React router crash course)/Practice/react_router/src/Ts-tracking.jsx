import { useState, useEffect } from "react";

const TOPICS = [
  { day: 1, phase: "Foundation", title: "TypeScript কী, Setup", task: "hello.ts বানাও — নিজের নাম ও বয়স print করো। string ও number type annotation দাও।" },
  { day: 2, phase: "Foundation", title: "Basic Types", task: "product info দিয়ে ৩টা variable বানাও। একটা ইচ্ছাকৃত type error করো ও VS Code এর error message পড়ো।" },
  { day: 3, phase: "Foundation", title: "Array, Tuple, Enum", task: "programming language array, [name, price] tuple, এবং OrderStatus enum বানাও।" },
  { day: 4, phase: "Foundation", title: "Object Type, Type Alias, Interface", task: "User interface বানাও — name, age, email দিয়ে। একটা variable তৈরি করো সেই type এ।" },
  { day: 5, phase: "Foundation", title: "Function Typing", task: "add(a, b) function বানাও। optional parameter সহ greet(name, greeting?) function বানাও।" },
  { day: 6, phase: "Foundation", title: "Union & Intersection Types", task: "id: string | number variable বানাও। typeof দিয়ে check করো কোনটা এসেছে।" },
  { day: 7, phase: "Foundation", title: "Revision + Mini Project", task: "Student type বানাও। তার marks calculate করার function লেখো। সব type safe রাখো।" },
  { day: 8, phase: "Intermediate", title: "Type Narrowing", task: "string | number নেয় এমন function বানাও — typeof দিয়ে আলাদা আলাদা handle করো।" },
  { day: 9, phase: "Intermediate", title: "Generics Basic", task: "identity<T>(arg: T): T function বানাও। string ও number দিয়ে call করো।" },
  { day: 10, phase: "Intermediate", title: "Generic Functions & Interfaces", task: "ApiResponse<T> interface বানাও। string ও number দুটো দিয়ে use করো।" },
  { day: 11, phase: "Intermediate", title: "Utility Types", task: "User interface বানাও। Partial<User> দিয়ে update function লেখো।" },
  { day: 12, phase: "Intermediate", title: "keyof & typeof Operator", task: "getProperty<T>(obj, key: keyof T) function লেখো।" },
  { day: 13, phase: "Intermediate", title: "Mapped Types", task: "Readonly<T> manually implement করো mapped type দিয়ে।" },
  { day: 14, phase: "Intermediate", title: "Conditional Types", task: "IsString<T> type বানাও — T যদি string হয় 'yes', না হলে 'no' return করবে।" },
  { day: 15, phase: "Intermediate", title: "Module System", task: "types.ts file বানাও। User, Product type সেখানে রাখো। main.ts থেকে import করো।" },
  { day: 16, phase: "Intermediate", title: "Revision + Project", task: "Fully typed Todo app বানাও — add, remove, toggle complete করার function সহ।" },
  { day: 17, phase: "React + TS", title: "React + TS Setup (Vite)", task: "npm create vite@latest দিয়ে নতুন project তৈরি করো। App.tsx দেখো।" },
  { day: 18, phase: "React + TS", title: "Component Props Typing", task: "Button component বানাও — label, onClick, disabled? props সহ interface দিয়ে।" },
  { day: 19, phase: "React + TS", title: "useState with Types", task: "Counter component useState<number> দিয়ে। Input component useState<string> দিয়ে।" },
  { day: 20, phase: "React + TS", title: "useEffect + useRef Typing", task: "useRef<HTMLInputElement> দিয়ে input বানাও যেটা page load এ automatically focus হয়।" },
  { day: 21, phase: "React + TS", title: "Event Handling Typing", task: "Form component এ onChange: React.ChangeEvent<HTMLInputElement> ও onSubmit: React.FormEvent type করো।" },
  { day: 22, phase: "React + TS", title: "API Call Typing", task: "User type বানাও। jsonplaceholder থেকে user fetch করো — response টা type করো।" },
  { day: 23, phase: "React + TS", title: "Custom Hook Typing", task: "useLocalStorage<T>(key, initialValue) custom hook বানাও।" },
  { day: 24, phase: "React + TS", title: "Context API with TypeScript", task: "ThemeContext বানাও — 'light' | 'dark' type দিয়ে। toggle function সহ।" },
  { day: 25, phase: "React + TS", title: "Final Project", task: "Note App বানাও — add, delete, edit note। সব component ও state TypeScript দিয়ে type করো।" },
  { day: 26, phase: "Job Ready", title: "tsconfig.json", task: "strict, target, module options বোঝো। নিজের project এর tsconfig customize করো।" },
  { day: 27, phase: "Job Ready", title: "TS + ESLint Setup", task: "@typescript-eslint install করো। একটা rule ভেঙে দেখো error আসে কিনা।" },
  { day: 28, phase: "Job Ready", title: "Real Codebase Reading", task: "GitHub এ একটা popular React+TS project এর types/ folder দেখো।" },
  { day: 29, phase: "Job Ready", title: "Interview Questions", task: "any vs unknown explain করো।" },
  { day: 30, phase: "Job Ready", title: "Portfolio Project", task: "project কে TypeScript এ migrate করো।" },
];

const PHASE_META = {
  "Foundation": { color: "#f59e0b", bg: "#f59e0b18", days: [1,7] },
  "Intermediate": { color: "#a78bfa", bg: "#a78bfa18", days: [8,16] },
  "React + TS": { color: "#38bdf8", bg: "#38bdf818", days: [17,25] },
  "Job Ready": { color: "#34d399", bg: "#34d39918", days: [26,30] },
};

const INTERVALS = [1, 3, 7];
const INTERVAL_LABELS = { 1: "+১ দিন", 3: "+৩ দিন", 7: "+৭ দিন" };

const todayStr = () => new Date().toISOString().split("T")[0];

const addDays = (d, n) => {
  if (!d) return null;
  const dt = new Date(d);
  if (isNaN(dt)) return null;
  dt.setDate(dt.getDate() + n);
  return dt.toISOString().split("T")[0];
};

const formatDate = (d) => {
  if (!d) return "";
  const dt = new Date(d);
  if (isNaN(dt)) return "";
  return dt.toLocaleDateString("bn-BD", { day: "numeric", month: "short" });
};

const STORAGE_KEY = "ts-tracker-v2";

export default function TSTracker() {
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("today");
  const [flash, setFlash] = useState(null);
  const [confirmReset, setConfirmReset] = useState(false);

  useEffect(() => { loadProgress(); }, []);

  const freshState = () => ({
    completedDays: {},
    currentDay: 1,
    startDate: todayStr(),
  });

  const loadProgress = () => {
    try {
      const r = localStorage.getItem(STORAGE_KEY);
      setProgress(r ? JSON.parse(r) : freshState());
    } catch {
      setProgress(freshState());
    }
    setLoading(false);
  };

  const save = (p) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    } catch {}
    setProgress(p);
  };

  const markComplete = (dayNum) => {
    if (!progress || progress.completedDays[dayNum]) return;

    const p = {
      ...progress,
      completedDays: {
        ...progress.completedDays,
        [dayNum]: todayStr(),
      },
      currentDay: Math.max(progress.currentDay, dayNum + 1),
    };

    save(p);
    setFlash(dayNum);
    setTimeout(() => setFlash(null), 1800);
  };

  const resetProgress = () => {
    save(freshState());
    setConfirmReset(false);
  };

  const getReviews = () => {
    if (!progress) return [];
    const t = todayStr();

    return TOPICS.flatMap(topic => {
      const completed = progress.completedDays[topic.day];
      if (!completed) return [];

      return INTERVALS
        .filter(n => addDays(completed, n) === t)
        .map(n => ({ ...topic, interval: n }));
    });
  };

  if (loading) return <div>লোড হচ্ছে...</div>;

  const { completedDays, currentDay } = progress;
  const completedCount = Object.keys(completedDays).length;
  const currentTopic = TOPICS.find(t => t.day === currentDay);
  const reviews = getReviews();
  const pct = Math.round((completedCount / 30) * 100);

  return (
    <div style={{ padding: 20 }}>
      <h2>TypeScript Tracker</h2>

      <button onClick={() => setTab("today")}>Today</button>
      <button onClick={() => setTab("plan")}>Plan</button>
      <button onClick={() => setTab("progress")}>Progress</button>

      {tab === "today" && (
        <>
          <h3>Day {currentDay}</h3>
          {currentTopic && (
            <>
              <p>{currentTopic.title}</p>
              <p>{currentTopic.task}</p>
              <button onClick={() => markComplete(currentDay)}>
                {completedDays[currentDay] ? "Done" : "Complete"}
              </button>
            </>
          )}

          <h4>Reviews</h4>
          {reviews.map((r, i) => (
            <div key={i}>
              Day {r.day} - {r.title} ({INTERVAL_LABELS[r.interval]})
            </div>
          ))}
        </>
      )}

      {tab === "plan" && (
        <div>
          {TOPICS.map(t => (
            <div key={t.day}>
              {t.day}. {t.title} {completedDays[t.day] && "✅"}
            </div>
          ))}
        </div>
      )}

      {tab === "progress" && (
        <div>
          <p>Completed: {completedCount}/30</p>
          <p>Progress: {pct}%</p>
          <button onClick={resetProgress}>Reset</button>
        </div>
      )}
    </div>
  );
}