import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowDown, Sparkles, Scissors, ShieldCheck, Lock, CheckCircle, Loader2, ShoppingBag, Heart, Star, Award } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';
import PremiumBraImg from '@/assets/premium-bra.png';

// --- Components ---

function Hero() {
  const { t } = useLocale();
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={PremiumBraImg} 
          alt="Premium Bra Restoration" 
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-[#2c2420]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-20 text-center px-4 md:justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-md">
            {t("The Restoration Collection", "Koleksi Restorasi", "Koleksi Restorasi")}
          </span>
          <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            {t("More Than Just a Bra.", "Lebih Dari Sekadar Bra.", "Lebih Daripada Sekadar Bra.")} <br/>
            <span className="italic text-[#d4a373]">{t("This Is Restoration Therapy.", "Ini Adalah Terapi Restorasi.", "Ini Adalah Terapi Restorasi.")}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl font-light">
            {t(
              "Designed specifically to correct posture and restore breast tissue firmness with Bio-Infrared technology.",
              "Dirancang khusus untuk memperbaiki postur dan mengembalikan kekencangan jaringan payudara dengan teknologi Bio-Infrared.",
              "Direka khusus untuk membetulkan postur dan mengembalikan keanjalan tisu payudara dengan teknologi Bio-Inframerah."
            )}
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToCheckout}
            className="mt-8 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#2c2420] shadow-lg transition-colors hover:bg-[#d4a373] hover:text-white md:px-10 md:py-5"
          >
            {t("Order Now - Pay on Delivery", "Pesan Sekarang - Bayar di Tempat", "Pesan Sekarang - Bayar di Tempat")}
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        >
          <ArrowDown className="animate-bounce" size={32} />
        </motion.div>
      </div>
    </section>
  );
}

