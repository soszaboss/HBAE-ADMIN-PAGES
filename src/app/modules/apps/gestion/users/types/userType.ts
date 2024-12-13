type UserRole = 'individual' | 'company';
type SubscriptionPlan = 'prestige' | 'ambition' | 'young';

export type User ={
  id: number; 
  first_name: string; 
  last_name: string; 
  email: string; 
  password: string; 
  phone_number?: string; 
  address?: string; 
  role: UserRole; 
  company_name?: string; 
  company_contact?: string; 
  subscription_plan: SubscriptionPlan; 
  subscription_start: Date; 
  subscription_end: Date; 
  credits_balance: number; 
  credits_used: number; 
  credits_transferred: number; 
  is_active: boolean; 
  last_login?: Date; 
  created_at: Date; 
  updated_at: Date; 
  is_verified: boolean; 
  profile_picture?: string; 
}