import { useState } from "react";
import Head from "next/head";
import posts from "@/posts.json";

const categories = [
  "teambuilding",
  "code",
  "lessons learned",
  "fails",
  "wins",
  "reflectie",
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredPosts =
    selectedCategory === ""
      ? posts
      : posts.filter((post) => "category" in post && post.category === selectedCategory);

  return (
    <main className="page">
      <Head>
        <title>Blogs · Pension Architects Journal</title>
      </Head>
      <div className="section-head">
        <div>
          <p className="eyebrow">Logboek</p>
          <h1>Blogs</h1>
        </div>
        <p className="muted">{filteredPosts.length} posts</p>
      </div>

      <div className="blogs-layout">
        <aside className="filter-card">
          <h3>Categorie</h3>
          <div className="filter-list">
            <button
              type="button"
              className={selectedCategory === "" ? "active" : ""}
              onClick={() => setSelectedCategory("")}
            >
              Alle categorieën
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={selectedCategory === cat ? "active" : ""}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </aside>

        <div className="post-list">
          {filteredPosts.length === 0 && (
            <div className="empty">Geen posts gevonden in deze categorie.</div>
          )}

          {filteredPosts.map((post, index) => (
            <article key={`${String(post.id)}-${index}`} className="post-card">
              <div className="post-meta">
                <span>{formatDate(post.date)}</span>
                {"category" in post && post.category ? (
                  <span className="chip">{post.category}</span>
                ) : null}
              </div>
              <h3>{post.title}</h3>
              <p className="post-body">{post.text}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
