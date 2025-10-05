import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BlogCard } from "@/components/blog-card";
import { FeaturedPost } from "@/components/featured-post";

// Temporary mock data - replace with actual data later
const featuredPosts = [
  {
    id: "1",
    title: "Top Hidden Gems: Must-Visit Spots This Year",
    date: "August 7, 2017",
    imageUrl: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=80&h=80&fit=crop",
    slug: "top-hidden-gems-must-visit-spots-this-year",
  },
  {
    id: "2",
    title: "Bucket List: 25 Adventures for Every Traveler",
    date: "March 23, 2013",
    imageUrl: "https://images.unsplash.com/photo-1682687220795-796d3f6f7000?w=80&h=80&fit=crop",
    slug: "bucket-list-25-adventures-for-every-traveler",
  },
  {
    id: "3",
    title: "Travel Like a Local: Tips for Authentic Experiences",
    date: "May 31, 2015",
    imageUrl: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=80&h=80&fit=crop",
    slug: "travel-like-a-local-tips-for-authentic-experiences",
  },
];

const blogPosts = [
  {
    id: "1",
    title: "Wanderlust Unleashed: Top Hidden Gems You Must Visit This Year",
    description:
      "Discover unique, off-the-radar destinations around the world that offer breathtaking scenery and unforgettable experiences.",
    category: "Health & Nutrition",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    slug: "wanderlust-unleashed-top-hidden-gems-you-must-visit-this-year",
  },
  {
    id: "2",
    title: "Travel Bucket List: 25 Destinations for Every Adventurer",
    description:
      "Explore a curated list of must-visit places for every kind of traveler, whether you love mountains, beaches, or cultural landmarks.",
    category: "Sustainability",
    imageUrl: "https://images.unsplash.com/photo-1682687220891-3f9e88c95235?w=400&h=300&fit=crop",
    slug: "travel-bucket-list-25-destinations-for-every-adventurer",
  },
  {
    id: "3",
    title: "How to Travel Like a Local: Insider Tips for Authentic Experiences",
    description:
      "Learn how to immerse yourself in the culture of each place you visit by following these insider tips. From dining at local spots to embracing community traditions.",
    category: "Cultural Insights",
    imageUrl: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=400&h=300&fit=crop",
    slug: "how-to-travel-like-a-local-insider-tips-for-authentic-experiences",
  },
];

const latestPosts = [
  {
    id: "4",
    title: "Budget Travel Hacks: How to Explore the World Without Breaking the Bank",
    date: "October 24, 2024",
    imageUrl: "https://images.unsplash.com/photo-1682687220198-88e9bdea9931?w=80&h=80&fit=crop",
    slug: "budget-travel-hacks-explore-world-without-breaking-bank",
  },
  {
    id: "5",
    title: "Digital Nomad Life: Working Remotely While Traveling the Globe",
    date: "September 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1682687220015-186f63b8850a?w=80&h=80&fit=crop",
    slug: "digital-nomad-life-working-remotely-while-traveling",
  },
];

const techTopics = ["TypeScript", "React", "Next.js", "Docker", "Node.js", "PostgreSQL"];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          {/* Tech Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {techTopics.map((topic) => (
              <Badge key={topic} variant="secondary" className="text-sm px-3 py-1">
                {topic}
              </Badge>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-2 max-w-xl mx-auto">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input type="text" placeholder="Search topics..." className="pl-10 h-11" />
            </div>
            <Button size="lg" className="bg-[#4F46E5] hover:bg-[#4338CA] h-11 px-6">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          {/* Blog Posts Grid */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Featured Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">Featured</h3>
              <div className="space-y-4">
                {featuredPosts.map((post) => (
                  <FeaturedPost key={post.id} {...post} />
                ))}
              </div>
            </div>

            {/* Latest Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">Latest</h3>
              <div className="space-y-4">
                {latestPosts.map((post) => (
                  <FeaturedPost key={post.id} {...post} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
