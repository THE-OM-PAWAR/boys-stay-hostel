import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bed, Users, Wifi, Coffee } from 'lucide-react';

export function RoomsSection() {
  const rooms = [
    {
      name: 'Shared Dorm',
      description: 'Perfect for solo travelers looking to meet new people',
      price: '$25',
      capacity: '6-8 beds',
      features: ['Free WiFi', 'Shared Bathroom', 'Lockers', 'Common Area'],
    },
    {
      name: 'Private Room',
      description: 'Your own space with all the hostel perks',
      price: '$60',
      capacity: '2 beds',
      features: ['Free WiFi', 'Private Bathroom', 'Workspace', 'Mini Fridge'],
    },
    {
      name: 'Deluxe Suite',
      description: 'Premium comfort with stunning city views',
      price: '$95',
      capacity: '2-4 beds',
      features: ['Free WiFi', 'Ensuite Bath', 'City View', 'Kitchenette'],
    },
  ];

  return (
    <section id="rooms" className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">Our Rooms</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose the perfect space for your stay. All rooms include premium
            amenities and access to our shared facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card
              key={index}
              className="p-8 rounded-3xl border-gray-200 bg-white hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6 flex items-center justify-center">
                <Bed className="w-12 h-12 text-gray-400" />
              </div>

              <h3 className="text-2xl font-semibold mb-2">{room.name}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {room.description}
              </p>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold">{room.price}</span>
                <span className="text-gray-500">/ night</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                <Users className="w-4 h-4" />
                <span>{room.capacity}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {room.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#fca311]" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-black hover:bg-black/90 rounded-xl">
                Book Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
