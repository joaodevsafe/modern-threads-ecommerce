
import { Link } from 'react-router-dom';
import { collections } from '@/data/products';
import ImagePlaceholder from './ImagePlaceholder';

const CollectionsGrid = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-medium text-center mb-12">Shop by Collection</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <Link 
              to={`/collections/${collection.id}`} 
              key={collection.id} 
              className="group relative overflow-hidden"
            >
              <div className="aspect-[3/4] bg-gray-100">
                <ImagePlaceholder 
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 flex items-end p-6 transition-opacity group-hover:bg-black/40">
                <div className="text-white">
                  <h3 className="font-serif text-xl font-medium mb-2">{collection.name}</h3>
                  <p className="text-sm text-white/90">{collection.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsGrid;
