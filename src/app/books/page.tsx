"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import ArrowLeft from "@/assets/icons/left-arrow.svg";

interface Book {
  id: number;
  title: string;
  author: string;
  publish_date: string;
  description: string;
  image_url?: string;
  is_favourite: string;
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
        console.log("Raw API data:", data);
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
      <Link href="/" className="flex flex-row gap-3">
        <ArrowLeft />
        <span>go back</span>
      </Link>
      <h1 className="text-3xl font-semibold text-center mt-4">Book List</h1>
      {books.map((book) => {
        console.log("Book object:", book);

        return (
          <div key={book.id} className="flex flex-col items-center space-y-6">
            <div
              className={`border rounded-3xl shadow-lg overflow-hidden p-6 mt-5 flex flex-col md:flex-row md:items-center w-full md:w-3/4 lg:w-1/2 ${
                book.is_favourite === "1"
                  ? "border-2 border-yellow-400/50"
                  : "border"
              }`}
            >
              <div className="flex-shrink-0 relative">
                {book.image_url && (
                  <Image
                    src={book.image_url}
                    alt={`${book.title} cover`}
                    width={240}
                    height={320}
                    className="rounded-lg"
                  />
                )}
                {/* Conditionally render Favourite badge */}
                {book.is_favourite === "1" && (
                  <div className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Favourite
                  </div>
                )}
              </div>

              <div className="ml-0 md:ml-6 flex-grow">
                <h2 className="text-xl font-bold mb-2">{book.title}</h2>
                <h3 className="text-md text-gray-700 mb-4">{book.author}</h3>
                <span className="block text-sm text-gray-500 mb-4">
                  {new Date(book.publish_date)
                    .toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })
                    .replace(/,/g, "")}
                </span>
                <p className="text-gray-600">{book.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
