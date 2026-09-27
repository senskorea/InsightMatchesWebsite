import { Linkedin, ExternalLink, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import newsData from '@/data/news.json';

type Lang = 'en' | 'fr' | 'ko';

interface NewsItem {
  id: string;
  date: string;
  image?: string;
  type?: 'press' | 'linkedin';
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  url: string;
}

interface Props {
  lang: Lang;
  labels: {
    readMore: string;
    followLinkedIn: string;
    source: string;
    empty: string;
  };
}

const localeMap: Record<Lang, string> = { en: 'en-US', fr: 'fr-FR', ko: 'ko-KR' };

export const NewsList = ({ lang, labels }: Props) => {
  const items = [...(newsData as NewsItem[])].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="space-y-6">
      <a
        href="https://www.linkedin.com/company/insightmatches/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex"
      >
        <Button variant="outline" className="gap-2">
          <Linkedin className="w-4 h-4" />
          {labels.followLinkedIn}
        </Button>
      </a>

      {items.length === 0 ? (
        <div className="text-center p-12 rounded-xl bg-card border border-border">
          <p className="text-muted-foreground">{labels.empty}</p>
        </div>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id}>
              <article className="rounded-xl bg-card border border-border hover:border-primary transition-colors overflow-hidden">
                {item.image && (
                  <div className="w-full aspect-video bg-muted">
                    <img
                      src={item.image}
                      alt={item.title[lang]}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    {item.url.startsWith('/') ? (
                      <span className="inline-flex items-center gap-1 text-primary font-medium">
                        <FileText className="w-4 h-4" />
                        <span>{lang === 'ko' ? '공식 보도자료' : lang === 'fr' ? 'Communiqué officiel' : 'Official Press Release'}</span>
                      </span>
                    ) : (
                      <>
                        <Linkedin className="w-4 h-4" />
                        <span>{labels.source}</span>
                      </>
                    )}
                    <span>·</span>
                    <time dateTime={item.date}>
                      {new Date(item.date).toLocaleDateString(localeMap[lang], {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{item.title[lang]}</h2>
                  <p className="text-muted-foreground mb-4">{item.excerpt[lang]}</p>
                  {item.url.startsWith('/') ? (
                    <Link
                      to={item.url}
                      className="inline-flex items-center gap-1 text-primary hover:underline text-sm font-semibold"
                    >
                      {lang === 'ko' ? '보도자료 전문 보기' : lang === 'fr' ? 'Lire le communiqué complet' : 'Read Full Press Release'}
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  ) : (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline text-sm font-medium"
                    >
                      {labels.readMore}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
