import Image from "next/image";
import { useEffect, useState } from "react";

// Define your Book interface here
interface Book {
  id: number; // Change to `string` if `id` is a string
  title: string;
  author: string;
  description: string;
  image_url?: string; // Use optional chaining if the image URL might not always be present
}

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]); // Specify the state as an array of Book
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Specify error type

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://your-api-url.com/api/books"); // Replace with your actual API URL
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data: Book[] = await response.json(); // Specify the data type here
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
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.description}</p>
            {book.image_url && (
              <Image src={book.image_url} alt={`${book.title} cover`} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
