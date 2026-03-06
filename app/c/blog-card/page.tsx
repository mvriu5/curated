import { BlogCard } from "@/registry/new-york/blocks/blog-card/blog-card"

export default function BlogCardPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <BlogCard
        previewImage={{
          src: "/blog-card-image.jpg",
          alt: "Desk with notebook and coffee",
        }}
      />
    </main>
  )
}
