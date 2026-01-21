/*
  # Donation System for Sacré-Cœur d'Akandjé Church

  1. New Tables
    - `donors`
      - `id` (uuid, primary key)
      - `email` (text, unique, required)
      - `first_name` (text, required)
      - `last_name` (text, required)
      - `phone` (text)
      - `company` (text, optional for corporate donors)
      - `profession` (text, optional)
      - `country` (text)
      - `is_anonymous` (boolean, default false)
      - `donor_type` (text) - 'individual', 'corporate', 'founder', 'builder'
      - `preferred_language` (text, default 'fr')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `donations`
      - `id` (uuid, primary key)
      - `donor_id` (uuid, foreign key to donors)
      - `amount` (numeric, required)
      - `currency` (text, default 'XOF')
      - `donation_type` (text) - 'one_time', 'monthly', 'quarterly', 'annual'
      - `category` (text) - 'general', 'altar', 'stained_glass', 'bell', 'bench', etc.
      - `payment_method` (text) - 'mobile_money', 'wave', 'djamo', 'paypal', 'bank_transfer', 'cash'
      - `payment_status` (text, default 'pending') - 'pending', 'completed', 'failed', 'refunded'
      - `transaction_reference` (text)
      - `dedication_message` (text, optional)
      - `sponsorship_element` (text, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `project_elements`
      - `id` (uuid, primary key)
      - `name_fr` (text, required)
      - `name_en` (text, required)
      - `description_fr` (text)
      - `description_en` (text)
      - `target_amount` (numeric, required)
      - `current_amount` (numeric, default 0)
      - `category` (text) - 'architectural', 'liturgical', 'infrastructure'
      - `is_available` (boolean, default true)
      - `image_url` (text)
      - `sponsor_name` (text, nullable)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `benefactors`
      - `id` (uuid, primary key)
      - `donor_id` (uuid, foreign key to donors)
      - `total_donated` (numeric, default 0)
      - `recognition_level` (text) - 'bronze', 'silver', 'gold', 'platinum', 'founder'
      - `display_name` (text)
      - `is_visible` (boolean, default true)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `project_updates`
      - `id` (uuid, primary key)
      - `title_fr` (text, required)
      - `title_en` (text, required)
      - `content_fr` (text, required)
      - `content_en` (text, required)
      - `update_type` (text) - 'financial', 'construction', 'milestone'
      - `images` (jsonb, array of image URLs)
      - `published_at` (timestamp)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access to project data
    - Add policies for donor data access (own data only)
    - Add policies for admin operations
*/

-- Create donors table
CREATE TABLE IF NOT EXISTS donors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  first_name text NOT NULL,
  last_name text NOT NULL,
  phone text,
  company text,
  profession text,
  country text DEFAULT 'CI',
  is_anonymous boolean DEFAULT false,
  donor_type text DEFAULT 'individual' CHECK (donor_type IN ('individual', 'corporate', 'founder', 'builder')),
  preferred_language text DEFAULT 'fr' CHECK (preferred_language IN ('fr', 'en')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create donations table
CREATE TABLE IF NOT EXISTS donations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_id uuid REFERENCES donors(id) ON DELETE SET NULL,
  amount numeric NOT NULL CHECK (amount > 0),
  currency text DEFAULT 'XOF' CHECK (currency IN ('XOF', 'EUR', 'USD')),
  donation_type text DEFAULT 'one_time' CHECK (donation_type IN ('one_time', 'monthly', 'quarterly', 'annual')),
  category text DEFAULT 'general',
  payment_method text CHECK (payment_method IN ('mobile_money', 'wave', 'djamo', 'paypal', 'bank_transfer', 'cash', 'card')),
  payment_status text DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded')),
  transaction_reference text,
  dedication_message text,
  sponsorship_element text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create project_elements table
CREATE TABLE IF NOT EXISTS project_elements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_fr text NOT NULL,
  name_en text NOT NULL,
  description_fr text,
  description_en text,
  target_amount numeric NOT NULL CHECK (target_amount > 0),
  current_amount numeric DEFAULT 0 CHECK (current_amount >= 0),
  category text DEFAULT 'architectural' CHECK (category IN ('architectural', 'liturgical', 'infrastructure')),
  is_available boolean DEFAULT true,
  image_url text,
  sponsor_name text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create benefactors table
CREATE TABLE IF NOT EXISTS benefactors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_id uuid UNIQUE REFERENCES donors(id) ON DELETE CASCADE,
  total_donated numeric DEFAULT 0 CHECK (total_donated >= 0),
  recognition_level text DEFAULT 'bronze' CHECK (recognition_level IN ('bronze', 'silver', 'gold', 'platinum', 'founder')),
  display_name text NOT NULL,
  is_visible boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create project_updates table
CREATE TABLE IF NOT EXISTS project_updates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_fr text NOT NULL,
  title_en text NOT NULL,
  content_fr text NOT NULL,
  content_en text NOT NULL,
  update_type text DEFAULT 'construction' CHECK (update_type IN ('financial', 'construction', 'milestone')),
  images jsonb DEFAULT '[]'::jsonb,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE donors ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_elements ENABLE ROW LEVEL SECURITY;
ALTER TABLE benefactors ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_updates ENABLE ROW LEVEL SECURITY;

-- Policies for donors (users can only see their own data)
CREATE POLICY "Donors can view own data"
  ON donors FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id::text);

