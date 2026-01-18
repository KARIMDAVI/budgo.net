/**
 * Design constants for BudGo.Net
 * Following TypeScript strict mode and best practices
 */

export const colors = {
  bgDark: '#1a1a1a',
  glassOverlay: 'rgba(26, 26, 26, 0.85)',
  textWhite: '#ffffff',
  textMuted: 'rgba(255, 255, 255, 0.7)',
  accentRed: '#e63946',
  accentRedHover: '#d62839',
  codeBg: 'rgba(0, 0, 0, 0.3)',
  codeText: '#00ff00',
  codeComment: '#888888',
  codeKeyword: '#ff6b6b',
  codeString: '#4ecdc4',
} as const;

export const typography = {
  headline: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 900,
    fontSize: { base: '2.5rem', md: '4rem', lg: '4.5rem' },
    letterSpacing: '-0.02em',
    textTransform: 'uppercase' as const,
  },
  brandName: {
    fontFamily: 'Dancing Script, cursive',
    fontSize: { base: '1.8rem', md: '2.5rem' },
    fontWeight: 400,
  },
  subheadline: {
    fontFamily: 'Dancing Script, cursive',
    fontSize: { base: '1.2rem', md: '1.8rem' },
  },
} as const;

export const navigationItems = [
  'WHAT WE DO',
  'PORTFOLIO',
  'COMPANY',
  'CONTACT US',
] as const;

export type NavigationItem = typeof navigationItems[number];

/**
 * Comprehensive code snippets showcasing BudGo development skills
 * Full-stack application example: E-Commerce Platform
 * Shows: iOS App, Web Platform, Backend API, Database, Authentication, Deployment
 */
