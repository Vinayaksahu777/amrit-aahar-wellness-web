import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Pencil, Trash2, Check, X } from "lucide-react";
import type { Product } from "@/pages/OwnerDashboard";

interface ProductsTableProps {
  products: Product[];
}

export function ProductsTable({ products }: ProductsTableProps) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editData, setEditData] = useState<{ price: string; availability_status: boolean }>({
    price: "",
    availability_status: true,
  });
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);

  const startEdit = (product: Product) => {
    setEditingId(product.id);
    setEditData({
      price: product.price.toString(),
      availability_status: product.availability_status,
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditData({ price: "", availability_status: true });
  };

  const saveEdit = async (productId: number) => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('products')
        .update({
          price: parseFloat(editData.price),
          availability_status: editData.availability_status,
        })
        .eq('id', productId);

      if (error) throw error;

      toast.success('Product updated successfully!');
      setEditingId(null);
    } catch (error: any) {
      console.error('Error updating product:', error);
      toast.error(`Failed to update product: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (product: Product) => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', product.id);

      if (error) throw error;

      toast.success('Product deleted successfully!');
      setDeleteDialogOpen(false);
      setProductToDelete(null);
    } catch (error: any) {
      console.error('Error deleting product:', error);
      toast.error(`Failed to delete product: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const toggleAvailability = async (product: Product) => {
    try {
      const { error } = await supabase
        .from('products')
        .update({ availability_status: !product.availability_status })
        .eq('id', product.id);

      if (error) throw error;

      toast.success(`Product ${!product.availability_status ? 'enabled' : 'disabled'} successfully!`);
    } catch (error: any) {
      console.error('Error toggling availability:', error);
      toast.error(`Failed to update product: ${error.message}`);
    }
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No products found. Add your first product to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  {product.image_url ? (
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-muted rounded-md flex items-center justify-center text-xs text-muted-foreground">
                      No Image
                    </div>
                  )}
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                  {editingId === product.id ? (
                    <Input
                      type="number"
                      step="0.01"
                      min="0"
                      value={editData.price}
                      onChange={(e) => setEditData({ ...editData, price: e.target.value })}
                      className="w-20"
                    />
                  ) : (
                    `$${product.price.toFixed(2)}`
                  )}
                </TableCell>
                <TableCell>
                  {editingId === product.id ? (
                    <Switch
                      checked={editData.availability_status}
                      onCheckedChange={(checked) =>
                        setEditData({ ...editData, availability_status: checked })
                      }
                    />
                  ) : (
                    <Badge variant={product.availability_status ? "default" : "secondary"}>
                      {product.availability_status ? "Available" : "Disabled"}
                    </Badge>
                  )}
                </TableCell>
                <TableCell>
                  {new Date(product.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {editingId === product.id ? (
                      <>
                        <Button
                          size="sm"
                          variant="default"
                          onClick={() => saveEdit(product.id)}
                          disabled={loading}
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={cancelEdit}
                          disabled={loading}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => startEdit(product)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => toggleAvailability(product)}
                        >
                          {product.availability_status ? "Disable" : "Enable"}
                        </Button>
                        <Dialog open={deleteDialogOpen && productToDelete?.id === product.id} onOpenChange={setDeleteDialogOpen}>
                          <DialogTrigger asChild>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setProductToDelete(product)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Delete Product</DialogTitle>
                              <DialogDescription>
                                Are you sure you want to delete "{product.name}"? This action cannot be undone.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                              <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
                                Cancel
                              </Button>
                              <Button
                                variant="destructive"
                                onClick={() => deleteProduct(product)}
                                disabled={loading}
                              >
                                {loading ? "Deleting..." : "Delete"}
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}