CREATE POLICY "Anyone can create donor record"
  ON donors FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Donors can update own data"
  ON donors FOR UPDATE
  TO authenticated
  USING (auth.uid()::text = id::text)
  WITH CHECK (auth.uid()::text = id::text);

-- Policies for donations
CREATE POLICY "Anyone can create donations"
  ON donations FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Donors can view own donations"
  ON donations FOR SELECT
  TO authenticated
  USING (donor_id::text = auth.uid()::text);

-- Policies for project_elements (public read)
CREATE POLICY "Anyone can view project elements"
  ON project_elements FOR SELECT
  TO anon, authenticated
  USING (true);

-- Policies for benefactors (public read for visible ones)
CREATE POLICY "Anyone can view visible benefactors"
  ON benefactors FOR SELECT
  TO anon, authenticated
  USING (is_visible = true);

-- Policies for project_updates (public read)
CREATE POLICY "Anyone can view published updates"
  ON project_updates FOR SELECT
  TO anon, authenticated
  USING (published_at IS NOT NULL);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_donations_donor_id ON donations(donor_id);
CREATE INDEX IF NOT EXISTS idx_donations_created_at ON donations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_donations_status ON donations(payment_status);
CREATE INDEX IF NOT EXISTS idx_benefactors_recognition ON benefactors(recognition_level);
CREATE INDEX IF NOT EXISTS idx_benefactors_total ON benefactors(total_donated DESC);
CREATE INDEX IF NOT EXISTS idx_project_updates_published ON project_updates(published_at DESC);

-- Create function to update benefactor total
CREATE OR REPLACE FUNCTION update_benefactor_total()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.payment_status = 'completed' THEN
    INSERT INTO benefactors (donor_id, total_donated, display_name)
    SELECT 
      NEW.donor_id,
      NEW.amount,
      CASE 
        WHEN d.is_anonymous THEN 'Donateur Anonyme'
        ELSE d.first_name || ' ' || d.last_name
      END
    FROM donors d
    WHERE d.id = NEW.donor_id
    ON CONFLICT (donor_id) 
    DO UPDATE SET 
      total_donated = benefactors.total_donated + NEW.amount,
      recognition_level = CASE
        WHEN benefactors.total_donated + NEW.amount >= 10000000 THEN 'founder'
        WHEN benefactors.total_donated + NEW.amount >= 5000000 THEN 'platinum'
        WHEN benefactors.total_donated + NEW.amount >= 1000000 THEN 'gold'
        WHEN benefactors.total_donated + NEW.amount >= 500000 THEN 'silver'
        ELSE 'bronze'
      END,
      updated_at = now();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for benefactor updates
DROP TRIGGER IF EXISTS update_benefactor_on_donation ON donations;
CREATE TRIGGER update_benefactor_on_donation
  AFTER INSERT OR UPDATE ON donations
  FOR EACH ROW
  EXECUTE FUNCTION update_benefactor_total();

-- Create function to update project element amount
CREATE OR REPLACE FUNCTION update_project_element_amount()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.payment_status = 'completed' AND NEW.sponsorship_element IS NOT NULL THEN
    UPDATE project_elements
    SET 
      current_amount = current_amount + NEW.amount,
      is_available = CASE 
        WHEN current_amount + NEW.amount >= target_amount THEN false
        ELSE true
      END,
      updated_at = now()
    WHERE id::text = NEW.sponsorship_element;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for project element updates
DROP TRIGGER IF EXISTS update_element_on_donation ON donations;
CREATE TRIGGER update_element_on_donation
  AFTER INSERT OR UPDATE ON donations
  FOR EACH ROW
  EXECUTE FUNCTION update_project_element_amount();