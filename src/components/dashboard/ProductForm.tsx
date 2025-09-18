import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

interface ProductFormProps {
  onSuccess: () => void;
  product?: any;
}

export function ProductForm({ onSuccess, product }: ProductFormProps) {
  const [formData, setFormData] = useState({
    name: product?.name || "",
    category: product?.category || "",
    price: product?.price || "",
    image_url: product?.image_url || "",
    availability_status: product?.availability_status ?? true,
  });
  const [loading, setLoading] = useState(false);

  const categories = [
    "Herbs & Spices",
    "Essential Oils", 
    "Supplements",
    "Teas & Beverages",
    "Beauty & Skincare",
    "Health Products"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const productData = {
        ...formData,
        price: parseFloat(formData.price),
      };

      let error;
      
      if (product) {
        const { error: updateError } = await supabase
          .from('products')
          .update(productData)
          .eq('id', product.id);
        error = updateError;
      } else {
        const { error: insertError } = await supabase
          .from('products')
          .insert([productData]);
        error = insertError;
      }

      if (error) throw error;

      onSuccess();
      setFormData({
        name: "",
        category: "",
        price: "",
        image_url: "",
        availability_status: true,
      });
    } catch (error: any) {
      console.error('Error saving product:', error);
      toast.error(`Failed to ${product ? 'update' : 'add'} product: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Product Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category *</Label>
          <Select 
            value={formData.category} 
            onValueChange={(value) => setFormData({ ...formData, category: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Price ($) *</Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            min="0"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            placeholder="0.00"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="image_url">Image URL</Label>
          <Input
            id="image_url"
            type="url"
            value={formData.image_url}
            onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
            placeholder="https://example.com/image.jpg"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="availability"
          checked={formData.availability_status}
          onCheckedChange={(checked) => 
            setFormData({ ...formData, availability_status: checked })
          }
        />
        <Label htmlFor="availability">Available for sale</Label>
      </div>

      <Button type="submit" disabled={loading} className="w-full md:w-auto">
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
            {product ? 'Updating...' : 'Adding...'}
          </div>
        ) : (
          product ? 'Update Product' : 'Add Product'
        )}
      </Button>
    </form>
  );
}