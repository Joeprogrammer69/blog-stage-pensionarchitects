import { useState } from "react";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";

const AboutMePage = () => {
  const [open, setOpen] = useState(true);

  return (
    <main className="page">
      <Head>
        <title>Over mezelf · Pension Architects Journal</title>
      </Head>
      <section className="about-grid">
        <div className="portrait-card">
          <img
            src="/steven.jpg"
            alt="Steven Van Cleemput"
            className="portrait"
            onClick={() => setOpen((value) => !value)}
            style={{ cursor: "pointer" }}
          />
          <h2>Steven Van Cleemput</h2>
          <p className="muted">Graduaat programmeren · AP Hogeschool</p>
          <div className="facts">
            <div className="fact">
              <span>Leeftijd</span>
              <strong>23</strong>
            </div>
            <div className="fact">
              <span>Stage</span>
              <strong>sep 2025 – jan 2026</strong>
            </div>
            <div className="fact">
              <span>Contact</span>
              <strong>0487 14 85 50</strong>
            </div>
          </div>
        </div>

        <div className="bio-card">
          <p className="eyebrow">Over mezelf</p>
          <h1>Student, music nerd, stagair.</h1>
          <p className="lede">
            Ik volg Graduaat programmeren aan AP Hogeschool. Naast code ga ik
            graag gamen, muziek maken (nog een noob producer) en af en toe naar
            de gym — met wisselende discipline.
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="https://www.linkedin.com/in/steven-van-cleemput-50a9a32a0/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <button className="btn btn-ghost" type="button" onClick={() => setOpen((value) => !value)}>
              {open ? "Verberg extra info" : "Toon extra info"}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35 }}
                style={{ overflow: "hidden" }}
              >
                <div className="facts" style={{ marginTop: 28 }}>
                  <div className="fact">
                    <span>Naam</span>
                    <strong>Steven Van Cleemput</strong>
                  </div>
                  <div className="fact">
                    <span>Hobby&apos;s</span>
                    <strong>Gamen, muziek, gym</strong>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="company-card">
        <div>
          <p className="eyebrow">Stageplek</p>
          <h2>Pension Architects</h2>
          <p className="lede">
          Pension Architects is een Belgisch bedrijf uit Zoersel dat zich bezighoudt met aanvullende pensioenen en pensioenplannen voor werkgevers en werknemers. Het bedrijf biedt ondersteuning en beheert informatie rond pensioenplannen via onder andere het mybenefit-platform.

          </p>
          <p>
            Van september 2026 tot januari 2026 Werk ik aan de chatbot penny van mybenefit en andere zaken bij pension architects
          </p>
        </div>
       
      </section>
    </main>
  );
};

export default AboutMePage;
