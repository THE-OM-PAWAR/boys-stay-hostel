import { Card } from '@/components/ui/card';
import { Image as ImageIcon } from 'lucide-react';

export function GallerySection() {
  const galleryItems = [
    { title: 'Cozy Common Area', span: 'md:col-span-2 md:row-span-2' },
    { title: 'Modern Rooms', span: '' },
    { title: 'Rooftop Terrace', span: '' },
    { title: 'Shared Kitchen', span: '' },
    { title: 'Social Events', span: '' },
    { title: 'City Views', span: 'md:col-span-2' },
  ];

  return (
    <section id="gallery" className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Take a peek at our spaces. See where you'll stay, relax, and connect
            with fellow travelers.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className={`${item.span} rounded-3xl border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer`}
            >
              <div className="relative aspect-square md:aspect-auto md:h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-gray-400 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-semibold">{item.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Want to see more? Check out our full photo gallery.
          </p>
          <button className="text-black font-semibold hover:text-[#fca311] transition-colors">
            View All Photos →
          </button>
        </div>
      </div>
    </section>
  );
}
