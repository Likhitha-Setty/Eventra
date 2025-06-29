import React from 'react';
import { eventTypes } from '../data/mockData';

interface EventTypeSelectorProps {
  selectedType: string;
  onTypeSelect: (type: string) => void;
}

const EventTypeSelector: React.FC<EventTypeSelectorProps> = ({ selectedType, onTypeSelect }) => {
  return (
    <section className="bg-gradient-to-r from-[#FF6F61]/5 via-white to-[#C084FC]/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1B263B] mb-4">
            What's Your Event Type?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose your event type to discover tailored vendors and services
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {eventTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => onTypeSelect(type.id)}
              className={`group p-6 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 ${
                selectedType === type.id
                  ? 'bg-gradient-to-br from-[#FF6F61] to-[#C084FC] text-white shadow-xl shadow-[#FF6F61]/25'
                  : 'bg-white text-gray-700 hover:bg-gradient-to-br hover:from-[#FF6F61]/10 hover:to-[#C084FC]/10 hover:text-[#1B263B] shadow-md hover:shadow-lg'
              }`}
            >
              <div className="text-3xl mb-3">{type.icon}</div>
              <div className="font-semibold text-sm lg:text-base">{type.name}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTypeSelector;