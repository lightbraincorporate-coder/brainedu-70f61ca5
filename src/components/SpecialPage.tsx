import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Brain, Lightbulb, BookMarked } from 'lucide-react';
import { specialProducts } from '@/data/products';
import { CartItem } from '@/types';
import { toast } from 'sonner';

interface SpecialPageProps {
  onAddToCart: (item: CartItem) => void;
  onShowFlashcardForm: () => void;
}

const SpecialPage = ({ onAddToCart, onShowFlashcardForm }: SpecialPageProps) => {
  const handleAddToCart = (product: { name: string; price: number; icon?: string }) => {
    const item: CartItem = {
      id: `${Date.now()}-${Math.random()}`,
      name: product.name,
      price: product.price
    };
    onAddToCart(item);
    toast.success(`${product.name} ajouté au panier !`);
  };

  const getIcon = (productName: string) => {
    if (productName.includes('calcul')) return <Lightbulb className="w-12 h-12" />;
    if (productName.includes('Culture')) return <BookMarked className="w-12 h-12" />;
    return <Brain className="w-12 h-12" />;
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Développement Personnel</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Boostez vos compétences avec nos ressources spécialisées
          </p>
        </div>

        {/* Flashcards Section */}
        <Card className="mb-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20 animate-scale-in">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Brain className="w-8 h-8 text-primary" />
              Flashcards Personnalisées
            </CardTitle>
            <CardDescription className="text-base">
              Commandez vos flashcards sur mesure pour une mémorisation efficace
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">Prix</span>
                <Badge variant="secondary" className="text-lg px-4 py-2">600 F CFA</Badge>
              </div>
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <p className="text-sm font-semibold text-destructive">Important</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Livraison physique uniquement à Brazzaville, République du Congo
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              size="lg" 
              className="w-full gap-2"
              onClick={onShowFlashcardForm}
            >
              <BookMarked className="w-5 h-5" />
              Commander des flashcards
            </Button>
          </CardFooter>
        </Card>

        {/* Special Products */}
        <h2 className="text-2xl font-bold mb-6">Autres produits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialProducts.map((product, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex justify-center mb-4 text-primary">
                  {getIcon(product.name)}
                </div>
                <CardTitle className="text-center text-lg">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  {product.price} F CFA
                </Badge>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full gap-2"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Ajouter
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <Card className="mt-12 animate-fade-in">
          <CardHeader>
            <CardTitle>Pourquoi choisir nos produits de développement ?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Méthodes éprouvées pour améliorer votre apprentissage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Contenu adapté au programme scolaire congolais</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Techniques de mémorisation validées scientifiquement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Culture générale pour enrichir vos connaissances</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SpecialPage;
