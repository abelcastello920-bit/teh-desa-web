import React from 'react';

function App() {
  // Fungsi pemesanan langsung terhubung ke WhatsApp
  const handleOrder = (variant) => {
    const phoneNumber = "628xxxxxxxxxx"; // Nanti tinggal ganti nomor WA temen lu (format 628...)
    const message = encodeURIComponent(`Halo Teh Desa, saya mau pesan varian: ${variant}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* 1. NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-200 sticky top-0 z-50">
        <h1 className="text-xl font-black text-emerald-800 tracking-wider">TEH DESA</h1>
        <div className="space-x-6 text-sm font-medium hidden md:block">
          <a href="#about" className="hover:text-emerald-700 transition">Tentang Kami</a>
          <a href="#products" className="hover:text-emerald-700 transition">Varian Teh</a>
        </div>
        <button 
          onClick={() => handleOrder('Pemesanan Umum')}
          className="bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-800 transition shadow-sm"
        >
          Pesan Sekarang
        </button>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center md:text-left md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 space-y-5">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            100% Alami & Autentik
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 leading-tight">
            Kesegaran Alami Cita Rasa Desa
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            Nikmati seduhan teh pilihan terbaik yang diproses secara tradisional. Pas banget buat nemenin waktu santai, nongkrong, atau nemenin nugas lu.
          </p>
          <div className="pt-2">
            <button 
              onClick={() => handleOrder('Penawaran Hero')}
              className="bg-emerald-800 text-white px-6 py-3.5 rounded-xl font-semibold shadow-md hover:bg-emerald-900 transition"
            >
              Coba Sekarang via WA
            </button>
          </div>
        </div>

        {/* Placeholder Foto Utama Produk */}
        <div className="mt-10 md:mt-0 md:w-5/12 flex justify-center">
          <div className="w-72 h-72 bg-amber-100 rounded-3xl flex items-center justify-center border-2 border-dashed border-amber-300 text-amber-900 font-medium p-6 text-center shadow-inner">
            [ Foto Banner / Produk Utama Teh Desa ]
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="bg-white py-14 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h3 className="text-2xl font-bold text-stone-800">Kenapa Memilih Teh Desa?</h3>
          <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Dibuat langsung dari racikan daun teh lokal pilihan tanpa bahan pengawet. Kami menghadirkan kenikmatan cita rasa teh asli yang segar, harum, dan menenangkan jiwa.
          </p>
        </div>
      </section>

      {/* 4. PRODUCT CATALOG */}
      <section id="products" className="max-w-5xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-center text-stone-800 mb-2">Pilihan Varian Teh</h3>
        <p className="text-center text-stone-500 text-sm mb-10">Pilih varian favoritmu dan pesan langsung ke admin</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card Varian 1 */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200 flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="w-full h-44 bg-stone-100 rounded-xl mb-4 flex items-center justify-center text-stone-400 text-sm border border-stone-200">
                [ Foto Teh Original ]
              </div>
              <h4 className="font-bold text-lg text-stone-800">Teh Original Desa</h4>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed">Seduhan teh hitam khas dengan aroma pekat dan cita rasa klasik yang mantap.</p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="font-bold text-emerald-800 text-base">Rp 8.000</span>
              <button 
                onClick={() => handleOrder('Teh Original Desa')}
                className="bg-amber-100 text-amber-900 px-4 py-2 rounded-lg text-xs font-bold hover:bg-amber-200 transition"
              >
                Pesan WA
              </button>
            </div>
          </div>

          {/* Card Varian 2 */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200 flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="w-full h-44 bg-stone-100 rounded-xl mb-4 flex items-center justify-center text-stone-400 text-sm border border-stone-200">
                [ Foto Teh Rempah ]
              </div>
              <h4 className="font-bold text-lg text-stone-800">Teh Rempah Tradisional</h4>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed">Perpaduan racikan teh dan rempah-rempah hangat alami pelipur lelah.</p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="font-bold text-emerald-800 text-base">Rp 10.000</span>
              <button 
                onClick={() => handleOrder('Teh Rempah Tradisional')}
                className="bg-amber-100 text-amber-900 px-4 py-2 rounded-lg text-xs font-bold hover:bg-amber-200 transition"
              >
                Pesan WA
              </button>
            </div>
          </div>

          {/* Card Varian 3 */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200 flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="w-full h-44 bg-stone-100 rounded-xl mb-4 flex items-center justify-center text-stone-400 text-sm border border-stone-200">
                [ Foto Teh Melati ]
              </div>
              <h4 className="font-bold text-lg text-stone-800">Teh Melati Melambai</h4>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed">Aroma melati segar pilihan yang bikin pikiran makin adem dan rileks.</p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="font-bold text-emerald-800 text-base">Rp 9.000</span>
              <button 
                onClick={() => handleOrder('Teh Melati Melambai')}
                className="bg-amber-100 text-amber-900 px-4 py-2 rounded-lg text-xs font-bold hover:bg-amber-200 transition"
              >
                Pesan WA
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-stone-900 text-stone-400 text-center py-8 text-xs border-t border-stone-800">
        <p>© 2026 Teh Desa Digital Hub. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;