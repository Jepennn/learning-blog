import Image from "next/image";
import Link from "next/link";

interface FeaturedPostProps {
  title: string;
  date: string;
  imageUrl: string;
  slug: string;
}

export function FeaturedPost({ title, date, imageUrl, slug }: FeaturedPostProps) {
  return (
    <Link href={`/blog/${slug}`} className="group flex gap-3">
      <div className="relative size-16 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted-foreground mb-1">{date}</p>
        <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h4>
      </div>
    </Link>
  );
}
