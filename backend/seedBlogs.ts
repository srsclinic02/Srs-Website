import mongoose from 'mongoose';
import Blog from './src/models/Blog';
import fs from 'fs';
import path from 'path';

const blogsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'seo_blogs_seed.json'), 'utf-8'));
import * as dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/dental_clinic';

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB.');

    for (const blog of blogsData) {
      // Check if it exists
      const existing = await Blog.findOne({ slug: blog.slug });
      if (existing) {
        console.log(`Updating existing blog: ${blog.title}`);
        await Blog.updateOne({ slug: blog.slug }, {
          ...blog,
          author: 'Dr. Saachi Shingrani',
          published: true,
        });
      } else {
        console.log(`Inserting new blog: ${blog.title}`);
        await Blog.create({
          ...blog,
          author: 'Dr. Saachi Shingrani',
          published: true,
        });
      }
    }

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
}

seed();
