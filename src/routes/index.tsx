import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, Sparkles, Users, Heart, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "bala — Building for Women in AI" },
      {
        name: "description",
        content: "陪伴 250+ 女性，用 AI 创造属于自己的作品。bala 的个人网站。",
      },
      { property: "og:title", content: "bala — Building for Women in AI" },
      {
        property: "og:description",
        content: "陪伴 250+ 女性，用 AI 创造属于自己的作品。",
      },
    ],
  }),
  component: Index,
});

const skills = [
  "AI 工具应用",
  "社区运营",
  "内容创作",
  "产品思维",
  "女性赋能",
  "工作坊设计",
];

const projects = [
  {
    title: "250 女性 AI 共创计划",
    tag: "Community",
    description:
      "联合 250+ 位女性，从零开始学习 AI 工具，并完成属于自己的第一个作品。一场关于勇气与创造力的集体实验。",
    cta: "了解更多",
  },
  {
    title: "女性社区主理人手册",
    tag: "Playbook",
    description:
      "把多年运营女性社区的经验沉淀成一本可复用的手册，从 0 到 1 帮助更多人开启自己的社区。",
    cta: "阅读手册",
  },
  {
    title: "AI × 她故事 播客",
    tag: "Podcast",
    description:
      "对话女性创作者、创业者与研究者，记录她们与 AI 共处、用 AI 创造的真实故事。",
    cta: "收听节目",
  },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Web fonts */}
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin=""
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..700&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Floating glow orbs */}
      <div
        aria-hidden
        className="pointer-events-none fixed top-[-10%] left-[-10%] h-[40rem] w-[40rem] rounded-full bg-primary/20 blur-[120px] animate-float"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed bottom-[-15%] right-[-10%] h-[35rem] w-[35rem] rounded-full bg-accent/20 blur-[120px] animate-float delay-300"
      />

      {/* Nav */}
      <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#top" className="flex items-center gap-2 font-display text-xl font-medium">
          <span className="inline-block h-2 w-2 rounded-full bg-primary shadow-glow animate-pulse-glow" />
          bala
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#about" className="transition-smooth hover:text-foreground">About</a>
          <a href="#skills" className="transition-smooth hover:text-foreground">Skills</a>
          <a href="#projects" className="transition-smooth hover:text-foreground">Projects</a>
          <a href="#contact" className="transition-smooth hover:text-foreground">Contact</a>
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-foreground backdrop-blur transition-smooth hover:border-primary hover:text-primary md:inline-block"
        >
          合作邀请
        </a>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-start px-6 pb-32 pt-20 md:pt-32"
      >
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          女性社区主理人 · AI 探索者
        </div>

        <h1 className="animate-fade-up delay-100 mt-8 font-display text-5xl font-light leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          AI Builds for{" "}
          <span className="text-gradient italic">Womxn</span>
        </h1>

        <p className="animate-fade-up delay-200 mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          我是 bala — 陪伴 <span className="text-foreground">250+ 女性</span>，用 AI
          创造属于自己的作品。相信技术应该让更多她，被看见、被听见、被赋能。
        </p>

        <div className="animate-fade-up delay-300 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-smooth hover:scale-[1.03] hover:shadow-elegant"
          >
            一起创造点什么
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm text-foreground transition-smooth hover:border-primary hover:text-primary"
          >
            看看我在做什么
          </a>
        </div>

        {/* Stats strip */}
        <div className="animate-fade-up delay-500 mt-20 grid w-full max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8">
          {[
            { num: "250+", label: "女性共创者" },
            { num: "1", label: "正在生长的社区" },
            { num: "∞", label: "种可能性" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-light text-gradient md:text-4xl">
                {s.num}
              </div>
              <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-primary">About</div>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight md:text-5xl">
              关于<br />
              <span className="italic text-gradient">我</span>
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              我在做的事情很简单 — 经营一个属于女性的社区，让 AI 不再是
              <span className="text-foreground"> 少数人的语言</span>，而是每位女性都能掌握的工具。
            </p>
            <p>
              过去一段时间，我和 <span className="text-foreground">250 位女性</span>
              一起学习与练习 AI 技能，从写第一个 prompt，到完成一件可以骄傲分享的作品。
              我看见她们眼里重新亮起来的光。
            </p>
            <p>
              我关注 <span className="text-foreground">「AI 与女性」</span>这个交叉地带 —
              因为我相信，当技术与温度相遇，会长出意想不到的东西。
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-primary">Skills</div>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight md:text-5xl">
              我擅长的
            </h2>
          </div>
          <p className="mt-4 max-w-md text-muted-foreground md:mt-0">
            把 AI、社区与女性力量编织在一起。
          </p>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <span
              key={skill}
              style={{ animationDelay: `${i * 80}ms` }}
              className="animate-fade-up cursor-default rounded-full border border-border bg-card/40 px-5 py-2.5 text-sm text-muted-foreground backdrop-blur transition-smooth hover:-translate-y-1 hover:border-primary hover:bg-primary/10 hover:text-foreground hover:shadow-glow"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-primary">Projects</div>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight md:text-5xl">
              我正在做的事
            </h2>
          </div>
          <p className="mt-4 max-w-sm text-muted-foreground md:mt-0">
            每一个项目，都是写给「她」的一封情书。
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              style={{ animationDelay: `${i * 120}ms` }}
              className="card-hover animate-fade-up group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-7 backdrop-blur"
            >
              {/* Decorative icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-smooth group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                {i === 0 ? <Users className="h-5 w-5" /> : i === 1 ? <Sparkles className="h-5 w-5" /> : <Heart className="h-5 w-5" />}
              </div>

              <div className="text-xs uppercase tracking-wider text-primary/80">{p.tag}</div>
              <h3 className="mt-2 font-display text-2xl font-medium leading-tight text-foreground">
                {p.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>

              <button className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-foreground transition-smooth group-hover:text-primary">
                {p.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 mx-auto max-w-4xl px-6 py-32">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/50 p-10 text-center backdrop-blur md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{ background: "var(--gradient-bg)" }}
          />
          <div className="relative">
            <div className="text-sm uppercase tracking-[0.2em] text-primary">Contact</div>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight md:text-6xl">
              如果你也相信 <br />
              <span className="italic text-gradient">她</span> 与 AI 的故事
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground">
              欢迎合作、聊聊、一起折腾点什么。一封邮件就够了。
            </p>

            <a
              href="mailto:0xbalala@gmail.com"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-glow transition-smooth hover:scale-[1.03] hover:shadow-elegant"
            >
              <Mail className="h-5 w-5" />
              0xbalala@gmail.com
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mx-auto max-w-6xl px-6 py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} bala · Made with{" "}
        <Heart className="inline h-3.5 w-3.5 fill-primary text-primary" /> for women in AI
      </footer>
    </main>
  );
}
