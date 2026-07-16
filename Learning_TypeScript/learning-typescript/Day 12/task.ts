// day12.ts বানাও। getProperty<T, K extends keyof T> function লেখো। typeof দিয়ে config object থেকে type extract করো।

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const config = {
  name: "Laptop",
  price: 999,
};

type Config = typeof config;

/// Claude task
interface BlogPost {
  id: number;
  title: string;
  content: string[];
  author: string;
  publishedAt: string;
  draft: string;
}

type BlogPreview = Pick<BlogPost, "id" | "title" | "author">;

type BlogMeta = Omit<BlogPost, "content">;

type PageViews = Record<"post" | "title", number>;