'use client';
import styles from './Testimonials.module.css';

const reviews = [
  {
    text: "I always have an amazing experience at this salon. I recently got hair botox treatment done here right before my birthday, and I am extremely happy with the results. The treatment was done beautifully... Highly recommend this place to anyone looking for quality service, great staff, and a truly relaxing experience.",
    name: 'Chamundeswari Pemmasani',
    service: 'Hair Botox Treatment',
    stars: 5,
  },
  {
    text: "Got my haircut here today and absolutely loved it! The hairstylist - Rishi was super sweet and made sure I was comfortable the whole time. He asked exactly how short I wanted it and kept checking if I liked the length. The final look turned out even better than I imagined — light, bouncy, and neatly shaped. Totally worth it!",
    name: 'Sneha Gupta',
    service: 'Haircut',
    stars: 5,
  },
  {
    text: "Service at the Looks like at Lajpat nagar is full of satisfaction. The hair spa and facial experience with dev and kajal was amazing. He is very kind & gentle and makes sure that you are comfortable throughout the service... Would definitely visit here again :)",
    name: 'Shruti Singh Chauhan',
    service: 'Hair Spa & Facial',
    stars: 5,
  },
  {
    text: "Absolutely amazing service by the team.. Azhar is a very talented , extremely accomodative.. gave a very nice haircut and treatment. The girl who is managing, Kajal is very sweet, patient and has a great knowledge of the services they are offering... all in all a must visit salon..",
    name: 'Mehr Singhania',
    service: 'Haircut & Treatment',
    stars: 5,
  },
  {
    text: "I had an amazing experience getting my nail extensions done here! The service was top-notch, and the staff were so professional and friendly. The salon’s ambiance is relaxing and elegant totally worth every penny!",
    name: 'Isha Kaushik',
    service: 'Nail Extensions',
    stars: 5,
  },
  {
    text: "This is a very good salon; I went there for hair coloring, and everything was done professionally and wonderfully. The stylists are true professionals, they styled my hair and took all my wishes into account. Thank you to the stylists named Kajal and Azhar!",
    name: 'Anastasia Androsova',
    service: 'Hair Coloring',
    stars: 5,
  },
  {
    text: "I visited for a haircut there.... Staff is very cooperating and experienced. I had a really awesome experience and quite happy with the services",
    name: 'DIVYA JAIN',
    service: 'Haircut',
    stars: 5,
  },
  {
    text: "I recently visited looks salon for a haircut and had a really good experience. The staff was professional and made me feel comfortable. The haircut turned out great, exactly how I wanted. Also, the prices are quite budget-friendly. Overall, a nice place for a good service",
    name: 'Devika Yadav',
    service: 'Haircut',
    stars: 5,
  },
  {
    text: "I got my hairs coloured here. And the results after getting it done with they styling looked absolute amazing. The staff was also extremely friendly. Would definitely recommend !!",
    name: 'Ayushi Gautam',
    service: 'Hair Coloring',
    stars: 5,
  },
  {
    text: "I had a great experience at The Looks Like hair salon. Mohammed Azhar did an amazing job of colour peek a boo and highlights.\n\nThank you",
    name: 'sandra running',
    service: 'Highlights',
    stars: 5,
  }
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
            <h2 className="section-title">600+ Reasons to <span className="gold-text">Trust</span> Us</h2>
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
            <span className={styles.googleScore}>4.9 / 5 on Google</span>
            <span className={styles.googleCount}>Based on 600+ reviews</span>
          </div>
          <a
            href="https://maps.app.goo.gl/5LeB5MJ12KSX8Gx87"
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