export const codeSnippets = [
  {
    language: 'typescript',
    code: `// ============================================
// BUDGO.NET - Full-Stack Development Showcase
// E-Commerce Platform: Complete Architecture
// ============================================

// ========== PROJECT STRUCTURE ==========
// mobile/          - React Native iOS App
// web/             - Next.js Web Platform  
// api/             - Node.js Backend API
// shared/          - Shared TypeScript Types
// ============================================

// ========== SHARED TYPES ==========
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'admin';
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  stock: number;
}

export interface Order {
  id: string;
  userId: string;
  products: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: Date;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}`,
  },
  {
    language: 'typescript',
    code: `// ========== BACKEND API - Node.js/Express ==========
import express from 'express';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.ALLOWED_ORIGINS }));

// Authentication Middleware
const authenticateToken = async (
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid token' });
  }
};

// Product API Routes
app.get('/api/products', async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      where: { stock: { gt: 0 } },
      include: { category: true }
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

app.post('/api/products', authenticateToken, async (req, res) => {
  const { name, description, price, categoryId, stock } = req.body;
  const product = await prisma.product.create({
    data: { name, description, price, categoryId, stock }
  });
  res.status(201).json(product);
});`,
  },
  {
    language: 'typescript',
    code: `// ========== ORDER MANAGEMENT API ==========
app.post('/api/orders', authenticateToken, async (req, res) => {
  const { products } = req.body;
  const userId = req.user.id;
  
  // Calculate total
  const total = products.reduce((sum: number, item: OrderItem) => {
    return sum + (item.price * item.quantity);
  }, 0);
  
  // Create order with transaction
  const order = await prisma.$transaction(async (tx) => {
    // Create order
    const newOrder = await tx.order.create({
      data: {
        userId,
        total,
        status: 'pending',
        items: {
          create: products.map((item: OrderItem) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price
          }))
        }
      }
    });
    
    // Update product stock
    for (const item of products) {
      await tx.product.update({
        where: { id: item.productId },
        data: { stock: { decrement: item.quantity } }
      });
    }
    
    return newOrder;
  });
  
  res.status(201).json(order);
});

// Payment Processing
app.post('/api/orders/:id/pay', authenticateToken, async (req, res) => {
  const { orderId } = req.params;
  const { paymentMethod, paymentToken } = req.body;
  
  // Process payment with Stripe
  const payment = await stripe.charges.create({
    amount: order.total * 100,
    currency: 'usd',
    source: paymentToken,
    description: \`Order \${orderId}\`
  });
  
  if (payment.status === 'succeeded') {
    await prisma.order.update({
      where: { id: orderId },
      data: { status: 'processing', paymentId: payment.id }
    });
    res.json({ success: true, payment });
  } else {
    res.status(400).json({ error: 'Payment failed' });
  }
});`,
  },
  {
    language: 'typescript',
    code: `// ========== DATABASE SCHEMA - Prisma ==========
// schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String
  password  String
  role      Role     @default(CUSTOMER)
  orders    Order[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Product {
  id          String      @id @default(cuid())
  name        String
  description String
  price       Float
  stock       Int         @default(0)
  imageUrl    String
  category    Category    @relation(fields: [categoryId], references: [id])
  categoryId  String
  orderItems  OrderItem[]
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt
}

model Order {
  id        String      @id @default(cuid())
  userId    String
  user      User        @relation(fields: [userId], references: [id])
  items     OrderItem[]
  total     Float
  status    OrderStatus @default(PENDING)
  paymentId String?
  createdAt DateTime    @default(now())
  updatedAt DateTime    @updatedAt
}

enum Role {
  CUSTOMER
  ADMIN
}

enum OrderStatus {
  PENDING
  PROCESSING
  SHIPPED
  DELIVERED
  CANCELLED
}`,
  },
  {
    language: 'typescript',
    code: `// ========== iOS APP - React Native ==========
// App.tsx - Main Application Entry
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ title: 'BudGo Store' }}
          />
          <Stack.Screen 
            name="Product" 
            component={ProductScreen}
            options={{ title: 'Product Details' }}
          />
          <Stack.Screen 
            name="Cart" 
            component={CartScreen}
            options={{ title: 'Shopping Cart' }}
          />
          <Stack.Screen 
            name="Checkout" 
            component={CheckoutScreen}
            options={{ title: 'Checkout' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}`,
  },
  {
    language: 'typescript',
    code: `// ========== iOS APP - Product Screen ==========
// screens/ProductScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../store/slices/productSlice';
import { addToCart } from '../store/slices/cartSlice';

interface ProductScreenProps {
  route: { params: { productId: string } };
}

export default function ProductScreen({ route }: ProductScreenProps) {
  const { productId } = route.params;
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.current);
  const loading = useSelector((state) => state.products.loading);
  
  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [productId, dispatch]);
  
  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({
        productId: product.id,
        quantity: 1,
        price: product.price
      }));
    }
  };
  
  if (loading) return <Text>Loading...</Text>;
  if (!product) return <Text>Product not found</Text>;
  
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: product.imageUrl }} 
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{\`\${product.price.toFixed(2)}\`}</Text>
      <Text style={styles.stock}>
        {product.stock > 0 ? \`In Stock (\${product.stock})\` : 'Out of Stock'}
      </Text>
      <Button 
        title="Add to Cart" 
        onPress={handleAddToCart}
        disabled={product.stock === 0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  image: { width: '100%', height: 300, borderRadius: 8 },
  name: { fontSize: 24, fontWeight: 'bold', marginTop: 16 },
  description: { fontSize: 16, marginTop: 8, color: '#666' },
  price: { fontSize: 28, fontWeight: 'bold', marginTop: 16, color: '#e63946' },
  stock: { fontSize: 14, marginTop: 8, color: '#888' }
});`,
  },
  {
    language: 'typescript',
    code: `// ========== iOS APP - Redux Store ==========
// store/slices/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderItem } from '../../../shared/types';

interface CartState {
  items: OrderItem[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<OrderItem>) => {
      const existingItem = state.items.find(
        item => item.productId === action.payload.productId
      );
      
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      
      state.total = state.items.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
      }, 0);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        item => item.productId !== action.payload
      );
      state.total = state.items.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
      }, 0);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;`,
  },
  {
    language: 'typescript',
    code: `// ========== WEB PLATFORM - Next.js ==========
// app/products/page.tsx - Product Listing Page
import { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/lib/api/products';

export const metadata: Metadata = {
  title: 'Products - BudGo Store',
  description: 'Browse our collection of products'
};

export default async function ProductsPage() {
  const products = await getProducts();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// components/ProductCard.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={\`/products/\${product.id}\`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        <div className="relative h-64 w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-red-600">
              {\`\${product.price.toFixed(2)}\`}
            </span>
            <span className={\`text-sm \${product.stock > 0 ? 'text-green-600' : 'text-red-600'}\`}>
              {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}`,
  },
  {
    language: 'typescript',
    code: `// ========== WEB PLATFORM - API Integration ==========
// lib/api/products.ts
import { Product } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(\`\${API_URL}/api/products\`, {
    next: { revalidate: 60 } // Revalidate every 60 seconds
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  
  return res.json();
}

export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(\`\${API_URL}/api/products/\${id}\`, {
    next: { revalidate: 3600 } // Revalidate every hour
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  
  return res.json();
}

// lib/api/orders.ts
export async function createOrder(orderData: {
  products: OrderItem[];
  paymentMethod: string;
  paymentToken: string;
}): Promise<Order> {
  const token = localStorage.getItem('authToken');
  
  const res = await fetch(\`\${API_URL}/api/orders\`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': \`Bearer \${token}\`
    },
    body: JSON.stringify(orderData)
  });
  
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Failed to create order');
  }
  
  return res.json();
}`,
  },
  {
    language: 'typescript',
    code: `// ========== AUTHENTICATION SYSTEM ==========
// lib/auth.ts - JWT Authentication
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_EXPIRES_IN = '7d';

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(
  password: string, 
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

export function generateToken(userId: string, email: string): string {
  return jwt.sign(
    { userId, email },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
}

export function verifyToken(token: string): { userId: string; email: string } {
  return jwt.verify(token, JWT_SECRET) as { userId: string; email: string };
}

// API Route: /api/auth/login
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  const isValid = await verifyPassword(password, user.password);
  if (!isValid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  const token = generateToken(user.id, user.email);
  res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
});`,
  },
  {
    language: 'typescript',
    code: `// ========== DEPLOYMENT CONFIGURATION ==========
// docker-compose.yml - Full Stack Deployment
version: '3.8'

services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: budgo_store
      POSTGRES_USER: budgo
      POSTGRES_PASSWORD: \${POSTGRES_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  api:
    build: ./api
    environment:
      DATABASE_URL: postgresql://budgo:\${POSTGRES_PASSWORD}@postgres:5432/budgo_store
      JWT_SECRET: \${JWT_SECRET}
      NODE_ENV: production
    ports:
      - "3001:3001"
    depends_on:
      - postgres

  web:
    build: ./web
    environment:
      NEXT_PUBLIC_API_URL: http://api:3001
      NODE_ENV: production
    ports:
      - "3000:3000"
    depends_on:
      - api

volumes:
  postgres_data:

// CI/CD Pipeline - GitHub Actions
// .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
      - name: Build
        run: npm run build
      - name: Deploy
        run: |
          docker-compose up -d --build`,
  },
  {
    language: 'typescript',
    code: `// ========== TESTING SUITE ==========
// __tests__/api/products.test.ts
import request from 'supertest';
import app from '../../src/app';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('Product API', () => {
  beforeEach(async () => {
    await prisma.product.deleteMany();
  });

  it('should fetch all products', async () => {
    await prisma.product.create({
      data: {
        name: 'Test Product',
        description: 'Test Description',
        price: 99.99,
        stock: 10,
        categoryId: 'test-category'
      }
    });

    const response = await request(app)
      .get('/api/products')
      .expect(200);

    expect(response.body).toHaveLength(1);
    expect(response.body[0].name).toBe('Test Product');
  });

  it('should create a new product', async () => {
    const token = await getAuthToken();
    
    const response = await request(app)
      .post('/api/products')
      .set('Authorization', \`Bearer \${token}\`)
      .send({
        name: 'New Product',
        description: 'New Description',
        price: 149.99,
        stock: 5,
        categoryId: 'test-category'
      })
      .expect(201);

    expect(response.body.name).toBe('New Product');
    expect(response.body.price).toBe(149.99);
  });
});

// ========== PERFORMANCE MONITORING ==========
// lib/monitoring.ts
import { performance } from 'perf_hooks';

export function trackPerformance(name: string, fn: () => Promise<any>) {
  return async (...args: any[]) => {
    const start = performance.now();
    try {
      const result = await fn(...args);
      const duration = performance.now() - start;
      if (process.env.NODE_ENV === 'development') {
        console.log('[' + name + '] Completed in ' + duration.toFixed(2) + 'ms');
      }
      return result;
    } catch (error) {
      const duration = performance.now() - start;
      if (process.env.NODE_ENV === 'development') {
        console.error('[' + name + '] Failed after ' + duration.toFixed(2) + 'ms', error);
      }
      throw error;
    }
  };
}`,
  },
] as const;

export const socialLinks = [
  { name: 'GitHub', href: '#', icon: 'G', ariaLabel: 'Visit our GitHub profile' },
  { name: 'LinkedIn', href: '#', icon: 'in', ariaLabel: 'Visit our LinkedIn profile' },
  { name: 'Twitter', href: '#', icon: 'T', ariaLabel: 'Visit our Twitter profile' },
  { name: 'Dribbble', href: '#', icon: 'D', ariaLabel: 'Visit our Dribbble profile' },
] as const;
