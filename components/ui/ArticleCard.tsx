import Image from 'next/image';

export interface ArticleData {
  id: string;
  image: string;
  subtitle: string;
  title: string;
  author: string;
  date: string;
}

interface ArticleCardProps extends ArticleData {
  variant?: 'small' | 'medium' | 'large';
}

export default function ArticleCard({
  image,
  subtitle,
  title,
  author,
  date,
  variant = 'small'
}: ArticleCardProps) {
  if (variant === 'large') {
    return (
      <div className="header">
        <p className="subtitle">{subtitle}</p>
        <h3>{title}</h3>
        <p className="subtitle">
          {author} {date}
        </p>
      </div>
    );
  }

  if (variant === 'medium') {
    return (
      <div className="header-medium">
        <p className="subtitle">{subtitle}</p>
        <h2>{title}</h2>
        <p className="author-medium subtitle">
          {author} {date}
        </p>
      </div>
    );
  }

  return (
    <>
      <Image
        className="img"
        src={image}
        alt={title}
        width={500}
        height={750}
        style={{ width: '100%', height: 'auto' }}
      />
      <div className="header-small">
        <p className="subtitle">{subtitle}</p>
        <h4>{title}</h4>
        <p className="author subtitle">
          {author} {date}
        </p>
      </div>
    </>
  );
}
