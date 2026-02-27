import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Phone, 
  MessageSquare, 
  ChevronDown,
  Search,
  Layout,
  Package,
  Activity,
  Facebook,
  Mail,
  MapPin
} from 'lucide-react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  key?: React.Key;
}

const Section = ({ children, className = "", id }: SectionProps) => (
  <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  key?: React.Key;
}

const FadeIn = ({ children, delay = 0 }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-brand-paper/80 backdrop-blur-md border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="text-xl font-serif font-bold tracking-widest">Soulful Branding House</div>
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium opacity-60">
            <a href="#framework" className="hover:opacity-100 transition-opacity">Lộ trình</a>
            <a href="#fit" className="hover:opacity-100 transition-opacity">Phù hợp</a>
            <a href="#contact" className="hover:opacity-100 transition-opacity">Liên hệ</a>
          </div>
          <a 
            href="https://zalo.me/0793570447" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium border-b border-brand-dark pb-1 hover:text-brand-accent hover:border-brand-accent transition-all"
          >
            0793570447
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="pt-40 pb-32 min-h-[80vh] flex flex-col justify-center">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-8">
            Kiến tạo giá trị cốt lõi <br />
            <span className="italic opacity-80">cho thương hiệu & nhân hiệu</span> <br />
            nhất quán từ bên trong ra bên ngoài.
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl font-serif italic mb-12 opacity-70">
              C.O.R.E Concept Framework by Soulful Branding House <br />
              Lộ trình dành cho những thương hiệu không chấp nhận sự mờ nhạt.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => document.getElementById('framework')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-brand-dark text-brand-paper px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-brand-accent transition-colors group"
              >
                Khám phá lộ trình
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('mirror')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-brand-dark px-8 py-4 rounded-full hover:bg-brand-dark hover:text-brand-paper transition-all"
              >
                Bắt đầu từ Clarify
              </button>
            </div>
          </div>
        </FadeIn>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <ChevronDown className="w-6 h-6 animate-bounce opacity-30" />
        </motion.div>
      </Section>

      {/* Mirror Section */}
      <div id="mirror" className="bg-brand-dark text-brand-paper">
        <Section className="py-32">
          <FadeIn>
            <span className="text-sm uppercase tracking-[0.3em] opacity-50 mb-12 block">Phản chiếu</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-16 leading-relaxed max-w-4xl">
              Bạn có đang cảm thấy...
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {[
              {
                title: "Hình ảnh thiếu linh hồn",
                desc: "Trông chuyên nghiệp nhưng không kể được câu chuyện của chính mình."
              },
              {
                title: "Nội dung thiếu trục tư duy",
                desc: "Nỗ lực truyền thông rời rạc, không tạo ra sự cộng hưởng giá trị."
              },
              {
                title: "Nỗ lực thiếu tính dài hạn",
                desc: "Chạy theo xu hướng nhưng chưa bao giờ thực sự chạm đến lõi bản sắc."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border-l border-brand-paper/20 pl-8 py-4">
                  <h3 className="text-2xl font-serif mb-4 italic">{item.title}</h3>
                  <p className="opacity-60 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="max-w-3xl border-t border-brand-paper/10 pt-12">
              <blockquote className="text-3xl md:text-4xl font-serif italic leading-snug">
                "Vấn đề không nằm ở việc làm chưa đủ nhiều, <br />
                mà là chưa xác định đúng giá trị cốt lõi."
              </blockquote>
            </div>
          </FadeIn>
        </Section>
      </div>

      {/* CORE Framework Section */}
      <Section id="framework" className="py-32">
        <FadeIn>
          <span className="text-sm uppercase tracking-[0.3em] opacity-50 mb-12 block">Lộ trình tư duy</span>
          <h2 className="text-5xl md:text-6xl font-serif mb-24">C.O.R.E Framework</h2>
        </FadeIn>

        <div className="grid gap-24">
          {[
            {
              letter: "C",
              title: "Clarify",
              subtitle: "Khai vấn & Chẩn đoán",
              desc: "Bóc tách Brand DNA. Chúng tôi không đoán, chúng tôi khai quật những giá trị đang ẩn giấu dưới lớp vỏ bề mặt.",
              icon: <Search className="w-8 h-8" />
            },
            {
              letter: "O",
              title: "Organize",
              subtitle: "Định hình Concept",
              desc: "Xây dựng Archetype, Content Pillars, ngôn ngữ & thị giác. Tạo ra một hệ sinh thái bản sắc có trật tự và sức hút.",
              icon: <Layout className="w-8 h-8" />
            },
            {
              letter: "R",
              title: "Realize",
              subtitle: "Đóng gói & Chuyển giao",
              desc: "Chiến lược không nằm trên giấy. Chúng tôi đào tạo tư duy và bàn giao quy trình thực thi để bạn làm chủ thương hiệu.",
              icon: <Package className="w-8 h-8" />
            },
            {
              letter: "E",
              title: "Execute & Evolve",
              subtitle: "Đồng hành & Phát triển",
              desc: "Giám sát chất lượng và tối ưu theo thị trường. Thương hiệu là một thực thể sống, cần được nuôi dưỡng đúng cách.",
              icon: <Activity className="w-8 h-8" />
            }
          ].map((step, i) => (
            <FadeIn key={i}>
              <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start group">
                <div className="flex items-baseline gap-4">
                  <span className="text-8xl md:text-9xl font-serif font-bold opacity-5 group-hover:opacity-10 transition-opacity leading-none">
                    {step.letter}
                  </span>
                  <div className="bg-brand-accent/10 p-4 rounded-2xl text-brand-accent">
                    {step.icon}
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="text-sm uppercase tracking-widest font-bold mb-2 opacity-40">{step.title}</h3>
                  <h4 className="text-3xl md:text-4xl font-serif mb-6">{step.subtitle}</h4>
                  <p className="text-lg md:text-xl opacity-70 leading-relaxed max-w-xl">
                    {step.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Fit / Not Fit Section */}
      <div id="fit" className="bg-stone-100">
        <Section className="py-32">
          <div className="grid md:grid-cols-2 gap-24">
            <FadeIn>
              <h2 className="text-4xl font-serif mb-12">Phù hợp nếu bạn...</h2>
              <ul className="space-y-8">
                {[
                  "Nghiêm túc với bản sắc và ảnh hưởng dài hạn",
                  "Sẵn sàng soi chiếu và thay đổi từ gốc",
                  "Muốn làm thương hiệu có trách nhiệm và chiều sâu"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0 mt-1" />
                    <span className="text-lg opacity-80">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-4xl font-serif mb-12 opacity-50">Không phù hợp nếu...</h2>
              <ul className="space-y-8">
                {[
                  "Bạn chỉ cần “trông có vẻ chuyên nghiệp”",
                  "Bạn tìm giải pháp nhanh, ít đào sâu",
                  "Bạn ưu tiên số lượng hơn chất lượng cốt lõi"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start opacity-50">
                    <XCircle className="w-6 h-6 shrink-0 mt-1" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Section>
      </div>

      {/* Role Section */}
      <Section className="py-40 text-center">
        <FadeIn>
          <span className="text-sm uppercase tracking-[0.3em] opacity-50 mb-12 block">Vai trò của Soulful Branding House</span>
          <p className="text-3xl md:text-5xl font-serif italic leading-tight max-w-5xl mx-auto">
            “Soulful Branding House không bán giải pháp đóng gói sẵn. <br />
            Chúng tôi đồng hành để thương hiệu <br />
            <span className="text-brand-accent">tìm đúng lõi, giữ đúng hướng</span> <br />
            và viral đúng thời điểm.”
          </p>
        </FadeIn>
      </Section>

      {/* Final CTA Section */}
      <div id="contact" className="bg-brand-dark text-brand-paper">
        <Section className="py-32">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif mb-12 leading-tight">
                Nếu bạn đã sẵn sàng để bắt đầu hành trình xây dựng thương hiệu, hãy bắt đầu bằng một buổi tư vấn, tôi sẽ dành tặng bạn 30 phút để xác định rõ mong muốn và mục đích của bạn.
              </h2>
              <p className="text-xl opacity-60 mb-16 font-serif italic">
                Chúng tôi tin vào những cuộc đối thoại nghiêm túc và chân thành.
              </p>
              
              <div className="flex flex-wrap gap-8 justify-center items-center">
                <a 
                  href="tel:0793570447"
                  className="flex items-center gap-4 text-xl font-serif hover:text-brand-accent transition-colors"
                >
                  <div className="bg-brand-paper/10 p-3 rounded-full">
                    <Phone className="w-5 h-5" />
                  </div>
                  0793570447
                </a>
                <div className="w-px h-8 bg-brand-paper/20 hidden md:block" />
                <a 
                  href="https://zalo.me/0793570447"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-xl font-serif hover:text-brand-accent transition-colors"
                >
                  <div className="bg-brand-paper/10 p-3 rounded-full">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  Ms Huyền Ly (Zalo)
                </a>
                <div className="w-px h-8 bg-brand-paper/20 hidden md:block" />
                <a 
                  href="mailto:Hailyngvn@gmail.com"
                  className="flex items-center gap-4 text-xl font-serif hover:text-brand-accent transition-colors"
                >
                  <div className="bg-brand-paper/10 p-3 rounded-full">
                    <Mail className="w-5 h-5" />
                  </div>
                  Hailyngvn@gmail.com
                </a>
                <div className="w-px h-8 bg-brand-paper/20 hidden md:block" />
                <a 
                  href="https://www.facebook.com/huyenly.asha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-xl font-serif hover:text-brand-accent transition-colors"
                >
                  <div className="bg-brand-paper/10 p-3 rounded-full">
                    <Facebook className="w-5 h-5" />
                  </div>
                  Facebook
                </a>
              </div>

              <div className="mt-16 grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto border-t border-brand-paper/10 pt-12">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-1" />
                  <div>
                    <span className="block text-sm uppercase tracking-widest opacity-40 mb-1">Địa chỉ 1</span>
                    <p className="opacity-70">100 Tô Hiệu, BMT, Đắk Lắk</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-1" />
                  <div>
                    <span className="block text-sm uppercase tracking-widest opacity-40 mb-1">Địa chỉ 2</span>
                    <p className="opacity-70">Chung cư Westgate An Gia Bình Chánh, HCM</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>
        
        <footer className="border-t border-brand-paper/10 py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 text-sm tracking-widest uppercase">
            <div>© 2024 C.O.R.E Framework by Soulful Branding House</div>
            <div className="flex gap-8">
              <a href="https://www.facebook.com/huyenly.asha" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Facebook</a>
              <a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

