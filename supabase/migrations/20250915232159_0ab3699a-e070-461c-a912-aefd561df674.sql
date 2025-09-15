-- First, let's add a user_id column to the Orders table to link orders to authenticated users
-- Note: Using correct case-sensitive table name "Orders"
ALTER TABLE public."Orders" 
ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

-- Enable Row Level Security on the Orders table
ALTER TABLE public."Orders" ENABLE ROW LEVEL SECURITY;

-- Policy 1: Allow authenticated users to view only their own orders
CREATE POLICY "Users can view their own orders" 
ON public."Orders" 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- Policy 2: Allow authenticated users to insert their own orders
CREATE POLICY "Users can create their own orders" 
ON public."Orders" 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Policy 3: Allow authenticated users to update their own orders (limited scope)
CREATE POLICY "Users can update their own orders" 
ON public."Orders" 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Policy 4: Prevent users from deleting orders (orders should be preserved for business records)
-- No DELETE policy means no one can delete orders except authorized database administrators

-- Add index for better performance on user_id queries
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON public."Orders"(user_id);

-- Add updated_at column if it doesn't exist and create trigger
DO $$ 
BEGIN
    -- Add updated_at column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'Orders' AND column_name = 'updated_at') THEN
        ALTER TABLE public."Orders" ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT now();
    END IF;
    
    -- Create trigger for updated_at
    IF NOT EXISTS (SELECT 1 FROM information_schema.triggers WHERE trigger_name = 'update_orders_updated_at') THEN
        CREATE TRIGGER update_orders_updated_at
            BEFORE UPDATE ON public."Orders"
            FOR EACH ROW
            EXECUTE FUNCTION public.update_updated_at_column();
    END IF;
END $$;