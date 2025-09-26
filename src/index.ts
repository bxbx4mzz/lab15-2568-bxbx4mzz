import express, { type Request, type Response } from "express";
import morgan from "morgan";
import studentRouter from "./routes/studentRoutes.js";
import courseRouter from "./routes/courseRoutes.js";

const app: any = express();

//Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use("/students", studentRouter);
app.use("/courses", courseRouter);

app.listen(3000, () =>
  console.log("🚀 Server running on http://localhost:3000")
);

app.get("/me", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Student Information",
    data: {
      studentId: "670610733",
      firstName: "Wiphawee",
      lastName: "Chaikham",
      program: "CPE",
      section: "001",
    },
  });
});

app.use("/api/v2/students", studentRouter);

app.use("/api/v2/courses", courseRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Lab15 API server successfully",
  });
});

export default app;
