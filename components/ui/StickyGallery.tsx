import ArticleCard, { type ArticleData } from './ArticleCard';

interface StickyGalleryProps {
  stickyArticle: ArticleData;
  articles: ArticleData[];
}

export default function StickyGallery({ stickyArticle, articles }: StickyGalleryProps) {
  const mid = Math.ceil(articles.length / 2);
  const leftColumn = articles.slice(0, mid);
  const rightColumn = articles.slice(mid);

  return (
    <div className="gallery">
      <div className="left">
        <div className="img img-left sticky">
          <ArticleCard {...stickyArticle} variant="medium" />
        </div>
      </div>
      <div className="right">
        <div className="column">
          {leftColumn.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
        <div className="column">
          {rightColumn.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}
