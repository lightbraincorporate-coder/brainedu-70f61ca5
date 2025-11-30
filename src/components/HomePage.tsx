import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { BookOpen, Sparkles, Crown, GraduationCap, FileText, Presentation, Brain, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import BrainCorpInfo from './BrainCorpInfo';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';
import { toast } from 'sonner';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const features = [
    {
      icon: BookOpen,
      title: 'Cours Complets',
      description: 'Accédez à des cours détaillés pour tous les niveaux scolaires',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FileText,
      title: 'Résumés',
      description: 'Révisions efficaces avec nos résumés synthétiques',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Presentation,
      title: 'Exposés',
      description: 'Exposés rédigés pour vos présentations scolaires',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Brain,
      title: 'Exercices',
      description: 'Pratiquez avec nos exercices corrigés',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const levels = [
    { name: 'Primaire', icon: '📚', description: 'Du CP au CM2' },
    { name: 'Collège', icon: '🎓', description: '6ème à 3ème' },
    { name: 'Lycée', icon: '📖', description: 'Toutes séries' },
    { name: 'Université', icon: '🎯', description: 'Licence & Master' }
  ];

  const faqItems = [
    {
      question: "Comment accéder aux cours ?",
      answer: "Parcourez notre catalogue en cliquant sur 'Explorer le catalogue', sélectionnez votre niveau, votre classe, votre matière et le trimestre. Vous trouverez tous les cours disponibles organisés par thème."
    },
    {
      question: "Les cours sont-ils gratuits ?",
      answer: "Nous proposons une version gratuite avec accès limité et une version Premium avec accès complet à tous les contenus, exercices corrigés, résumés et exposés."
    },
    {
      question: "Comment fonctionne le paiement ?",
      answer: "Après avoir sélectionné vos ressources, vous procédez au paiement via Mobile Money. Choisissez votre pays et votre mode de paiement, puis suivez les instructions pour envoyer le paiement. Un administrateur validera votre paiement et vous aurez accès immédiat au téléchargement."
    },
    {
      question: "Quels sont les modes de paiement acceptés ?",
      answer: "Nous acceptons tous les principaux modes de paiement mobile en Afrique : MTN Mobile Money, Airtel Money, Orange Money, Moov Money, Wave, et bien d'autres selon votre pays."
    },
    {
      question: "Combien de temps faut-il pour valider mon paiement ?",
      answer: "La validation est généralement instantanée ou prend quelques minutes. Nos administrateurs travaillent en continu pour valider les paiements rapidement."
    },
    {
      question: "Puis-je télécharger les cours pour les consulter hors ligne ?",
      answer: "Oui ! Une fois votre paiement validé, vous pouvez télécharger tous les fichiers (cours, exercices, résumés, exposés) et les consulter à tout moment, même sans connexion internet."
    },
    {
      question: "Les cours sont-ils conformes aux programmes officiels ?",
      answer: "Oui, tous nos contenus sont créés en conformité avec les programmes scolaires officiels de votre pays et sont régulièrement mis à jour."
    },
    {
      question: "Y a-t-il des exercices corrigés ?",
      answer: "Absolument ! Chaque cours est accompagné d'exercices avec leurs corrections détaillées pour vous permettre de pratiquer et de progresser."
    },
  ];

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    // TODO: Implémenter l'envoi du formulaire
    console.log('Contact form:', contactForm);
    toast.success('Message envoyé !', {
      description: 'Nous vous répondrons dans les plus brefs délais'
    });

    // Reset form
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Osez détenir le savoir
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Votre plateforme éducative complète pour réussir à tous les niveaux
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => onNavigate('resourceType')}
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <BookOpen className="mr-2 w-5 h-5" />
                Explorer le catalogue
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => onNavigate('premium')}
                className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 border-white/30 text-primary-foreground"
              >
                <Crown className="mr-2 w-5 h-5" />
                Voir Premium
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des ressources éducatives de qualité pour accompagner votre réussite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pour tous les niveaux
            </h2>
            <p className="text-lg text-muted-foreground">
              Du primaire à l'université, nous avons ce qu'il vous faut
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((level, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group border-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => onNavigate('resourceType')}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {level.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{level.name}</h3>
                  <p className="text-muted-foreground">{level.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tout ce que vous devez savoir sur BrainEdu
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background border-2 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contactez-nous
            </h2>
            <p className="text-lg text-muted-foreground">
              Une question ? Nous sommes là pour vous aider
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Nos coordonnées</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Téléphone</p>
                      <p className="text-muted-foreground">+242 06 607 01 76</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">contact@brainedu.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Localisation</p>
                      <p className="text-muted-foreground">Congo, Afrique</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-muted-foreground">Disponible 7j/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Envoyez-nous un message</CardTitle>
                <CardDescription>
                  Nous vous répondrons dans les plus brefs délais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitContact} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Votre nom *"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Votre email *"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Sujet"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Votre message *"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Mail className="mr-2 w-4 h-4" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* BrainCorp Info Section */}
      <BrainCorpInfo />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <Sparkles className="w-16 h-16 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Prêt à commencer votre aventure éducative ?
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Rejoignez des milliers d'étudiants qui réussissent grâce à BrainEdu
          </p>
          <Button 
            size="lg"
            variant="secondary"
            onClick={() => onNavigate('resourceType')}
            className="text-lg px-8 py-6"
          >
            <GraduationCap className="mr-2 w-5 h-5" />
            Commencer maintenant
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;