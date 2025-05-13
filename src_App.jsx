import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <section className="text-center py-12">
          <img
            src="/src/assets/clinic-hero.jpg"
            alt="Klinik"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Estpital'e Hoş Geldiniz
          </h2>
          <p className="text-lg text-gray-700">
            Modern sağlık hizmetlerimizle yanınızdayız.
          </p>
          <button className="mt-4 bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">
            Randevu Al
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;