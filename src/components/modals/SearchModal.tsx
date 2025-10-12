import { useState } from 'react';
import { X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SearchModalProps {
  onClose: () => void;
}

const SearchModal = ({ onClose }: SearchModalProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    
    if (searchQuery.length < 2) {
      setResults([]);
      return;
    }

    // Simulation de recherche - à remplacer par une vraie recherche
    const mockResults = [
      { type: 'Cours', name: 'Mathématiques - Théorème de Pythagore', price: 50, level: 'Collège' },
      { type: 'Résumé', name: 'Physique-Chimie - Électricité', price: 150, level: 'Lycée' },
      { type: 'Exposé', name: 'Histoire - La colonisation', price: 350, level: 'Lycée' },
    ].filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.level.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(mockResults.slice(0, 10));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 pt-20 overflow-y-auto">
      <Card className="max-w-3xl w-full my-8 animate-scale-in">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
          <CardTitle className="text-2xl">Rechercher</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Rechercher des cours, matières, niveaux..."
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 text-lg h-12"
              autoFocus
            />
          </div>

          {query && results.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p>Aucun résultat pour "{query}"</p>
              <p className="text-sm mt-2">Essayez avec d'autres mots-clés</p>
            </div>
          )}

          {results.length > 0 && (
            <div className="space-y-3 max-h-[60vh] overflow-y-auto">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 hover:bg-accent cursor-pointer transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline">{result.type}</Badge>
                        <Badge variant="secondary">{result.level}</Badge>
                      </div>
                      <h4 className="font-semibold">{result.name}</h4>
                    </div>
                    <Badge className="flex-shrink-0">{result.price} F</Badge>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!query && (
            <div className="text-center py-12 text-muted-foreground">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Commencez à taper pour rechercher</p>
              <p className="text-sm mt-2">Cours, matières, niveaux, produits...</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchModal;
