'use client';
import styles from './Testimonials.module.css';

const reviews = [
  {
    text: "Studiofix is my go to salon place for whenever I need to get anything done, ranging from my bridal makeup to everyday stuff and most recently my hair make over. David pulled off the exact subtle soft look that I had wanted! 🥰 Great team, especially David.. The super helpful and friendly team makes me come here every time!",
    name: 'Priyanka Arora',
    service: 'Bridal Makeup + Hair Makeover',
    stars: 5,
  },
  {
    text: "I had a wonderful experience at Studio Fix Salon. Their services are truly excellent, and the staff is very professional. Rajesh did my pedicure, and I must say he is extremely skilled. He truly has magic in his hands and pays great attention to detail. Gazal is very sweet and friendly. She did my facial beautifully, and it was such a relaxing and refreshing experience. Highly recommended for anyone looking for quality services and a professional yet warm atmosphere.",
    name: 'Pratiksha Yadav',
    service: 'Pedicure + Facial',
    stars: 5,
  },
  {
    text: "Just finished doing a pedicure, superb service, meticulously done process in a relaxed ambience. Special thanks to Rajesh for a wonderful pedicure! Please keep up the good work !",
    name: 'Indrani Varma',
    service: 'Pedicure',
    stars: 5,
  },
  {
    text: "Tanvi is an amazing makeup artist. I booked her for my wedding makeup and she really lived upto to my expectations. I clearly mentioned that I wanted to look all natural in my wedding and she made sure to incorporate every little request that I had. Keep up the good work!!",
    name: 'Shweta Jain',
    service: 'Bridal Makeup',
    stars: 5,
  },
  {
    text: "The service was excellent, and they paid attention to every small detail. You can truly see their dedication and passion for their work. I highly recommend this salon to anyone looking not just for great service, but also for a genuinely pleasant and respectful environment.",
    name: 'Aditi Saini',
    service: '',
    stars: 5,
  },
];

// Duplicate reviews to create a seamless infinite loop
const duplicatedReviews = [...reviews, ...reviews];

export default function Testimonials() {
  return (
    <section id="reviews" className={`section ${styles.testimonials}`}>
      <div className={styles.grain} aria-hidden="true"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div className={styles.headerRow} data-aos="fade-up">
          <div className={styles.headerLeft}>
            <span className="section-label">WHAT CLIENTS SAY</span>
            <h2 className="section-title">262 Reasons to <span className="gold-text">Trust</span> Us</h2>
          </div>
        </div>

        <div className={styles.carouselWrap} data-aos="fade-up" data-aos-delay="100">
          <div className={styles.track}>
            {duplicatedReviews.map((review, i) => (
              <div className={styles.card} key={i}>
                <div className={styles.stars}>
                  {'★'.repeat(review.stars).split('').map((s, j) => (
                    <span key={j} className={styles.star}>★</span>
                  ))}
                </div>
                <div className={styles.quoteDecor}>&ldquo;</div>
                <p className={styles.text}>{review.text}</p>
                <div className={styles.footer}>
                  <span className={styles.name}>{review.name}</span>
                  {review.service && <span className={styles.service}>{review.service}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Rating Bar */}
        <div className={styles.googleBar} data-aos="fade-up">
          <div className={styles.googleRating}>
            <span className={styles.googleStar}>⭐</span>
            <span className={styles.googleScore}>4.4 / 5 on Google</span>
            <span className={styles.googleCount}>Based on 262 reviews</span>
          </div>
          <a
            href="https://maps.app.goo.gl/WP7A4nYDrUAq3Aa58"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Read All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
