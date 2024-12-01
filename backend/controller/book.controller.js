import Book from "../model/book.model.js"; // Add `.js` extension

export const getbook = async (req, res) => {
    try {
        const books = await Book.find(); // Fix: Use `Book` instead of `book` and make it asynchronous
        res.status(200).json(books);
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ message: "Error fetching books", error });
    }
};
