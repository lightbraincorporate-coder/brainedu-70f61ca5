import { useState } from 'react';
import { X, BookOpen, User, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { bookCategories, BookCategory } from '@/data/bookCategories';

interface BookOrderModalProps {
  onClose: () => void;
  onOrder: (bookInfo: { category: string; title: string; author: string }) => void;
}

const BookOrderModal = ({ onClose, onOrder }: BookOrderModalProps) => {
  const [step, setStep] = useState<'category' | 'form'>('category');
  const [selectedCategory, setSelectedCategory] = useState<BookCategory | null>(null);
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');

  const handleCategorySelect = (category: BookCategory) => {
    setSelectedCategory(category);
    setStep('form');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookTitle.trim() && bookAuthor.trim() && selectedCategory) {
      onOrder({
        category: selectedCategory.name,
        title: bookTitle,
        author: bookAuthor
      });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-card rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Commander un Livre</h2>
              <p className="text-sm text-muted-foreground">
                {step === 'category' ? 'Choisissez une catégorie' : 'Renseignez les informations du livre'}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6">
          {step === 'category' ? (
            <div>
              <p className="text-muted-foreground mb-6">
                Sélectionnez la catégorie du livre que vous recherchez. Nous vous fournirons le livre en format PDF.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {bookCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategorySelect(category)}
                    className="group p-6 rounded-xl border-2 border-border hover:border-primary bg-card hover:shadow-elegant transition-all duration-300 text-left"
                  >
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Selected Category */}
              <div className="bg-muted/30 p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedCategory?.icon}</span>
                  <div>
                    <p className="text-sm text-muted-foreground">Catégorie sélectionnée</p>
                    <p className="font-bold text-foreground">{selectedCategory?.name}</p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setStep('category')}
                >
                  Changer
                </Button>
              </div>

              {/* Book Title */}
              <div className="space-y-2">
                <Label htmlFor="bookTitle" className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Titre du Livre
                </Label>
                <Input
                  id="bookTitle"
                  value={bookTitle}
                  onChange={(e) => setBookTitle(e.target.value)}
                  placeholder="Ex: L'Étranger, 1984, Sapiens..."
                  required
                  className="text-lg"
                />
              </div>

              {/* Author */}
              <div className="space-y-2">
                <Label htmlFor="bookAuthor" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Auteur
                </Label>
                <Input
                  id="bookAuthor"
                  value={bookAuthor}
                  onChange={(e) => setBookAuthor(e.target.value)}
                  placeholder="Ex: Albert Camus, George Orwell..."
                  required
                  className="text-lg"
                />
              </div>

              {/* Price Info */}
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                <p className="text-sm text-foreground">
                  <span className="font-bold">Prix:</span> 300 F CFA
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Format PDF téléchargeable après validation du paiement
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep('category')}
                  className="flex-1"
                >
                  Retour
                </Button>
                <Button
                  type="submit"
                  className="flex-1 gap-2"
                  disabled={!bookTitle.trim() || !bookAuthor.trim()}
                >
                  <Pencil className="w-4 h-4" />
                  Commander ce Livre
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookOrderModal;
