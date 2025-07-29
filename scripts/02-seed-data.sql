-- Seed data for multi-vendor delivery platform

-- Insert admin user
INSERT INTO users (id, email, first_name, last_name, role, status) VALUES
('550e8400-e29b-41d4-a716-446655440000', 'admin@deliveryplatform.com', 'Admin', 'User', 'admin', 'active');

-- Insert sample vendors
INSERT INTO users (id, email, first_name, last_name, phone, role, status) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'pizza@example.com', 'Mario', 'Rossi', '+1234567890', 'vendor', 'active'),
('550e8400-e29b-41d4-a716-446655440002', 'burger@example.com', 'John', 'Smith', '+1234567891', 'vendor', 'active'),
('550e8400-e29b-41d4-a716-446655440003', 'sushi@example.com', 'Yuki', 'Tanaka', '+1234567892', 'vendor', 'active'),
('550e8400-e29b-41d4-a716-446655440004', 'indian@example.com', 'Raj', 'Patel', '+1234567893', 'vendor', 'active');

-- Insert sample customers
INSERT INTO users (id, email, first_name, last_name, phone, role, status) VALUES
('550e8400-e29b-41d4-a716-446655440010', 'customer1@example.com', 'Alice', 'Johnson', '+1234567894', 'customer', 'active'),
('550e8400-e29b-41d4-a716-446655440011', 'customer2@example.com', 'Bob', 'Wilson', '+1234567895', 'customer', 'active');

-- Insert sample drivers
INSERT INTO users (id, email, first_name, last_name, phone, role, status) VALUES
('550e8400-e29b-41d4-a716-446655440020', 'driver1@example.com', 'Mike', 'Davis', '+1234567896', 'driver', 'active'),
('550e8400-e29b-41d4-a716-446655440021', 'driver2@example.com', 'Sarah', 'Brown', '+1234567897', 'driver', 'active');

-- Insert vendors
INSERT INTO vendors (id, user_id, business_name, description, category, address, latitude, longitude, phone, email, rating, total_orders, status, commission_rate) VALUES
('660e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440001', 'Mario''s Pizza Palace', 'Authentic Italian pizza made with fresh ingredients', 'Italian', '123 Main St, New York, NY 10001', 40.7128, -74.0060, '+1234567890', 'pizza@example.com', 4.5, 150, 'approved', 8.00),
('660e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440002', 'Burger Junction', 'Gourmet burgers and fries', 'American', '456 Oak Ave, New York, NY 10002', 40.7589, -73.9851, '+1234567891', 'burger@example.com', 4.2, 89, 'approved', 10.00),
('660e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440003', 'Tokyo Sushi Bar', 'Fresh sushi and Japanese cuisine', 'Japanese', '789 Pine St, New York, NY 10003', 40.7505, -73.9934, '+1234567892', 'sushi@example.com', 4.8, 203, 'approved', 12.00),
('660e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440004', 'Spice Garden', 'Authentic Indian curry and tandoor', 'Indian', '321 Elm St, New York, NY 10004', 40.7282, -74.0776, '+1234567893', 'indian@example.com', 4.3, 67, 'approved', 9.00);

-- Insert drivers
INSERT INTO drivers (id, user_id, license_number, vehicle_type, vehicle_number, current_latitude, current_longitude, is_available, rating, total_deliveries, status) VALUES
('770e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440020', 'DL123456789', 'Motorcycle', 'NYC-1234', 40.7128, -74.0060, true, 4.6, 245, 'approved'),
('770e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440021', 'DL987654321', 'Car', 'NYC-5678', 40.7589, -73.9851, true, 4.4, 189, 'approved');

-- Insert sample products
INSERT INTO products (id, vendor_id, name, description, price, category, image_url, is_available, preparation_time) VALUES
-- Mario's Pizza Palace products
('880e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440001', 'Margherita Pizza', 'Classic pizza with tomato, mozzarella, and basil', 18.99, 'Pizza', '/placeholder.svg?height=200&width=200', true, 25),
('880e8400-e29b-41d4-a716-446655440002', '660e8400-e29b-41d4-a716-446655440001', 'Pepperoni Pizza', 'Traditional pepperoni pizza with cheese', 21.99, 'Pizza', '/placeholder.svg?height=200&width=200', true, 25),
('880e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440001', 'Caesar Salad', 'Fresh romaine lettuce with caesar dressing', 12.99, 'Salad', '/placeholder.svg?height=200&width=200', true, 10),

