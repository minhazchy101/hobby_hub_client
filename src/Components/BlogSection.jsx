import React from 'react';
import { Link } from 'react-router';

const blogPosts = [
  {
    id: 1,
    title: '5 Creative Hobbies to Boost Your Wellbeing',
    excerpt: 'Discover how picking up painting, journaling, or gardening can enhance your mental health and spark joy.',
   
  },
  {
    id: 2,
    title: 'How to Start a Local Meetup Group',
    excerpt: 'Step-by-step guide on planning, promoting, and growing a meetup group in your community.',
   
  },
  {
    id: 3,
    title: 'Photography Tips for Beginners',
    excerpt: 'Learn how to capture stunning lifestyle and hobby shots using just your smartphone and natural light.',
     }
];

const BlogSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Latest from Our Blog</h2>
        <p className="text-gray-600">
          Insightful articles, guides, and stories to inspire your next hobby adventure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
