import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Donor {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone?: string;
  company?: string;
  profession?: string;
  country: string;
  is_anonymous: boolean;
  donor_type: 'individual' | 'corporate' | 'founder' | 'builder';
  preferred_language: 'fr' | 'en';
  created_at: string;
  updated_at: string;
}

export interface Donation {
  id: string;
  donor_id?: string;
  amount: number;
  currency: 'XOF' | 'EUR' | 'USD';
  donation_type: 'one_time' | 'monthly' | 'quarterly' | 'annual';
  category: string;
  payment_method?: 'mobile_money' | 'wave' | 'djamo' | 'paypal' | 'bank_transfer' | 'cash' | 'card';
  payment_status: 'pending' | 'completed' | 'failed' | 'refunded';
  transaction_reference?: string;
  dedication_message?: string;
  sponsorship_element?: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectElement {
  id: string;
  name_fr: string;
  name_en: string;
  description_fr?: string;
  description_en?: string;
  target_amount: number;
  current_amount: number;
  category: 'architectural' | 'liturgical' | 'infrastructure';
  is_available: boolean;
  image_url?: string;
  sponsor_name?: string;
  created_at: string;
  updated_at: string;
}

export interface Benefactor {
  id: string;
  donor_id: string;
  total_donated: number;
  recognition_level: 'bronze' | 'silver' | 'gold' | 'platinum' | 'founder';
  display_name: string;
  is_visible: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProjectUpdate {
  id: string;
  title_fr: string;
  title_en: string;
  content_fr: string;
  content_en: string;
  update_type: 'financial' | 'construction' | 'milestone';
  images: string[];
  published_at: string;
  created_at: string;
}
