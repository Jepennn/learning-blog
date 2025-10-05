import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  slug: string;
}

export function BlogCard({ title, description, category, imageUrl, slug }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group">
      <Card className="overflow-hidden transition-all hover:shadow-lg border-border h-full">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-white text-foreground">
              {category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
