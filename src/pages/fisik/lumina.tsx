import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowDown, Sparkles, Scissors, Gift, ShieldCheck, Lock, CheckCircle, Loader2, ShoppingBag } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';
import PremiumGamisImg from '@/assets/premium-gamis.png';

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
          src={PremiumGamisImg} 
          alt="Elegant Woman in Gamis" 
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-emerald-950/80" />
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
            {t("Eid Collection 2025", "Koleksi Lebaran 2025", "Koleksi Raya 2025")}
          </span>
          <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            {t("Restore Your Dignity &", "Kembalikan Wibawa &", "Kembalikan Maruah &")} <br/>
            <span className="italic text-gold-500">{t("Grace on Eid Day.", "Anggun Anda di Hari Raya.", "Keanggunan Anda di Hari Raya.")}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl font-light">
            {t(
              "Not just shimmer fabric. Designed with 'Smart-Cut' technology for instant slimming and elegant, subtle glow.",
              "Bukan sekadar kain Shimmer. Dirancang dengan teknologi 'Smart-Cut' yang memberikan efek Slimming instan dan kilau elegan yang tidak berlebihan.",
              "Bukan sekadar kain Shimmer. Direka dengan teknologi 'Smart-Cut' yang memberikan kesan Slimming segera dan kilauan elegan yang tidak keterlaluan."
            )}
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToCheckout}
            className="mt-8 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-emerald-900 shadow-lg transition-colors hover:bg-gold-500 hover:text-white md:px-10 md:py-5"
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
  const { t, formatPrice } = useLocale();
  const features = [
    {
      icon: Sparkles,
      title: t("Premium Grade Fabric", "Kain Grade Ekspor", "Kain Gred Eksport"),
      description: t(
        "Premium fabric that is cool, falls perfectly, and ironless. Luxurious yet modest shimmer.",
        "Kain premium yang dingin, jatuh sempurna, dan ironless. Kilau shimmer yang mewah namun tetap sopan.",
        "Kain premium yang sejuk, jatuh sempurna, dan ironless. Kilauan shimmer yang mewah namun tetap sopan."
      ),
      image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=2000&auto=format&fit=crop"
    },
    {
      icon: Scissors,
      title: t("Smart-Cut Slimming Effect", "Efek Slimming Smart-Cut", "Kesan Slimming Smart-Cut"),
      description: t(
        "Special stitching pattern that masks waist areas, providing an instant taller and slimmer silhouette.",
        "Pola jahitan khusus yang menyamarkan area perut dan pinggang, memberikan siluet tubuh yang lebih ramping.",
        "Corak jahitan khas yang menyamarkan kawasan perut dan pinggang, memberikan siluet tubuh yang lebih ramping."
      ),
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop"
    },
    {
      icon: Gift,
      title: t("Royal Unboxing", "Pengalaman Unboxing Mewah", "Pengalaman Unboxing Diraja"),
      description: t(
        "Packed in exclusive hardbox with satin ribbon. A gift of luxury for yourself.",
        "Dikemas dalam Hardbox eksklusif dengan pita satin. Sebuah hadiah kemewahan untuk diri sendiri.",
        "Dibungkus dalam Hardbox eksklusif dengan reben satin. Hadiah kemewahan untuk diri anda sendiri."
      ),
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-cream-50 py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold text-emerald-900 md:text-5xl">
            {t("Why Choose", "Kenapa Memilih", "Kenapa Memilih")} <span className="italic text-gold-600">Lumina?</span>
          </h2>
          <p className="mt-4 text-emerald-800/70">{t("Because you buy quality, confidence, and status.", "Karena Anda membeli kualitas, kepercayaan diri, dan status.", "Kerana anda membeli kualiti, keyakinan, dan status.")}</p>
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
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                  <feature.icon size={24} className="text-gold-500" />
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
    { id: 'emerald', name: t('Emerald Green', 'Hijau Emerald', 'Hijau Emerald'), color: '#047857', price: 125 },
    { id: 'rosegold', name: t('Rose Gold', 'Rose Gold', 'Rose Gold'), color: '#fb7185', price: 125 },
    { id: 'midnight', name: t('Midnight Blue', 'Biru Midnight', 'Biru Midnight'), color: '#1e3a8a', price: 125 },
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
      const message = `Halo, saya ingin memesan Lumina Collection.\n\nNama: ${formData.name}\nNo. WA: ${formData.whatsapp}\nAlamat: ${formData.address}\nWarna: ${selectedProduct?.name}\nMetode Pembayaran: COD (Bayar di Tempat)`;
      
      const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="checkout" className="bg-white py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-3xl bg-cream-50 shadow-2xl md:grid md:grid-cols-2">
          
          <div className="relative hidden md:block">
            <img 
              src={PremiumGamisImg} 
              alt="Checkout Visual" 
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-emerald-900/40 mix-blend-multiply" />
            <div className="absolute bottom-10 left-10 right-10 text-white">
              <h3 className="font-serif text-3xl font-bold">{t("Ready to Shine?", "Siap Tampil Memukau?", "Sedia Tampil Mempesona?")}</h3>
              <p className="mt-2 text-white/90">{t("Secure your delivery slot today.", "Amankan slot pengiriman hari ini.", "Tempah slot penghantaran anda hari ini.")}</p>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-emerald-900">{t("Order Form", "Formulir Pemesanan", "Borang Pesanan")}</h2>
              <p className="text-sm text-gray-500">{t("Fill your data for COD shipping.", "Isi data di bawah untuk pengiriman COD.", "Isi maklumat anda untuk penghantaran COD.")}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">{t("Full Name", "Nama Lengkap", "Nama Penuh")}</label>
                <input 
                  type="text" 
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  placeholder={t("e.g. Siti Aminah", "Contoh: Siti Aminah", "Contoh: Siti Aminah")}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">{t("WhatsApp Number", "Nomor WhatsApp", "Nombor WhatsApp")}</label>
                <input 
                  type="tel" 
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  placeholder={t("e.g. 08123456789", "Contoh: 08123456789", "Contoh: 0123456789")}
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">{t("Full Address", "Alamat Lengkap", "Alamat Penuh")}</label>
                <textarea 
                  required
                  rows={3}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  placeholder={t("Street, RT/RW, City", "Jalan, RT/RW, Kelurahan, Kecamatan, Kota", "Jalan, Taman, Poskod, Bandar, Negeri")}
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-gray-700">{t("Select Color", "Pilih Warna", "Pilih Warna")}</label>
                <div className="grid grid-cols-1 gap-3">
                  {products.map((product) => (
                    <div 
                      key={product.id}
                      onClick={() => setFormData({...formData, product: product.id})}
                      className={`flex cursor-pointer items-center justify-between rounded-lg border p-3 transition-all ${
                        formData.product === product.id 
                          ? 'border-emerald-600 bg-emerald-50 ring-1 ring-emerald-600' 
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="h-8 w-8 rounded-full border border-gray-200 shadow-sm"
                          style={{ backgroundColor: product.color }}
                        />
                        <span className="font-medium text-gray-900">{product.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-emerald-800">{formatPrice(product.price)}</span>
                        {formData.product === product.id && (
                          <CheckCircle className="text-emerald-600" size={20} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">{t("Payment Method", "Metode Pembayaran", "Kaedah Pembayaran")}</span>
                  <span className="font-bold text-emerald-800">{t("COD (Pay on Delivery)", "COD (Bayar di Tempat)", "COD (Bayar Tunai)")}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-900 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-emerald-800 disabled:opacity-70"
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
        className="flex items-center gap-3 rounded-full bg-emerald-900 px-8 py-4 text-white shadow-2xl ring-2 ring-white/20 backdrop-blur-sm transition-transform hover:scale-105 active:scale-95"
      >
        <ShoppingBag size={20} />
        <span className="font-bold uppercase tracking-wide">{t("Order Now (COD)", "Pesan Sekarang (COD)", "Pesan Sekarang (COD)")}</span>
      </button>
    </motion.div>
  );
}

export default function Lumina() {
  const { t } = useLocale();
  return (
    <main className="min-h-screen bg-cream-50 font-sans text-emerald-950 selection:bg-emerald-200 selection:text-emerald-900">
      <Hero />
      <ValueProps />
      <OrderForm />
      
      <footer className="bg-emerald-950 py-8 text-center text-white/40">
        <p className="text-sm">© 2025 Lumina. {t("All rights reserved.", "Hak cipta dilindungi.", "Hak cipta terpelihara.")}</p>
      </footer>

      <StickyCTA />
    </main>
  );
}
