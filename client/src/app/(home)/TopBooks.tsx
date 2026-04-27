import BookCard from "@/components/BookCard";
import Container from "@/components/Container";
import React from "react";
const getBooks = async () => {
  const res = await fetch("http://localhost:5000/books");
  return res.json();
};

const TopBooks = async () => {
  const books = await getBooks();
  console.log("This is books list", books);
  type booktype = {
    _id: string;
    name: {
      en: string;
      bn: string;
    };
    writer: {
      en: string;
      bn: string;
    };
    link: string;
    slug: string;
    image: string;
    genre: string;
  };
  return (
    <section className="bg-secondary">
      <Container>
        <h1 className="mb-10 text-3xl text-center font-semibold">Top Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center">
          {books.map((book: booktype) => (
            <BookCard key={book._id} {...book} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TopBooks;
