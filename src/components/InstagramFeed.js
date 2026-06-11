'use client';
import styles from './InstagramFeed.module.css';

const reels = [
  'DZO1sT2h_Id',
  'DZLHPwxhn2P',
  'DW4S4yAgWyw',
  'DYoC14hhKsd'
];

export default function InstagramFeed() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">FOLLOW US</span>
          <h2 className="section-title">We&apos;re on <span className="gold-text">Instagram</span></h2>
          <p className="section-subtitle">Watch our latest makeup transformations directly from our Instagram feed.</p>
        </div>

        <div className={styles.reelsGrid} data-aos="fade-up">
          {reels.map((code, i) => (
            <div className={styles.reelWrap} key={i}>
              <iframe
                src={`https://www.instagram.com/reel/${code}/embed`}
                width="100%"
                height="450"
                frameBorder="0"
                scrolling="no"
                allowtransparency="true"
                allow="encrypted-media"
                className={styles.reelIframe}
              ></iframe>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrap} data-aos="fade-up">
          <a
            href="https://www.instagram.com/thelooks_likeunisexsalon/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            📷 Follow @thelookslike
          </a>
        </div>
      </div>
    </section>
  );
}
