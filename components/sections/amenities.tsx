import { Card } from '@/components/ui/card';
import {
  Wifi,
  Coffee,
  Utensils,
  Dumbbell,
  Laptop,
  Music,
  Bike,
  MapPin,
  Tv,
  WashingMachine,
  UtensilsCrossed,
  Fan,
} from 'lucide-react';

export function AmenitiesSection() {
  const amenities = [
    { icon: Wifi, name: 'Free WiFi', description: 'High-speed internet' },
    { icon: Coffee, name: 'Free Coffee', description: 'All day, every day' },
    { icon: Utensils, name: 'Kitchen', description: 'Fully equipped' },
    { icon: Dumbbell, name: 'Gym Access', description: 'Stay active' },
    { icon: Laptop, name: 'Workspace', description: 'Co-working area' },
    { icon: Music, name: 'Common Room', description: 'Socialize & relax' },
    { icon: Bike, name: 'Bike Rental', description: 'Explore the city' },
    { icon: MapPin, name: 'Tours', description: 'Guided excursions' },
    { icon: Tv, name: 'Entertainment', description: 'Movies & games' },
    {
      icon: WashingMachine,
      name: 'Laundry',
      description: 'Washing facilities',
    },
    { icon: UtensilsCrossed, name: 'Dining Area', description: 'Shared meals' },
    { icon: Fan, name: 'Climate Control', description: 'AC & heating' },
  ];

  return (
    <section id="amenities" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">Amenities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need for a comfortable stay. Our facilities are
            designed to make you feel at home.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <Card
                key={index}
                className="p-8 rounded-3xl border-gray-100 shadow-sm hover:shadow-md transition-all hover:scale-105 text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#fca311]/10 flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-[#fca311]" />
                </div>
                <h3 className="font-semibold mb-1">{amenity.name}</h3>
                <p className="text-sm text-gray-600">{amenity.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
