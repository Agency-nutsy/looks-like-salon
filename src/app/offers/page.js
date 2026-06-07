import Offers from '@/components/Offers';

export const metadata = {
  title: 'Offers & Memberships | Studio Fix – Amar Colony, Delhi',
  description: 'Exclusive salon offers, discounts, and memberships at Studio Fix in Amar Colony, Delhi.',
};

export default function OffersPage() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}></div>
      <Offers />
    </>
  );
}
