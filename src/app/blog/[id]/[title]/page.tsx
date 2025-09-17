import BlogCard from './components/BlogCard';

export default function BlogPost({ params }: { params: { id: string; title: string } }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Detail Blog</h1>
      <BlogCard id={params.id} title={params.title} />
    </div>
  );
}