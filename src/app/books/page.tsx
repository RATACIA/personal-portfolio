"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
interface Book {
  id: number;
  title: string;
  author: string;
  publish_date: string;
  description: string;
  image_url?: string;
  is_favourite: boolean;
}

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://dev.sirina-shop.ro/my-api/index.php"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data: Book[] = await response.json();
        setBooks(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Book List</h1>
      {books.map((book) => (
        <div className="" key={book.id}>
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <span>
            {new Date(book.publish_date)
              .toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })
              .replace(/,/g, "")}
          </span>
          <div>
            <span>{book.author}</span>
            <div className="">
              <Image
                src={book.image_url}
                alt="Book cover"
                width={120}
                height={80}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
