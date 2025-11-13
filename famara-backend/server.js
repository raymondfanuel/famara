// Import modules
import express from 'express';
import cors from 'cors';


// Initialize express
const app = express();
const PORT = 5011;

// Middleware
app.use(cors());
app.use(express.json());


// server static images
app.use('/assets', express.static('assets'))

// Sample blog data
const posts = [
  {
    id: 1,
    category: "Habari",
    title: "The Future of AI in 2025",
    author: "Rayytricks",
    images: "http://localhost:5011/assets/ai.jpeg",
    content: "Artificial Intelligence continues to evolve rapidly, shaping industries and redefining how humans interact with machines. In 2025, we expect major leaps in autonomous systems, AI safety, and real-world deployment."
  },
  {
    id: 2,
    category: "Habari",
    title: "Top 10 Tips for Staying Fit",
    author: "Dr. Jane Mushi",
    images: "http://localhost:5011/assets/tohealth.jpeg",
    content: "Maintaining good health requires consistency, proper nutrition, and rest. Here are 10 simple habits you can adopt to boost your fitness and overall wellbeing."
  },
  {
    id: 3,
    category: "Siasa",
    title: "How Startups Are Changing Africa",
    author: "Michael K.",
    images: "http://localhost:5011/assets/bussiness.jpeg",
    content: "Across Africa, startups are solving real-world problems — from fintech to agri-tech — creating jobs and pushing digital transformation in every sector."
  },
  {
    id: 4,
    category: "Siasa",
    title: "Exploring Tanzania’s Hidden Gems",
    author: "Asha John",
    images: "http://localhost:5011/assets/bussiness.jpeg",
    content: "From the crystal waters of Zanzibar to the peaks of Kilimanjaro, Tanzania offers endless beauty. Discover the hidden destinations that most tourists miss."
  },
  {
    id: 4,
    category: "Michezo",
    title: "Exploring Tanzania’s Hidden Gems",
    author: "Asha John",
    images: "http://localhost:5011/assets/bussiness.jpeg",
    content: "From the crystal waters of Zanzibar to the peaks of Kilimanjaro, Tanzania offers endless beauty. Discover the hidden destinations that most tourists miss."
  },
  {
    id: 4,
    category: "Burudani",
    title: "Exploring Tanzania’s Hidden Gems",
    author: "Asha John",
    images: "http://localhost:5011/assets/bussiness.jpeg",
    content: "From the crystal waters of Zanzibar to the peaks of Kilimanjaro, Tanzania offers endless beauty. Discover the hidden destinations that most tourists miss."
  },
  {
    id: 4,
    category: "Siasa",
    title: "Exploring Tanzania’s Hidden Gems",
    author: "Asha John",
    images: "http://localhost:5011/assets/bussiness.jpeg",
    content: "From the crystal waters of Zanzibar to the peaks of Kilimanjaro, Tanzania offers endless beauty. Discover the hidden destinations that most tourists miss."
  },
  {
    id: 4,
    category: "Burudani",
    title: "Exploring Tanzania’s Hidden Gems",
    author: "Asha John",
    images: "http://localhost:5011/assets/bussiness.jpeg",
    content: "From the crystal waters of Zanzibar to the peaks of Kilimanjaro, Tanzania offers endless beauty. Discover the hidden destinations that most tourists miss."
  },
  {
    id: 4,
    category: "Habari",
    title: "Exploring Tanzania’s Hidden Gems",
    author: "Asha John",
    images: "http://localhost:5011/assets/bussiness.jpeg",
    content: "From the crystal waters of Zanzibar to the peaks of Kilimanjaro, Tanzania offers endless beauty. Discover the hidden destinations that most tourists miss."
  },
  {
    id: 4,
    category: "Siasa",
    title: "Exploring Tanzania’s Hidden Gems",
    author: "Asha John",
    images: "http://localhost:5011/assets/bussiness.jpeg",
    content: "From the crystal waters of Zanzibar to the peaks of Kilimanjaro, Tanzania offers endless beauty. Discover the hidden destinations that most tourists miss."
  },
  {
    id: 4,
    category: "Michezo",
    title: "Exploring Tanzania’s Hidden Gems",
    author: "Asha John",
    images: "http://localhost:5011/assets/bussiness.jpeg",
    content: "From the crystal waters of Zanzibar to the peaks of Kilimanjaro, Tanzania offers endless beauty. Discover the hidden destinations that most tourists miss."
  },
  {
    id: 4,
    category: "Burudani",
    title: "Exploring Tanzania’s Hidden Gems",
    author: "Asha John",
    images: "http://localhost:5011/assets/bussiness.jpeg",
    content: "From the crystal waters of Zanzibar to the peaks of Kilimanjaro, Tanzania offers endless beauty. Discover the hidden destinations that most tourists miss."
  },
  {
    id: 4,
    category: "Siasa",
    title: "Exploring Tanzania’s Hidden Gems",
    author: "Asha John",
    images: "http://localhost:5011/assets/bussiness.jpeg",
    content: "From the crystal waters of Zanzibar to the peaks of Kilimanjaro, Tanzania offers endless beauty. Discover the hidden destinations that most tourists miss."
  }
];

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Blog API Server!');
});

// Get all blogs
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
