import { ArrowUpRight, Clock3, Play, Sparkles } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';

const longVideo = {
  title: 'Full Platform Walkthrough',
  description:
    'Follow the complete workflow from matching with the right funding call and assembling a consortium to developing a submission ready proposal.',
  embedUrl: 'https://www.youtube-nocookie.com/embed/-q7EZzowLTE?rel=0',
  youtubeUrl: 'https://youtu.be/-q7EZzowLTE',
};

const shortVideo = {
  title: 'Horizon Europe in Brief',
  description:
    'A quick introduction to the opportunity for Korean research teams and how Insight Matches makes EU funding easier to pursue.',
  embedUrl: 'https://www.youtube-nocookie.com/embed/ftbdr2dDQ5M?rel=0',
  youtubeUrl: 'https://youtube.com/shorts/ftbdr2dDQ5M',
};

const ResourcesVideos = () => {
  const videoObjectSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'VideoObject',
          name: 'Insight Matches Full Platform Walkthrough',
          description: longVideo.description,
          thumbnailUrl: 'https://img.youtube.com/vi/-q7EZzowLTE/maxresdefault.jpg',
          embedUrl: longVideo.embedUrl,
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'VideoObject',
          name: 'Insight Matches Horizon Europe Quick Overview',
          description: shortVideo.description,
          thumbnailUrl: 'https://img.youtube.com/vi/ftbdr2dDQ5M/maxresdefault.jpg',
          embedUrl: shortVideo.embedUrl,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <SEO
        title="See Insight Matches in Action | Platform Videos"
        description="See how Insight Matches helps research teams find Horizon Europe funding, assemble international consortia and develop competitive proposals with AI."
        canonical="/resources/videos"
        jsonLd={videoObjectSchema}
      />
      <Navbar />

      <main>
        <section className="relative border-b border-slate-200 bg-gradient-to-b from-sky-50 via-white to-slate-50 pb-20 pt-28 text-slate-950 dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 dark:text-white sm:pt-32 lg:pb-28">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-sky-400/15 blur-[120px] dark:bg-sky-500/10" />
            <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-emerald-300/20 blur-[100px] dark:bg-emerald-400/10" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-4xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300">
                <Sparkles className="h-3.5 w-3.5" />
                Platform videos
              </div>
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
                See how research ideas become
                <span className="block bg-gradient-to-r from-sky-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent dark:from-sky-300 dark:via-cyan-300 dark:to-emerald-300">
                  fundable EU projects
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
                Discover how Insight Matches helps teams find the right calls, connect with international partners and build stronger proposals with AI.
              </p>
            </div>

            <article className="mx-auto max-w-6xl">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_100px_-35px_rgba(14,165,233,0.45)] dark:border-white/10 dark:bg-slate-900 dark:shadow-[0_30px_100px_-35px_rgba(14,165,233,0.65)] sm:rounded-3xl">
                <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100/90 px-4 py-3 dark:border-white/10 dark:bg-slate-900/90">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                  <span className="ml-3 text-xs font-medium text-slate-500 dark:text-slate-400">Insight Matches platform walkthrough</span>
                </div>
                <div className="relative aspect-video bg-black">
                  <iframe
                    src={longVideo.embedUrl}
                    title="Insight Matches full platform walkthrough"
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-3xl">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-sky-700 dark:text-sky-300">
                    <Play className="h-4 w-4 fill-current" /> Featured walkthrough
                  </div>
                  <h2 className="text-2xl font-semibold sm:text-3xl">{longVideo.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{longVideo.description}</p>
                </div>
                <a
                  href={longVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-sky-400 hover:bg-sky-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:shadow-none dark:hover:border-sky-300/50 dark:hover:bg-sky-400/10"
                >
                  Open on YouTube <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="relative py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-20 lg:px-8">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-400">
                <Clock3 className="h-4 w-4" /> Short on time?
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">The opportunity in under a minute</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">{shortVideo.description}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {['Find matching calls', 'Connect with partners', 'Draft with AI'].map((label, index) => (
                  <div key={label} className="border-l-2 border-sky-500 pl-4">
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">0{index + 1}</div>
                    <div className="mt-1 text-sm font-semibold">{label}</div>
                  </div>
                ))}
              </div>

              <a
                href={shortVideo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-85"
              >
                Watch the Short <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-[320px] lg:max-w-none">
              <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-sky-400/20 to-emerald-400/20 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[2.25rem] border-[7px] border-slate-900 bg-black shadow-2xl ring-1 ring-slate-900/15 dark:border-slate-950">
                <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-900 dark:bg-slate-950" aria-hidden="true" />
                <div className="relative aspect-[9/16]">
                  <iframe
                    src={shortVideo.embedUrl}
                    title="Insight Matches Horizon Europe quick overview"
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ResourcesVideos;