-- Burger Junction products
('880e8400-e29b-41d4-a716-446655440004', '660e8400-e29b-41d4-a716-446655440002', 'Classic Cheeseburger', 'Beef patty with cheese, lettuce, tomato', 15.99, 'Burger', '/placeholder.svg?height=200&width=200', true, 20),
('880e8400-e29b-41d4-a716-446655440005', '660e8400-e29b-41d4-a716-446655440002', 'Bacon Burger', 'Beef patty with bacon and cheese', 18.99, 'Burger', '/placeholder.svg?height=200&width=200', true, 22),
('880e8400-e29b-41d4-a716-446655440006', '660e8400-e29b-41d4-a716-446655440002', 'French Fries', 'Crispy golden french fries', 6.99, 'Sides', '/placeholder.svg?height=200&width=200', true, 8),

-- Tokyo Sushi Bar products
('880e8400-e29b-41d4-a716-446655440007', '660e8400-e29b-41d4-a716-446655440003', 'Salmon Roll', 'Fresh salmon sushi roll', 14.99, 'Sushi', '/placeholder.svg?height=200&width=200', true, 15),
('880e8400-e29b-41d4-a716-446655440008', '660e8400-e29b-41d4-a716-446655440003', 'California Roll', 'Crab, avocado, and cucumber roll', 12.99, 'Sushi', '/placeholder.svg?height=200&width=200', true, 15),
('880e8400-e29b-41d4-a716-446655440009', '660e8400-e29b-41d4-a716-446655440003', 'Miso Soup', 'Traditional Japanese miso soup', 4.99, 'Soup', '/placeholder.svg?height=200&width=200', true, 5),

-- Spice Garden products
('880e8400-e29b-41d4-a716-446655440010', '660e8400-e29b-41d4-a716-446655440004', 'Chicken Tikka Masala', 'Creamy tomato curry with chicken', 16.99, 'Curry', '/placeholder.svg?height=200&width=200', true, 30),
('880e8400-e29b-41d4-a716-446655440011', '660e8400-e29b-41d4-a716-446655440004', 'Biryani', 'Fragrant basmati rice with spices', 18.99, 'Rice', '/placeholder.svg?height=200&width=200', true, 35),
('880e8400-e29b-41d4-a716-446655440012', '660e8400-e29b-41d4-a716-446655440004', 'Naan Bread', 'Fresh baked Indian bread', 3.99, 'Bread', '/placeholder.svg?height=200&width=200', true, 8);

-- Insert sample orders
INSERT INTO orders (id, customer_id, vendor_id, driver_id, order_number, status, subtotal, delivery_fee, tax_amount, total_amount, delivery_address, delivery_latitude, delivery_longitude, estimated_delivery_time, payment_status, payment_method) VALUES
('990e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440010', '660e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440020', 'ORD-2024-001', 'delivered', 40.98, 3.99, 3.60, 48.57, '100 Broadway, New York, NY 10005', 40.7074, -74.0113, NOW() + INTERVAL '45 minutes', 'paid', 'credit_card'),
('990e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440011', '660e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440021', 'ORD-2024-002', 'preparing', 22.98, 2.99, 2.07, 28.04, '200 Park Ave, New York, NY 10166', 40.7527, -73.9772, NOW() + INTERVAL '30 minutes', 'paid', 'debit_card'),
('990e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440010', '660e8400-e29b-41d4-a716-446655440003', NULL, 'ORD-2024-003', 'confirmed', 27.98, 4.99, 2.95, 35.92, '300 Madison Ave, New York, NY 10017', 40.7589, -73.9774, NOW() + INTERVAL '50 minutes', 'paid', 'credit_card');

-- Insert order items
INSERT INTO order_items (order_id, product_id, quantity, unit_price, total_price) VALUES
-- Order 1 items
('990e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440001', 1, 18.99, 18.99),
('990e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440002', 1, 21.99, 21.99),

-- Order 2 items
('990e8400-e29b-41d4-a716-446655440002', '880e8400-e29b-41d4-a716-446655440004', 1, 15.99, 15.99),
('990e8400-e29b-41d4-a716-446655440002', '880e8400-e29b-41d4-a716-446655440006', 1, 6.99, 6.99),

-- Order 3 items
('990e8400-e29b-41d4-a716-446655440003', '880e8400-e29b-41d4-a716-446655440007', 1, 14.99, 14.99),
('990e8400-e29b-41d4-a716-446655440003', '880e8400-e29b-41d4-a716-446655440008', 1, 12.99, 12.99);
