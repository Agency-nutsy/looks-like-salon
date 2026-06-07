import Contact from '@/components/Contact';
import BookingForm from '@/components/BookingForm';
import FAQ from '@/components/FAQ';

export const metadata = {
  title: 'Contact Us | Studio Fix – Amar Colony, Delhi',
  description: 'Book an appointment at Studio Fix salon in Amar Colony, Delhi. Call +91 70420 44784 or WhatsApp us.',
};

export default function ContactPage() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}></div>
      <BookingForm />
      <Contact />
      <FAQ />
    </>
  );
}
