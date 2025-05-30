
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ImagePlaceholder from './ImagePlaceholder';

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <ImagePlaceholder 
          alt="LOJAODAFE fashion collection" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-md">
          <h1 className="font-serif text-5xl md:text-6xl font-medium mb-6">
            LOJAODAFE - Coleção 2024
          </h1>
          <p className="text-lg mb-8">
            Descubra nossas novidades criadas para o indivíduo moderno.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link to="/products?collection=new">Ver Novidades</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/products">Explorar Coleções</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
