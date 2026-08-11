import express, { type Request, type Response } from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./Database/OnlineUsers";
import KittenModel from "./models/test.Schema";

dotenv.config({ path: path.resolve(process.cwd(), "src/Backend/.env") });

interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "PortableNotes API is running",
    environment: NODE_ENV,
  });
});

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    environment: NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

const notes: Note[] = [
  {
    id: 1,
    title: "Welcome",
    content: "This is your first note.",
    createdAt: new Date().toISOString(),
  },
];

app.get("/api/notes", (_req: Request, res: Response) => {
  res.json(notes);
});
app.get("/CatSend", async (_req, res) => {
  try {
    const Billu = new KittenModel({
      name: "Billu",
      age: 2,
    });

    // Save the new kitten once instead of calling create() and save() both.
    await Billu.save();

    res.json({ message: "Kitten saved", kitten: Billu });
  } catch (error) {
    res.status(500).json({
      message: "Error saving kitten",
      error: error instanceof Error ? error.message : error,
    });
  }
});

app.get("/api/notes/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const note = notes.find((item) => item.id === id);

  if (!note) {
    res.status(404).json({ message: "Note not found" });
    return;
  }

  res.json(note);
});

app.post("/api/notes", (req: Request, res: Response) => {
  const { title, content } = req.body as Partial<Note>;

  if (!title || !content) {
    res.status(400).json({ message: "Title and content are required" });
    return;
  }

  const newNote: Note = {
    id: Date.now(),
    title,
    content,
    createdAt: new Date().toISOString(),
  };

  notes.push(newNote);
  res.status(201).json(newNote);
});

app.put("/api/notes/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const note = notes.find((item) => item.id === id);

  if (!note) {
    res.status(404).json({ message: "Note not found" });
    return;
  }

  const { title, content } = req.body as Partial<Note>;

  if (title !== undefined) {
    note.title = title;
  }

  if (content !== undefined) {
    note.content = content;
  }

  res.json(note);
});

app.delete("/api/notes/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = notes.findIndex((item) => item.id === id);

  if (index === -1) {
    res.status(404).json({ message: "Note not found" });
    return;
  }

  notes.splice(index, 1);
  res.json({ message: "Note deleted successfully" });
});

app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: "Route not found" });
});

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
