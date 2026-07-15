import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pin, Eye } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

interface Notice {
  id: string;
  title: string;
  content: string;
  category: string;
  is_pinned: boolean;
  view_count: number;
  created_at: string;
  updated_at: string;
  author_id: string;
}

interface NoticeCardProps {
  notice: Notice;
  onClick: () => void;
}

export function NoticeCard({ notice, onClick }: NoticeCardProps) {
  return (
    <Card 
      className={`cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.01] border border-gray-200 dark:border-charcoal-700 bg-white/80 dark:bg-charcoal-800/80 backdrop-blur-sm ${
        notice.is_pinned ? 'ring-2 ring-mint-400/50 bg-mint-50/30 dark:bg-mint-900/20' : ''
      }`}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              {notice.is_pinned && (
                <Pin className="w-4 h-4 text-mint-600 dark:text-mint-400 fill-current" />
              )}
              <Badge variant="secondary" className="text-xs bg-lavender-100 dark:bg-lavender-900/50 text-lavender-800 dark:text-lavender-200 border-lavender-300 dark:border-lavender-700">
                {notice.category}
              </Badge>
            </div>
            
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 truncate">
              {notice.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-3">
              {notice.content}
            </p>
            
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
              <span>
                {formatDistanceToNow(new Date(notice.created_at), { 
                  addSuffix: true, 
                  locale: ko 
                })}
              </span>
              
              <div className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                <span>{notice.view_count}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}