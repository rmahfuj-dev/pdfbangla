"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

type BookType = {
  _id: string;
  name: {
    en: string;
    bn: string;
  };
  writer: {
    en: string;
    bn: string;
  };
  slug: string;
  image: string;
};

const BookCard = ({ name, writer, slug, image }: BookType) => {
  return (
    <a href={`/books/${slug}`}>
      <Card className="group w-[250]  h-[420px] overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
        {/* Image Section (75%) */}
        <div className="relative h-[75%] w-full overflow-hidden">
          <Image
            src={image}
            alt={name.en}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content Section (25%) */}
        <div className="h-[25%] p-4 bg-white flex flex-col justify-center items-center">
          <h2 className="text-base font-semibold leading-tight line-clamp-2">
            {name.en}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">{writer.en}</p>
        </div>
      </Card>
    </a>
  );
};

export default BookCard;
