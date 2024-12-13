"use client"

import { Carousel, CarouselContent } from "@/components/ui/carousel"

export const TemplatesGallery = () => {
    return (
        <div className="bg-[#f1f3f4]">
            <div className="max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-y-4">
                <h3 className="font-medium">
                    Start a new document
                </h3>
                <Carousel>
                    <CarouselContent className="-ml-4">

                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}