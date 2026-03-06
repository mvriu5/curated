"use client"

import { BookmarkIcon, type BookmarkIconHandle } from "@/components/ui/bookmark-icon"
import { Button } from "@/registry/new-york/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { CursorPointer02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

interface PreviewImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

interface BlogCardProps {
  previewImage: PreviewImageProps
}

export function BlogCard({ previewImage }: BlogCardProps) {
  const hasFixedImageSize =
    typeof previewImage.width === "number" &&
    typeof previewImage.height === "number"
  const [open, setOpen] = useState(false)

    const ref = useRef<BookmarkIconHandle>(null)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <>
      {!open && (
        <motion.button
          type="button"
          onClick={() => setOpen(true)}
          whileHover={{ y: -4, scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
            className="w-full max-w-md text-left"
            onMouseEnter={() => ref.current?.startAnimation()}
		onMouseLeave={() => ref.current?.stopAnimation()}
        >
          <motion.div layoutId="blog-card-shell">
            <Card className="gap-4 overflow-hidden py-0">
              <motion.div
                layoutId="blog-card-image-wrap"
                className="relative h-32 w-full overflow-hidden ring ring-border shadow-sm"
              >
                {hasFixedImageSize ? (
                  <Image
                    src={previewImage.src}
                    alt={previewImage.alt}
                    width={previewImage.width!}
                    height={previewImage.height!}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={previewImage.src}
                    alt={previewImage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover"
                  />
                )}
              </motion.div>
                <CardHeader className="px-4 pb-0">
                <motion.div layoutId="blog-card-title-wrap">
                    <p className="font-mono text-xs text-black/50 tracking-tight">06. Mar 2026</p>
                <CardTitle className="flex items-center gap-1 text-2xl font-medium font-matesc">
                    <HugeiconsIcon icon={CursorPointer02Icon} size={20} className="mt-1 text-black/75"/>
                    design better products
                  </CardTitle>
                </motion.div>
                <motion.div layoutId="blog-card-description-wrap">
                  <CardDescription className="font-matesc text-md">
                    5 practical changes that reduced drop-off in our first session. Lorem ipsum sit est Caesar vivarum.
                  </CardDescription>
                </motion.div>
              </CardHeader>
                <motion.div
                  layoutId="blog-card-meta-wrap"
                  transition={{ type: "spring", stiffness: 220, damping: 30 }}
                >
                  <CardFooter className="gap-2 px-4 pb-4 pt-2 text-right font-mono text-xs tracking-tight text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <BookmarkIcon size={14} ref={ref} className="text-[#d08c63]/50" />
                      <p className="text-[#d08c63]">6 min read </p>
                    </div>
                    <div className="mt-0.5 h-px w-full flex-1 bg-[#d08c63]/20" />
                  </CardFooter>
                </motion.div>
            </Card>
          </motion.div>
        </motion.button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          >
            <motion.div
              initial={{ scaleX: 0.96 }}
              animate={{ scaleX: 1.06 }}
              exit={{ scaleX: 0.96 }}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
              className="w-full max-w-md"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Blog post preview"
            >
              <motion.div
                layoutId="blog-card-shell"
                transition={{ type: "spring", stiffness: 240, damping: 32 }}
              >
                <Card className="gap-4 overflow-hidden py-0">
                  <motion.div
                    layoutId="blog-card-image-wrap"
                    className="relative h-32 w-full overflow-hidden ring ring-border shadow-sm"
                  >
                    {hasFixedImageSize ? (
                      <Image
                        src={previewImage.src}
                        alt={previewImage.alt}
                        width={previewImage.width!}
                        height={previewImage.height!}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Image
                        src={previewImage.src}
                        alt={previewImage.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 768px"
                        className="object-cover"
                      />
                    )}
                  </motion.div>
                  <CardHeader className="px-4 pb-0">
                    <motion.div
                      layoutId="blog-card-title-wrap"
                      transition={{ type: "spring", stiffness: 220, damping: 30 }}
                    >
                      <p className="font-mono text-xs tracking-tight text-black/50">
                        06. Mar 2026
                      </p>
                      <CardTitle className="flex items-center gap-1 font-matesc text-2xl font-medium">
                        <HugeiconsIcon
                          icon={CursorPointer02Icon}
                          size={20}
                          className="mt-1 text-black/75"
                        />
                        design better products
                      </CardTitle>
                    </motion.div>
                    <motion.div layoutId="blog-card-description-wrap">
                      <CardDescription className="font-matesc text-md">
                        5 practical changes that reduced drop-off in our first session. Lorem
                        ipsum sit est Caesar vivarum.
                        Small changes in onboarding can have an outsized impact. In this article, we
                        walk through five UX adjustments that improved activation, shortened
                        time-to-value, and increased retention after week one.
                      </CardDescription>
                    </motion.div>
                  </CardHeader>
                  <motion.div
                    layoutId="blog-card-meta-wrap"
                    transition={{ type: "spring", stiffness: 220, damping: 30 }}
                  >
                    <CardFooter className="gap-2 px-4 pt-2 text-right font-mono text-xs tracking-tight text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <BookmarkIcon size={14} className="text-[#d08c63]/50" />
                        <p className="text-[#d08c63]">6 min read </p>
                      </div>
                      <div className="mt-0.5 h-px w-full flex-1 bg-[#d08c63]/20" />
                    </CardFooter>
                  </motion.div>
                  <CardFooter className="flex justify-end gap-2 px-4 pb-4">
                    <Button
                      variant="outline"
                      onClick={() => setOpen(false)}
                      className="
                        rounded-md border border-black/10
                        bg-linear-to-b from-white to-black/5
                        text-black/65 text-shadow-xs
                        shadow-[0_2px_0_#000000,0_6px_12px_rgba(255,255,255,0.18),inset_0_1px_0_rgba(255,255,255,0.5)]/20
                        transition-all
                        hover:brightness-[1.03]
                        active:translate-y-px
                        active:shadow-[0_1px_0_#000000,0_3px_8px_rgba(255,255,255,0.14),inset_0_1px_0_rgba(255,255,255,0.45)]/20
                      "
                    >
                      Close
                    </Button>
                    <Button
                      className="
                        rounded-md border border-[#d79b74]
                        bg-linear-to-b from-[#f6c5a8] to-[#f0ad7f]
                        text-white text-shadow-xs
                        shadow-[0_2px_0_#d79b74,0_6px_12px_rgba(135,88,20,0.18),inset_0_1px_0_rgba(255,255,255,0.5)]
                        transition-all
                        hover:brightness-[1.07]
                        active:translate-y-px
                        active:shadow-[0_1px_0_#d79b74,0_3px_8px_rgba(135,88,20,0.14),inset_0_1px_0_rgba(255,255,255,0.45)]
                      "
                    >
                      Read full article
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
