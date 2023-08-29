import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Payment from '@/components/home/Payment';

export default function Home() {
  return (
    <>
      <header className="header container mt-lg-4">
        <Header></Header>
      </header>

      <main className="content">
        <Payment></Payment>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}