function ValueProps() {
  const { t } = useLocale();
  const features = [
    {
      icon: Sparkles,
      title: t("Bio-Infrared Restoration", "Restorasi Bio-Infrared", "Restorasi Bio-Inframerah"),
      description: t(
        "Bio-infrared particles improve blood circulation and stimulate collagen for tissue elasticity.",
        "Partikel bio-infrared melancarkan sirkulasi darah dan merangsang kolagen untuk elastisitas jaringan.",
        "Zarah bio-inframerah melancarkan peredaran darah dan merangsang kolagen untuk keanjalan tisu."
      ),
      image: "https://images.unsplash.com/photo-1582232490333-f7df5543666d?q=80&w=2000&auto=format&fit=crop"
    },
    {
      icon: Scissors,
      title: t("High-Compression Lifting", "Pengencangan Kompresi Tinggi", "Sokongan Kompresi Tinggi"),
      description: t(
        "3D stitching pattern that supports weight evenly, providing maximum lifting effect without tightness.",
        "Pola jahitan 3D yang menyokong beban secara merata, memberikan efek angkat (lifting) maksimal tanpa rasa sesak.",
        "Corak jahitan 3D yang menyokong beban secara sekata, memberikan kesan angkat (lifting) maksimum tanpa rasa sesak."
      ),
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=2000&auto=format&fit=crop"
    },
    {
      icon: Heart,
      title: t("Posture Correction", "Koreksi Postur Tubuh", "Pembetulan Postur Badan"),
      description: t(
        "U-shaped back panel design that helps pull shoulders to an upright position, reducing back pain.",
        "Desain panel belakang berbentuk U yang membantu menarik bahu ke posisi tegap, mengurangi pegal pada punggung.",
        "Reka bentuk panel belakang berbentuk U yang membantu menarik bahu ke posisi tegap, mengurangkan sakit belakang."
      ),
      image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-[#fdf8f6] py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#2c2420] md:text-5xl">
            {t("Why Use", "Kenapa Menggunakan", "Kenapa Menggunakan")} <span className="italic text-[#8b5e3c]">{t("Restoration Bra?", "Bra Restorasi?", "Bra Restorasi?")}</span>
          </h2>
          <p className="mt-4 text-[#5a4a42]">{t("Breast health is a long-term investment for every woman.", "Kesehatan payudara adalah investasi jangka panjang untuk setiap wanita.", "Kesihatan payudara adalah pelaburan jangka panjang untuk setiap wanita.")}</p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c2420]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                  <feature.icon size={24} className="text-[#d4a373]" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold">{feature.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OrderForm() {
  const { t, formatPrice } = useLocale();
  
  const products = [
    { 
      id: 'standard', 
      name: t('Standard Restoration Bra', 'Bra Restorasi Standar', 'Bra Restorasi Standar'), 
      price: 20, 
      description: t('Daily support for normal activities.', 'Dukungan harian untuk kenyamanan aktivitas biasa.', 'Sokongan harian untuk keselesaan aktiviti biasa.'), 
      badge: null 
    },
    { 
      id: 'premium', 
      name: t('Premium Therapeutic Bra', 'Bra Terapi Premium', 'Bra Terapi Premium'), 
      price: 40, 
      description: t('Advanced restoration and maximum lift.', 'Restorasi tingkat lanjut dan pengangkatan maksimal.', 'Restorasi tahap tinggi dan sokongan maksimum.'), 
      badge: 'RECOMMENDED' 
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    address: '',
    product: products[0].id,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      const selectedProduct = products.find(p => p.id === formData.product);
      const message = `Halo, saya ingin memesan Bra Restorasi.\n\nNama: ${formData.name}\nNo. WA: ${formData.whatsapp}\nAlamat: ${formData.address}\nLevel: ${selectedProduct?.name}\nMetode Pembayaran: COD (Bayar di Tempat)`;
      
      const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="checkout" className="bg-white py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-3xl bg-[#fdf8f6] shadow-2xl md:grid md:grid-cols-2">
          
          <div className="relative hidden md:block">
            <img 
              src={PremiumBraImg} 
              alt="Checkout Visual" 
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#2c2420]/40 mix-blend-multiply" />
            <div className="absolute bottom-10 left-10 right-10 text-white">
              <h3 className="font-serif text-3xl font-bold">{t("Comfort Investment", "Investasi Kenyamanan", "Pelaburan Keselesaan")}</h3>
              <p className="mt-2 text-white/90">{t("Secure your delivery slot today to get the promo price.", "Amankan slot pengiriman hari ini untuk mendapatkan harga promo.", "Dapatkan slot penghantaran hari ini untuk harga promo.")}</p>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-[#2c2420]">{t("Order Form", "Formulir Pemesanan", "Borang Pesanan")}</h2>
              <p className="text-sm text-gray-500">{t("Fill the data below for COD shipping.", "Isi data di bawah ini untuk pengiriman COD.", "Isi maklumat di bawah untuk penghantaran COD.")}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">{t("Full Name", "Nama Lengkap", "Nama Penuh")}</label>
                <input 
                  type="text" 
                  required
                  className="w-full rounded-lg border border-[#eaddd7] bg-white px-4 py-3 text-[#2c2420] focus:border-[#8b5e3c] focus:outline-none focus:ring-1 focus:ring-[#8b5e3c]"
                  placeholder={t("e.g. Sarah Tan", "Contoh: Sarah Tan", "Contoh: Sarah Tan")}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">{t("WhatsApp Number", "Nomor WhatsApp", "Nombor WhatsApp")}</label>
                <input 
                  type="tel" 
                  required
                  className="w-full rounded-lg border border-[#eaddd7] bg-white px-4 py-3 text-[#2c2420] focus:border-[#8b5e3c] focus:outline-none focus:ring-1 focus:ring-[#8b5e3c]"
                  placeholder={t("e.g. 8123 4567", "Contoh: 08123456789", "Contoh: 0123456789")}
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">{t("Full Address", "Alamat Lengkap", "Alamat Penuh")}</label>
                <textarea 
                  required
                  rows={3}
                  className="w-full rounded-lg border border-[#eaddd7] bg-white px-4 py-3 text-[#2c2420] focus:border-[#8b5e3c] focus:outline-none focus:ring-1 focus:ring-[#8b5e3c]"
                  placeholder={t("Block, Street, Unit Number, City", "Jalan, RT/RW, Kelurahan, Kecamatan, Kota", "Jalan, Taman, Poskod, Bandar, Negeri")}
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-gray-700">{t("Select Therapy Level", "Pilih Level Terapi", "Pilih Tahap Terapi")}</label>
                <div className="grid grid-cols-1 gap-3">
                  {products.map((product) => (
                    <div 
                      key={product.id}
                      onClick={() => setFormData({...formData, product: product.id})}
                      className={`relative flex cursor-pointer flex-col rounded-lg border p-4 transition-all ${
                        formData.product === product.id 
                          ? 'border-[#8b5e3c] bg-[#fdf8f6] ring-1 ring-[#8b5e3c]' 
                          : 'border-gray-200 hover:border-[#eaddd7]'
                      }`}
                    >
                      {product.badge && (
                        <div className="absolute -right-2 -top-2 rounded-full bg-[#8b5e3c] px-2 py-0.5 text-[10px] font-bold text-white">
                          {product.badge}
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#2c2420]">{product.name}</span>
                        <span className="font-bold text-[#8b5e3c]">{formatPrice(product.price)}</span>
                      </div>
                      <p className="mt-1 text-xs text-gray-500">{product.description}</p>
                      {formData.product === product.id && (
                        <div className="absolute bottom-2 right-2">
                          <CheckCircle className="text-[#8b5e3c]" size={16} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">{t("Payment Method", "Metode Pembayaran", "Kaedah Pembayaran")}</span>
                  <span className="font-bold text-[#2c2420]">{t("COD (Pay on Delivery)", "COD (Bayar di Tempat)", "COD (Bayar Tunai)")}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2c2420] py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-[#4a3b32] disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" /> {t("Processing...", "Memproses...", "Memproses...")}
                  </>
                ) : (
                  t("Order Now via WhatsApp", "Pesan Sekarang via WhatsApp", "Pesan Sekarang via WhatsApp")
                )}
              </motion.button>

              <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <Lock size={12} /> SSL Secure
                </div>
                <div className="flex items-center gap-1">
                  <ShieldCheck size={12} /> Verified Seller
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function StickyCTA() {
  const { t } = useLocale();
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <button
        onClick={scrollToCheckout}
        className="flex items-center gap-3 rounded-full bg-[#2c2420] px-8 py-4 text-white shadow-2xl ring-2 ring-white/20 backdrop-blur-sm transition-transform hover:scale-105 active:scale-95"
      >
        <ShoppingBag size={20} />
        <span className="font-bold uppercase tracking-wide">{t("Order Now (COD)", "Pesan Sekarang (COD)", "Pesan Sekarang (COD)")}</span>
      </button>
    </motion.div>
  );
}

export default function BraRestoration() {
  const { t } = useLocale();
  return (
    <main className="min-h-screen bg-[#fdf8f6] font-sans text-[#2c2420] selection:bg-[#eaddd7] selection:text-[#2c2420]">
      <Hero />
      <ValueProps />
      <OrderForm />
      
      <footer className="bg-[#2c2420] py-8 text-center text-white/40">
        <p className="text-sm">© 2025 Lift & Restore. {t("All rights reserved.", "Hak cipta dilindungi.", "Hak cipta terpelihara.")}</p>
      </footer>

      <StickyCTA />
    </main>
  );
}
