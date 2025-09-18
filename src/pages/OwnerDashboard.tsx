import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { ProductForm } from "@/components/dashboard/ProductForm";
import { ProductsTable } from "@/components/dashboard/ProductsTable";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image_url: string | null;
  availability_status: boolean;
  created_at: string;
  updated_at: string;
}

export default function OwnerDashboard() {
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAdmin) {
      fetchProducts();
      
      // Set up real-time subscription
      const channel = supabase
        .channel('products-changes')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'products'
          },
          () => {
            fetchProducts();
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [isAdmin]);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/auth');
        return;
      }

      setUser(session.user);

      // Check if user is admin
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('user_id', session.user.id)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        toast.error('Error checking admin status');
        return;
      }

      if (profile?.role !== 'admin') {
        toast.error('Access denied. Admin privileges required.');
        navigate('/');
        return;
      }

      setIsAdmin(true);
    } catch (error) {
      console.error('Auth check error:', error);
      navigate('/auth');
    } finally {
      setLoading(false);
    }
  };

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Failed to fetch products');
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Checking access...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">Owner Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Welcome, {user?.email}
            </span>
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="grid gap-8">
          {/* Add Product Section */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Product Management</CardTitle>
              <Button 
                onClick={() => setShowAddForm(!showAddForm)}
                variant={showAddForm ? "outline" : "default"}
              >
                {showAddForm ? "Cancel" : "Add New Product"}
              </Button>
            </CardHeader>
            {showAddForm && (
              <CardContent>
                <ProductForm 
                  onSuccess={() => {
                    setShowAddForm(false);
                    toast.success('Product added successfully!');
                  }}
                />
              </CardContent>
            )}
          </Card>

          {/* Products Table */}
          <Card>
            <CardHeader>
              <CardTitle>All Products ({products.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <ProductsTable products={products} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}