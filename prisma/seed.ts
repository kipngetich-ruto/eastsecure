import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../lib/auth';

const prisma = new PrismaClient();

async function main() {
  // Create sample users
  const hashedPassword = await hashPassword('password123');
  
  await prisma.user.upsert({
    where: { email: 'john.doe@example.com' },
    update: {},
    create: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: hashedPassword,
      company: 'Example Corp',
      phone: '+254 700 123 456',
      role: 'client'
    }
  });

  // Create sample blog posts
  const blogPosts = [
    {
      title: 'The Rise of Mobile Money Fraud in East Africa: Protection Strategies',
      slug: 'mobile-money-fraud-protection-east-africa',
      excerpt: 'Analyzing the latest trends in M-Pesa and mobile money fraud across Kenya, Uganda, and Tanzania, with practical protection strategies for financial institutions.',
      content: 'Mobile money platforms like M-Pesa have revolutionized financial services across East Africa...',
      category: 'Mobile Security',
      tags: 'M-Pesa, Mobile Money, Fraud Protection, Kenya, Uganda, Tanzania',
      author: 'Dr. Michael Wanjiku',
      authorImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg',
      published: true
    },
    {
      title: 'Kenya Data Protection Act: Compliance Guide for East African Businesses',
      slug: 'kenya-data-protection-act-compliance-guide',
      excerpt: 'A comprehensive guide to achieving compliance with Kenya\'s Data Protection Act and its implications for businesses operating across East Africa.',
      content: 'The Kenya Data Protection Act represents a significant milestone in regional data privacy legislation...',
      category: 'Compliance',
      tags: 'Data Protection, Kenya DPA, Compliance, East Africa, GDPR',
      author: 'Ahmed Hassan',
      authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      image: 'https://images.pexels.com/photos/5668769/pexels-photo-5668769.jpeg',
      published: true
    }
  ];

  for (const post of blogPosts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {},
      create: post
    });
  }

  console.log('Database seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });