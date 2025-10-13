import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json()); // Parse JSON body

// Base route for API
app.use('/api/users', userRoutes);

// Start server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
