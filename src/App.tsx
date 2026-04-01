import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Briefcase, 
  Calendar, 
  Wrench, 
  Github, 
  Twitter, 
  Mail,
  ExternalLink,
  Code,
  Palette,
  Zap,
  Share2,
  Copy,
  Check,
  X,
  FileText,
  Plus,
  Send,
  Folder,
  Upload,
  MessageSquare,
  Phone
} from 'lucide-react';
import { ParticleBackground } from './components/ParticleBackground';
import { cn } from './lib/utils';

type Section = 'home' | 'portfolio' | 'events' | 'tools' | 'blog' | 'contact';

const sections = [
  { id: 'home', label: '首页', icon: Home, color: 'bg-pink-400' },
  { id: 'portfolio', label: '作品集', icon: Briefcase, color: 'bg-purple-400' },
  { id: 'blog', label: '文章', icon: FileText, color: 'bg-orange-400' },
  { id: 'events', label: '活动', icon: Calendar, color: 'bg-cyan-400' },
  { id: 'tools', label: '小工具', icon: Wrench, color: 'bg-yellow-400' },
  { id: 'contact', label: 'CONTACT ME', icon: MessageSquare, color: 'bg-gradient-to-r from-[#FFB7B2] via-[#B5EAD7] to-[#C7CEEA]' },
] as const;

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  return (
    <div className="min-h-screen font-sans text-slate-600 selection:bg-pink-200">
      <ParticleBackground />
      
      {/* Navigation */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-xl border border-white/50">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
                  isActive ? "text-white" : "text-slate-500 hover:text-slate-800"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-bg"
                    className={cn("absolute inset-0 rounded-full -z-10", section.color)}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon size={20} />
                <span className="text-sm font-medium">{section.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Content */}
      <main className="container mx-auto px-6 pt-20 pb-32 max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {activeSection === 'home' && <HomeSection setActiveSection={setActiveSection} />}
            {activeSection === 'portfolio' && <PortfolioSection />}
            {activeSection === 'blog' && <BlogSection />}
            {activeSection === 'events' && <EventsSection />}
            {activeSection === 'tools' && <ToolsSection />}
            {activeSection === 'contact' && <ContactSection />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function HomeSection({ setActiveSection }: { setActiveSection: (s: Section) => void }) {
  return (
    <div className="relative flex flex-col items-center text-center space-y-8 py-12">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative group z-10"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-[#FFB7B2] via-[#E2F0CB] to-[#C7CEEA] rounded-full blur-xl opacity-60 group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        <img 
          src="https://picsum.photos/seed/cute-doodle-avatar/200/200" 
          alt="Avatar" 
          className="relative w-40 h-40 rounded-full border-4 border-pink-100 shadow-2xl object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="space-y-4 z-10">
        <div className="inline-block px-8 py-4 bg-pink-50/60 backdrop-blur-sm rounded-[2.5rem] border border-pink-100/50 shadow-sm">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-[#FFB7B2] via-[#C7CEEA] to-[#B5EAD7] bg-clip-text text-transparent">
            你好，我是 Candy!
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-medium">
          一个热爱设计与开发的创意工作者。喜欢用代码编织色彩，用交互传递温度。
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {[
          { icon: Github, label: 'Github', color: 'hover:bg-[#FFB7B2]' },
          { icon: Twitter, label: 'Twitter', color: 'hover:bg-[#B5EAD7]' },
          { icon: Mail, label: 'Email', color: 'hover:bg-[#C7CEEA]' },
        ].map((social, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "p-4 bg-white rounded-2xl shadow-lg text-slate-400 hover:text-white transition-colors duration-300",
              social.color
            )}
          >
            <social.icon size={24} />
          </motion.button>
        ))}
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveSection('contact')}
          className="px-8 py-4 bg-gradient-to-r from-[#FFB7B2] via-[#B5EAD7] to-[#C7CEEA] text-white rounded-2xl font-bold shadow-xl shadow-pink-100 hover:opacity-90 transition-all flex items-center gap-3 z-10"
        >
          <MessageSquare size={20} />
          <span>CONTACT ME</span>
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12">
        {[
          { title: '前端开发', icon: Code, desc: 'React, TypeScript, Tailwind', color: 'bg-[#FFB7B2]/20', textColor: 'text-pink-600' },
          { title: 'UI 设计', icon: Palette, desc: 'Figma, Adobe XD, Procreate', color: 'bg-[#B5EAD7]/20', textColor: 'text-emerald-600' },
          { title: '动效交互', icon: Zap, desc: 'Framer Motion, GSAP, Canvas', color: 'bg-[#C7CEEA]/20', textColor: 'text-purple-600' },
        ].map((skill, i) => (
          <div key={i} className={cn("p-8 rounded-3xl border border-white shadow-sm backdrop-blur-sm transition-transform hover:scale-105", skill.color)}>
            <skill.icon className={cn("mb-4", skill.textColor)} size={32} />
            <h3 className={cn("text-xl font-bold mb-2", skill.textColor)}>{skill.title}</h3>
            <p className="text-slate-500 font-medium">{skill.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="space-y-12 py-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black text-slate-800">CONTACT ME</h2>
        <p className="text-slate-500">期待与你的交流与合作</p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-10 bg-white rounded-[2.5rem] shadow-xl border border-slate-100 space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-500">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">电子邮件</div>
                <div className="text-lg font-bold text-slate-700">candyhe26@gmail.com</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-500">
                <Twitter size={24} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Twitter / X</div>
                <div className="text-lg font-bold text-slate-700">@candy_creative</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-500">
                <MessageSquare size={24} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">微信 / WeChat</div>
                <div className="text-lg font-bold text-slate-700">Candy_Studio_88</div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100">
            <p className="text-slate-400 leading-relaxed">
              无论是项目咨询、技术探讨，还是仅仅想打个招呼，我都非常欢迎。我通常会在 24 小时内回复邮件。
            </p>
          </div>
        </div>

        <div className="p-10 bg-slate-900 rounded-[2.5rem] shadow-xl text-white space-y-8">
          <h3 className="text-2xl font-bold">发送即时消息</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-2">你的名字</label>
              <input 
                type="text" 
                className="w-full px-6 py-4 bg-slate-800 rounded-2xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                placeholder="怎么称呼你？"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-2">你的留言</label>
              <textarea 
                rows={4}
                className="w-full px-6 py-4 bg-slate-800 rounded-2xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all resize-none"
                placeholder="你想对我说什么..."
              />
            </div>
            <button className="w-full py-5 bg-pink-500 text-white rounded-2xl font-bold shadow-lg shadow-pink-900/20 hover:bg-pink-600 transition-all active:scale-95 flex items-center justify-center gap-2">
              <Send size={20} />
              <span>发送消息</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function PortfolioSection() {
  const [sharingProject, setSharingProject] = useState<null | typeof projects[0]>(null);
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);
  const [copied, setCopied] = useState(false);
  const [uploadingFor, setUploadingFor] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, projectTitle: string) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadingFor(projectTitle);
      // Simulate upload
      setTimeout(() => {
        setUploadingFor(null);
        alert(`文件 "${file.name}" 已成功上传至项目: ${projectTitle}`);
      }, 1500);
    }
  };

  const projects = [
    { 
      title: '复古心形粉盒', 
      category: '1989 经典系列', 
      img: 'https://picsum.photos/seed/pollypocket-house/600/400', 
      color: 'from-pink-400 to-pink-500',
      description: '这是波莉口袋最经典的系列之一。心形的外壳打开后是一个温馨的小家，包含了客厅、厨房和卧室。每一个细节都充满了 80 年代的复古美感。',
      tech: ['ABS 塑料', '微缩模型', '铰链设计', '手工涂装'],
      gallery: ['https://picsum.photos/seed/pp-detail-1/400/300', 'https://picsum.photos/seed/pp-detail-2/400/300']
    },
    { 
      title: 'new 1“ doll Polly pocket', 
      category: '1" 娃娃系列', 
      img: 'https://picsum.photos/seed/pollypocket-doll/600/400', 
      color: 'from-purple-400 to-purple-500',
      description: '全新的 1 英寸微缩波莉娃娃系列。虽然体积更小，但细节依然精致，是口袋世界的灵魂人物。',
      tech: ['微缩工艺', '精细涂装', '可动关节'],
      gallery: ['https://picsum.photos/seed/pp-detail-3/400/300', 'https://picsum.photos/seed/pp-detail-4/400/300']
    },
    { 
      title: '3” doll Polly pocket', 
      category: '3" 经典系列', 
      img: 'https://picsum.photos/seed/pollypocket-vintage/600/400', 
      color: 'from-cyan-400 to-cyan-500',
      description: '经典的 3 英寸波莉娃娃，拥有更多的换装空间和互动细节，是收藏家们的最爱。',
      tech: ['经典比例', '多样配饰', '高耐用性'],
      gallery: ['https://picsum.photos/seed/pp-detail-5/400/300', 'https://picsum.photos/seed/pp-detail-6/400/300']
    },
    { 
      title: 'New ideas for Polly', 
      category: '创意设计', 
      img: 'https://picsum.photos/seed/pollypocket-collection/600/400', 
      color: 'from-yellow-400 to-yellow-500',
      description: '为波莉口袋注入的全新创意。探索更多未知的可能性，让微缩世界焕发新的生机。',
      tech: ['创新概念', '跨界设计', '未来趋势'],
      gallery: ['https://picsum.photos/seed/pp-detail-7/400/300', 'https://picsum.photos/seed/pp-detail-8/400/300']
    },
    { 
      title: '灵感来源', 
      category: '创意源泉', 
      img: 'https://picsum.photos/seed/pollypocket-aurora/600/400', 
      color: 'from-indigo-400 to-emerald-400',
      description: '每一个微缩世界的诞生都源于生活中的点滴灵感。这里记录了波莉口袋设计背后的故事与创意火花。',
      tech: ['情绪板', '手绘草图', '色彩研究', '故事板'],
      gallery: ['https://picsum.photos/seed/pp-aurora-1/400/300', 'https://picsum.photos/seed/pp-aurora-2/400/300']
    },
  ];

  const handleCopy = (title: string) => {
    const url = `${window.location.origin}/#${title}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12 py-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black text-slate-800">Polly Pocket 收藏展</h2>
        <p className="text-slate-500">带你回到那个充满梦想的微缩世界</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            onClick={() => setSelectedProject(project)}
            whileHover={{ 
              y: -12, 
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="group relative bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl border border-slate-100 transition-shadow duration-300 cursor-pointer"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start">
                <div>
                  <span className={cn("px-3 py-1 rounded-full text-xs font-bold text-white mb-2 inline-block bg-gradient-to-r", project.color)}>
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-800">{project.title}</h3>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSharingProject(project);
                    }}
                    className="p-3 bg-slate-50 rounded-full text-slate-400 hover:text-pink-400 hover:bg-pink-50 transition-colors"
                  >
                    <Share2 size={20} />
                  </button>
                  <label 
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 bg-slate-50 rounded-full text-slate-400 hover:text-orange-400 hover:bg-orange-50 transition-colors cursor-pointer relative"
                  >
                    {uploadingFor === project.title ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      >
                        <Zap size={20} />
                      </motion.div>
                    ) : (
                      <Upload size={20} />
                    )}
                    <input 
                      type="file" 
                      className="hidden" 
                      onChange={(e) => handleFileUpload(e, project.title)}
                    />
                  </label>
                  <button 
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 bg-slate-50 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full text-slate-400 hover:text-slate-600 transition-colors shadow-sm"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={selectedProject.img} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="p-10 space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className={cn("px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r", selectedProject.color)}>
                        {selectedProject.category}
                      </span>
                    </div>
                    <h3 className="text-4xl font-black text-slate-800">{selectedProject.title}</h3>
                    
                    <div className="flex gap-4">
                      <label className="flex items-center gap-3 px-6 py-3 bg-orange-400 text-white rounded-2xl font-bold shadow-lg shadow-orange-200 hover:bg-orange-500 transition-all cursor-pointer active:scale-95">
                        {uploadingFor === selectedProject.title ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          >
                            <Zap size={20} />
                          </motion.div>
                        ) : (
                          <Upload size={20} />
                        )}
                        <span>上传项目附件</span>
                        <input 
                          type="file" 
                          className="hidden" 
                          onChange={(e) => handleFileUpload(e, selectedProject.title)}
                        />
                      </label>
                      
                      <button 
                        onClick={() => setSharingProject(selectedProject)}
                        className="flex items-center gap-3 px-6 py-3 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-all active:scale-95"
                      >
                        <Share2 size={20} />
                        <span>分享项目</span>
                      </button>
                    </div>

                    <p className="text-lg text-slate-500 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">核心技术 / 特点</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t, i) => (
                        <span key={i} className="px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-sm font-medium border border-slate-100">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">细节展示</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProject.gallery.map((img, i) => (
                        <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-slate-100">
                          <img 
                            src={img} 
                            alt={`Detail ${i}`} 
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                    <button 
                      onClick={() => {
                        setSharingProject(selectedProject);
                        setSelectedProject(null);
                      }}
                      className="flex items-center gap-2 text-pink-400 font-bold hover:text-pink-500 transition-colors"
                    >
                      <Share2 size={20} />
                      <span>分享这个作品</span>
                    </button>
                    <button className="px-8 py-4 bg-slate-800 text-white rounded-2xl font-bold hover:bg-slate-700 transition-all active:scale-95">
                      访问项目主页
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Share Modal */}
      <AnimatePresence>
        {sharingProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSharingProject(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[2.5rem] p-10 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSharingProject(null)}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="space-y-8">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-black text-slate-800">分享作品</h3>
                  <p className="text-slate-500">将 "{sharingProject.title}" 分享给好友</p>
                </div>

                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex-1 truncate text-sm font-mono text-slate-500">
                    {window.location.origin}/#{sharingProject.title}
                  </div>
                  <button 
                    onClick={() => handleCopy(sharingProject.title)}
                    className={cn(
                      "p-3 rounded-xl transition-all",
                      copied ? "bg-green-100 text-green-600" : "bg-white text-slate-400 hover:text-slate-800 shadow-sm"
                    )}
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Twitter, label: 'Twitter', color: 'bg-cyan-50 text-cyan-500' },
                    { icon: Mail, label: 'Email', color: 'bg-pink-50 text-pink-500' },
                    { icon: Github, label: 'Github', color: 'bg-slate-50 text-slate-800' },
                  ].map((platform, i) => (
                    <button
                      key={i}
                      className={cn(
                        "flex flex-col items-center gap-2 p-4 rounded-2xl transition-transform active:scale-95",
                        platform.color
                      )}
                    >
                      <platform.icon size={24} />
                      <span className="text-xs font-bold">{platform.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function EventsSection() {
  const events = [
    { date: '2024.05.20', title: '创意编程分享会', location: '上海 · 线上', type: '演讲', color: 'bg-pink-400' },
    { date: '2024.06.15', title: 'UI 设计马拉松', location: '北京 · 线下', type: '工作坊', color: 'bg-purple-400' },
    { date: '2024.08.10', title: '前端技术峰会', location: '杭州 · 线下', type: '参展', color: 'bg-cyan-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="space-y-12 py-8">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h2 className="text-4xl font-black text-slate-800">活动足迹</h2>
        <p className="text-slate-500">分享、学习、成长</p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {events.map((event, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              x: 10,
              transition: { duration: 0.2 }
            }}
            className="flex flex-col md:flex-row items-center gap-6 p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-white shadow-lg hover:shadow-xl transition-all"
          >
            <div className={cn("w-20 h-20 shrink-0 rounded-2xl flex flex-col items-center justify-center text-white font-bold shadow-inner", event.color)}>
              <span className="text-xs opacity-80">EVENT</span>
              <span className="text-lg">#{i + 1}</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="text-sm font-bold text-slate-400 mb-1">{event.date}</div>
              <h3 className="text-2xl font-bold text-slate-800">{event.title}</h3>
              <div className="text-slate-500 flex items-center justify-center md:justify-start gap-2 mt-2">
                <span>{event.location}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span>{event.type}</span>
              </div>
            </div>
            <button className="px-6 py-3 bg-slate-800 text-white rounded-full font-bold text-sm hover:bg-slate-700 transition-colors shadow-md hover:shadow-lg active:scale-95">
              查看详情
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function ToolsSection() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('#FF9AA2');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string }[]>([]);

  const handleFolderUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileList = Array.from(files).map((file: File) => ({
        name: file.name,
        size: (file.size / 1024).toFixed(1) + ' KB'
      }));
      setUploadedFiles(fileList);
    }
  };

  const randomColor = () => {
    const colors = ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA'];
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  const macaronColors = [
    { name: '薄荷绿', hex: '#B5EAD7' },
    { name: '薰衣草', hex: '#C7CEEA' },
    { name: '蜜桃粉', hex: '#FFDAC1' },
    { name: '玫瑰粉', hex: '#FF9AA2' },
    { name: '柠檬黄', hex: '#FFFFD1' },
    { name: '天空蓝', hex: '#A0CED9' },
  ];

  const candyColors = [
    { name: '草莓红', hex: '#FF4D6D' },
    { name: '橘子橙', hex: '#FF9E00' },
    { name: '柠檬黄', hex: '#FFD60A' },
    { name: '青苹果', hex: '#38B000' },
    { name: '蓝莓蓝', hex: '#0077B6' },
    { name: '葡萄紫', hex: '#7209B7' },
  ];

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="space-y-12 py-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black text-slate-800">实验室小工具</h2>
        <p className="text-slate-500">一些有趣的交互实验</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Counter Tool */}
        <div className="p-10 bg-white rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center text-center space-y-6">
          <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">
            <Zap size={32} />
          </div>
          <h3 className="text-2xl font-bold">点击计数器</h3>
          <div className="text-6xl font-black text-slate-800">{count}</div>
          <div className="flex gap-4">
            <button 
              onClick={() => setCount(c => c + 1)}
              className="px-8 py-4 bg-pink-400 text-white rounded-2xl font-bold shadow-lg shadow-pink-200 hover:bg-pink-500 transition-all active:scale-95"
            >
              增加
            </button>
            <button 
              onClick={() => setCount(0)}
              className="px-8 py-4 bg-slate-100 text-slate-500 rounded-2xl font-bold hover:bg-slate-200 transition-all"
            >
              重置
            </button>
          </div>
        </div>

        {/* Color Tool */}
        <div className="p-10 bg-white rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center text-center space-y-6">
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-purple-500">
            <Palette size={32} />
          </div>
          <h3 className="text-2xl font-bold">糖果色生成器</h3>
          <motion.div 
            animate={{ backgroundColor: color }}
            className="w-32 h-32 rounded-3xl shadow-inner"
          />
          <div className="text-lg font-mono font-bold text-slate-500">{color}</div>
          <button 
            onClick={randomColor}
            className="px-8 py-4 bg-purple-400 text-white rounded-2xl font-bold shadow-lg shadow-purple-200 hover:bg-purple-500 transition-all active:scale-95"
          >
            随机颜色
          </button>
        </div>

        {/* Macaron Palette Tool */}
        <div className="md:col-span-2 p-10 bg-white rounded-[2.5rem] shadow-xl border border-slate-100 space-y-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-500">
              <Palette size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold">马卡龙色系</h3>
              <p className="text-slate-400">点击颜色块即可复制色值</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {macaronColors.map((color, i) => (
              <motion.button
                key={i}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => copyToClipboard(color.hex)}
                className="group relative flex flex-col items-center gap-3 p-4 rounded-3xl hover:bg-slate-50 transition-colors"
              >
                <div 
                  className="w-full aspect-square rounded-2xl shadow-sm border border-white"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="text-center">
                  <div className="text-sm font-bold text-slate-600">{color.name}</div>
                  <div className="text-xs font-mono text-slate-400">{color.hex}</div>
                </div>
                
                <AnimatePresence>
                  {copiedColor === color.hex && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-800 text-white text-[10px] font-bold rounded-full whitespace-nowrap"
                    >
                      已复制!
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Candy Palette Tool */}
        <div className="md:col-span-2 p-10 bg-white rounded-[2.5rem] shadow-xl border border-slate-100 space-y-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">
              <Palette size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold">糖果色色系</h3>
              <p className="text-slate-400">点击颜色块即可复制色值</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {candyColors.map((color, i) => (
              <motion.button
                key={i}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => copyToClipboard(color.hex)}
                className="group relative flex flex-col items-center gap-3 p-4 rounded-3xl hover:bg-slate-50 transition-colors"
              >
                <div 
                  className="w-full aspect-square rounded-2xl shadow-sm border border-white"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="text-center">
                  <div className="text-sm font-bold text-slate-600">{color.name}</div>
                  <div className="text-xs font-mono text-slate-400">{color.hex}</div>
                </div>
                
                <AnimatePresence>
                  {copiedColor === color.hex && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-800 text-white text-[10px] font-bold rounded-full whitespace-nowrap"
                    >
                      已复制!
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Folder Upload Tool */}
        <div className="md:col-span-2 p-10 bg-white rounded-[2.5rem] shadow-xl border border-slate-100 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                <Folder size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">文件夹资源扫描器</h3>
                <p className="text-slate-400">批量上传并预览文件夹内的文件</p>
              </div>
            </div>
            
            <label className="relative flex items-center gap-3 px-8 py-4 bg-orange-400 text-white rounded-2xl font-bold shadow-lg shadow-orange-200 hover:bg-orange-500 transition-all cursor-pointer active:scale-95">
              <Upload size={20} />
              <span>选择文件夹</span>
              <input
                type="file"
                className="hidden"
                // @ts-ignore
                webkitdirectory=""
                directory=""
                multiple
                onChange={handleFolderUpload}
              />
            </label>
          </div>

          {uploadedFiles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto p-2 pr-4 custom-scrollbar">
              {uploadedFiles.map((file, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.02 }}
                  className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4 group hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="p-2 bg-white rounded-lg text-orange-400 shadow-sm">
                    <FileText size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-slate-700 truncate">{file.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{file.size}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-20 border-2 border-dashed border-slate-100 rounded-[2rem] flex flex-col items-center justify-center text-slate-300 space-y-4">
              <Folder size={48} strokeWidth={1} />
              <p className="font-medium">暂无文件，请点击上方按钮选择文件夹</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BlogSection() {
  const [posts, setPosts] = useState([
    { id: 1, title: '波莉口袋的起源与演变', date: '2024.03.25', excerpt: '从 1983 年 Chris Wiggs 为女儿制作的第一个粉盒开始，波莉口袋已经走过了 40 年...', category: '收藏心得', likes: 128 },
    { id: 2, title: '如何修复老旧的微缩模型', date: '2024.03.10', excerpt: '面对泛黄的塑料和松动的铰链，我们可以通过这些专业的方法进行修复...', category: '技术分享', likes: 85 },
    { id: 3, title: '我的 2024 收藏清单', date: '2024.02.15', excerpt: '今年我计划收入这几款极其稀有的 90 年代发光系列...', category: '收藏清单', likes: 210 },
  ]);
  const [isPublishing, setIsPublishing] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', excerpt: '', category: '收藏心得' });

  const handlePublish = () => {
    if (!newPost.title || !newPost.excerpt) return;
    const post = {
      id: posts.length + 1,
      ...newPost,
      date: new Date().toLocaleDateString().replace(/\//g, '.'),
      likes: 0
    };
    setPosts([post, ...posts]);
    setIsPublishing(false);
    setNewPost({ title: '', excerpt: '', category: '收藏心得' });
  };

  return (
    <div className="space-y-12 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-4xl font-black text-slate-800">波莉日志</h2>
          <p className="text-slate-500">记录收藏点滴，分享微缩快乐</p>
        </div>
        <button 
          onClick={() => setIsPublishing(true)}
          className="flex items-center gap-2 px-8 py-4 bg-orange-400 text-white rounded-[2rem] font-bold shadow-lg shadow-orange-200 hover:bg-orange-500 transition-all active:scale-95"
        >
          <Plus size={20} />
          <span>发表文章</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group p-8 bg-white/60 backdrop-blur-sm rounded-[2.5rem] border border-white shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-orange-100 text-orange-500 text-xs font-bold rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm font-bold text-slate-400">{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-4 self-end md:self-start">
                <button className="flex items-center gap-2 text-slate-400 hover:text-pink-400 transition-colors">
                  <Zap size={18} />
                  <span className="text-sm font-bold">{post.likes}</span>
                </button>
                <button className="p-3 bg-slate-50 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors">
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Publish Modal */}
      <AnimatePresence>
        {isPublishing && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPublishing(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] p-10 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsPublishing(false)}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="space-y-8">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-black text-slate-800">发表新文章</h3>
                  <p className="text-slate-500">分享你的波莉故事</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 ml-2">文章标题</label>
                    <input 
                      type="text"
                      value={newPost.title}
                      onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                      placeholder="输入一个吸引人的标题..."
                      className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 ml-2">文章分类</label>
                    <select 
                      value={newPost.category}
                      onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                      className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all appearance-none"
                    >
                      <option>收藏心得</option>
                      <option>技术分享</option>
                      <option>收藏清单</option>
                      <option>日常闲聊</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 ml-2">文章摘要</label>
                    <textarea 
                      rows={4}
                      value={newPost.excerpt}
                      onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                      placeholder="简单介绍一下你的文章内容..."
                      className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all resize-none"
                    />
                  </div>
                </div>

                <button 
                  onClick={handlePublish}
                  className="w-full py-5 bg-orange-400 text-white rounded-2xl font-bold shadow-lg shadow-orange-200 hover:bg-orange-500 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  <span>立即发表</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
