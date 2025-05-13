export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Estpital</h1>
        <nav>
          <a href="/" className="mr-4 hover:underline">Ana Sayfa</a>
          <a href="/hizmetler" className="mr-4 hover:underline">Hizmetler</a>
          <a href="/iletisim" className="hover:underline">İletişim</a>
        </nav>
      </div>
    </header>
  );
}