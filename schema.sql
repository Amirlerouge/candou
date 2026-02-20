-- PATREON NEO - Database Schema (PostgreSQL)

-- 1. Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role VARCHAR(20) DEFAULT 'member', -- 'creator' or 'member'
    avatar_text TEXT, 
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Creators Table
CREATE TABLE creators (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    display_name VARCHAR(100) NOT NULL,
    tagline TEXT,
    about TEXT,
    cover_color VARCHAR(20) DEFAULT '#A3E635',
    patron_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Membership Tiers
CREATE TABLE tiers (
    id SERIAL PRIMARY KEY,
    creator_id INTEGER REFERENCES creators(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Posts
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    creator_id INTEGER REFERENCES creators(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    excerpt TEXT,
    content TEXT,
    image_content TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Memberships (Linking Users to Tiers)
CREATE TABLE memberships (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    tier_id INTEGER REFERENCES tiers(id) ON DELETE CASCADE,
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- SEED DATA (Matching mockup)

-- Insert Users
INSERT INTO users (username, email, password_hash, role, avatar_text) VALUES
('radical_artist', 'artist@example.com', 'hashed_pw_1', 'creator', '🎨'),
('cyber_sound', 'sound@example.com', 'hashed_pw_2', 'creator', '🎹'),
('amir', 'amir@example.com', 'hashed_pw_3', 'member', 'A');

-- Insert Creators
INSERT INTO creators (user_id, display_name, tagline, about, cover_color, patron_count) VALUES
(1, 'The Radical Artist', 'Painting the world in bold strokes.', 'I create large-scale murals and digital art that challenges the status quo.', '#ffde03', 120),
(2, 'Cyberpunk Soundscapes', 'Electronic beats for a neon future.', 'Creating immersive audio experiences.', '#00d1ff', 450);

-- Insert Tiers
INSERT INTO tiers (creator_id, name, price, description, featured) VALUES
(1, 'Dabbler', 5.00, 'Get access to feed.', FALSE),
(1, 'True Believer', 15.00, 'Downloads.', TRUE),
(2, 'Producer', 10.00, 'Project files.', TRUE);

-- Insert Posts
INSERT INTO posts (creator_id, title, excerpt, content, image_content, created_at) VALUES
(1, 'New Mural', 'Just finished this piece.', 'Full content of the mural post...', '🖼️', '2023-10-12 10:00:00'),
(2, 'Neon Nights LP', 'Out now!', 'Listen to my new album...', '🎧', '2023-10-15 14:00:00'),
(1, 'New Mural in Downtown', 'Finally finished this piece after 3 weeks of work! Hope you guys like it.', 'Detailed post about the mural...', '🖼️', '2023-08-20 09:00:00');

-- Insert a sample membership for 'Amir'
INSERT INTO memberships (user_id, tier_id) VALUES (3, 1);
