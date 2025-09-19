-- Create admin users table for authentication
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id),
  UNIQUE(email)
);

-- Enable RLS on admin_users table
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Admin users can view their own record
CREATE POLICY "Admin users can view own record" 
ON public.admin_users 
FOR SELECT 
USING (auth.uid() = user_id);

-- Only authenticated users can insert admin records (for initial setup)
CREATE POLICY "Authenticated users can insert admin records" 
ON public.admin_users 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Update contacts table RLS policies
-- Remove existing policies first
DROP POLICY IF EXISTS "Allow public insert for new contacts" ON public.contacts;

-- Keep public insert for contact form submissions
CREATE POLICY "Allow public insert for new contacts" 
ON public.contacts 
FOR INSERT 
WITH CHECK (true);

-- Add admin-only select policy for contacts
CREATE POLICY "Admin read contacts" 
ON public.contacts 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid()
  )
);

-- Add admin-only update policy for contacts
CREATE POLICY "Admin update contacts" 
ON public.contacts 
FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid()
  )
);

-- Add admin-only delete policy for contacts  
CREATE POLICY "Admin delete contacts" 
ON public.contacts 
FOR DELETE 
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid()
  )
);

-- Create function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID DEFAULT auth.uid())
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE admin_users.user_id = $1
  );
$$;