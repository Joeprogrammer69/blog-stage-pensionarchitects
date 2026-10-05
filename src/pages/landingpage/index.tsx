import Head from "next/head";
import Link from "next/link";
import posts from "@/posts.json";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const LandingPage = () => {
  const latestPost = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )[0];

  return (
    <main className="page">
      <Head>
        <title>Pension Architects Journal</title>
      </Head>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Werkplekleren Zoersel</p>
          <h1>Een rustig logboek van mijn stage bij Pension Architects.</h1>
          <p className="lede">
            Hier bewaar ik wat ik leer, bouw en tegenkom tijdens mijn stage:
            CRM, ERP, klantenwerk en de kleine overwinningen ertussenin.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/blogspage">
              Bekijk de blogs
            </Link>
            <Link className="btn btn-ghost" href="/aboutme">
              Over mezelf
            </Link>
          </div>
        </div>

        <aside className="panel">
          <p className="eyebrow">Over Pension Architects</p>
          <h2>Alles op één plaats</h2>
          <p>
          Pension Architects is een Belgisch bedrijf uit Zoersel dat zich bezighoudt met aanvullende pensioenen en pensioenplannen voor werkgevers en werknemers. Het bedrijf biedt ondersteuning en beheert informatie rond pensioenplannen via onder andere het mybenefit-platform.
          </p>
        </aside>
      </section>

      {latestPost && (
        <section>
          <div className="section-head">
            <h2>Laatste blogpost</h2>
            <Link className="muted" href="/blogspage">
              Alle posts
            </Link>
          </div>
          <Link href="/blogspage" className="post-card" style={{ display: "block" }}>
            <div className="post-meta">
              <span>{formatDate(latestPost.date)}</span>
              {"category" in latestPost && latestPost.category ? (
                <span className="chip">{latestPost.category}</span>
              ) : null}
            </div>
            <h3>{latestPost.title}</h3>
            <p className="lede">{latestPost.text}</p>
          </Link>
        </section>
      )}
    </main>
  );
};

export default LandingPage;
