import Gallery from '@/components/Gallery';

export const metadata = {
  title: 'Gallery | Studio Fix – Amar Colony, Delhi',
  description: 'View stunning transformations, salon interior, and bridal work at Studio Fix in Amar Colony, Delhi.',
};

export default function GalleryPage() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}></div>
      <Gallery />
    </>
  );
}
