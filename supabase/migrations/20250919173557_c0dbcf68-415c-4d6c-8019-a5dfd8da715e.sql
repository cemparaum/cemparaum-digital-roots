-- Ensure RLS is properly enforced by adding a restrictive default policy
-- Drop existing policies and recreate them more securely
DROP POLICY IF EXISTS "Admin read contacts" ON public.contacts;
DROP POLICY IF EXISTS "Admin update contacts" ON public.contacts;
DROP POLICY IF EXISTS "Admin delete contacts" ON public.contacts;
DROP POLICY IF EXISTS "Allow public insert for new contacts" ON public.contacts;

-- Recreate policies with explicit restrictive defaults
-- Allow public insert for contact form submissions (this is needed for the website)
CREATE POLICY "Allow public insert for new contacts" 
ON public.contacts 
FOR INSERT 
TO public
WITH CHECK (true);

-- Restrict SELECT to authenticated admin users only
CREATE POLICY "Admin read contacts" 
ON public.contacts 
FOR SELECT 
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid()
  )
);

-- Restrict UPDATE to authenticated admin users only
CREATE POLICY "Admin update contacts" 
ON public.contacts 
FOR UPDATE 
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid()
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid()
  )
);

-- Restrict DELETE to authenticated admin users only
CREATE POLICY "Admin delete contacts" 
ON public.contacts 
FOR DELETE 
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid()
  )
);

-- Add a restrictive default policy that denies all access by default
-- This ensures no access unless explicitly allowed by other policies
CREATE POLICY "Deny all by default" 
ON public.contacts 
FOR ALL 
TO public
USING (false)
WITH CHECK (false);

-- Make sure the specific INSERT policy has higher priority by recreating it last
DROP POLICY "Allow public insert for new contacts" ON public.contacts;
CREATE POLICY "Allow public insert for new contacts" 
ON public.contacts 
FOR INSERT 
TO public
WITH CHECK (true);