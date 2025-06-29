import React, { useState } from 'react';
import { Calculator, Calendar, CheckSquare, Users, DollarSign, Clock } from 'lucide-react';

const PlanningToolsPage: React.FC = () => {
  const [budgetData, setBudgetData] = useState({
    totalBudget: 10000,
    venue: 40,
    catering: 30,
    photography: 10,
    decoration: 10,
    entertainment: 5,
    other: 5
  });

  const [guestCount, setGuestCount] = useState(100);
  const [eventType, setEventType] = useState('wedding');

  const calculateBudgetBredown = () => {
    return {
      venue: (budgetData.totalBudget * budgetData.venue) / 100,
      catering: (budgetData.totalBudget * budgetData.catering) / 100,
      photography: (budgetData.totalBudget * budgetData.photography) / 100,
      decoration: (budgetData.totalBudget * budgetData.decoration) / 100,
      entertainment: (budgetData.totalBudget * budgetData.entertainment) / 100,
      other: (budgetData.totalBudget * budgetData.other) / 100
    };
  };

  const breakdown = calculateBudgetBredown();

  const tools = [
    {
      icon: Calculator,
      title: 'Budget Calculator',
      description: 'Plan your event budget with our smart calculator',
      color: 'from-[#FF6F61] to-[#C084FC]'
    },
    {
      icon: Calendar,
      title: 'Timeline Planner',
      description: 'Create a detailed timeline for your event',
      color: 'from-[#C084FC] to-[#FF6F61]'
    },
    {
      icon: CheckSquare,
      title: 'Checklist Manager',
      description: 'Keep track of all your event planning tasks',
      color: 'from-[#FF6F61] to-[#C084FC]'
    },
    {
      icon: Users,
      title: 'Guest List Manager',
      description: 'Organize and manage your guest list efficiently',
      color: 'from-[#C084FC] to-[#FF6F61]'
    }
  ];

  const checklist = [
    { task: 'Set event date and time', completed: true },
    { task: 'Determine guest count', completed: true },
    { task: 'Set budget', completed: true },
    { task: 'Book venue', completed: false },
    { task: 'Choose catering service', completed: false },
    { task: 'Hire photographer', completed: false },
    { task: 'Plan decorations', completed: false },
    { task: 'Arrange entertainment', completed: false },
    { task: 'Send invitations', completed: false },
    { task: 'Confirm all vendors', completed: false }
  ];

  const timeline = [
    { phase: '6 months before', tasks: ['Set date', 'Book venue', 'Create guest list'] },
    { phase: '4 months before', tasks: ['Choose catering', 'Hire photographer', 'Plan decorations'] },
    { phase: '2 months before', tasks: ['Send invitations', 'Finalize menu', 'Confirm vendors'] },
    { phase: '1 month before', tasks: ['Final headcount', 'Rehearsal planning', 'Final payments'] },
    { phase: '1 week before', tasks: ['Confirm timeline', 'Prepare emergency kit', 'Final checks'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-[#FF6F61]/3 to-[#C084FC]/8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B263B] via-[#1B263B]/90 to-[#C084FC]/20 py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Planning tools background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#C084FC]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FF6F61]/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Planning Tools
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful tools to help you plan and organize your perfect event
          </p>
        </div>
      </section>

      {/* Tools Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border border-[#FF6F61]/10">
                <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#1B263B] mb-2">{tool.title}</h3>
                <p className="text-gray-600 text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Calculator */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B263B] mb-4">Budget Calculator</h2>
            <p className="text-gray-600 text-lg">Plan your event budget with recommended allocations</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Budget Input */}
            <div className="bg-gradient-to-br from-[#FF6F61]/5 to-[#C084FC]/5 rounded-2xl p-8 border border-[#FF6F61]/10">
              <h3 className="text-xl font-semibold text-[#1B263B] mb-6">Budget Settings</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#1B263B] mb-2">
                    Total Budget: ${budgetData.totalBudget.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={budgetData.totalBudget}
                    onChange={(e) => setBudgetData({...budgetData, totalBudget: parseInt(e.target.value)})}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1B263B] mb-2">
                    Event Type
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F61] focus:border-transparent bg-white/90"
                  >
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="anniversary">Anniversary</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1B263B] mb-2">
                    Guest Count: {guestCount}
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="10"
                    value={guestCount}
                    onChange={(e) => setGuestCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>
            </div>

            {/* Budget Breakdown */}
            <div className="bg-gradient-to-br from-[#C084FC]/5 to-[#FF6F61]/5 rounded-2xl p-8 border border-[#C084FC]/10">
              <h3 className="text-xl font-semibold text-[#1B263B] mb-6">Budget Breakdown</h3>
              
              <div className="space-y-4">
                {Object.entries(breakdown).map(([category, amount]) => (
                  <div key={category} className="flex items-center justify-between p-4 bg-white/80 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-gradient-to-r from-[#FF6F61] to-[#C084FC] rounded-full"></div>
                      <span className="font-medium text-[#1B263B] capitalize">{category}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-[#1B263B]">${amount.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">
                        {budgetData[category as keyof typeof budgetData]}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-[#FF6F61] to-[#C084FC] rounded-lg text-white">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Cost per Guest:</span>
                  <span className="text-xl font-bold">${(budgetData.totalBudget / guestCount).toFixed(0)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Planner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B263B] mb-4">Event Timeline</h2>
            <p className="text-gray-600 text-lg">Stay organized with our recommended planning timeline</p>
          </div>

          <div className="space-y-8">
            {timeline.map((phase, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FF6F61] to-[#C084FC] rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6 border border-[#FF6F61]/10">
                  <h3 className="text-lg font-semibold text-[#1B263B] mb-3">{phase.phase}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {phase.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-center space-x-2">
                        <CheckSquare className="w-4 h-4 text-[#FF6F61]" />
                        <span className="text-gray-600">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist Manager */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B263B] mb-4">Event Checklist</h2>
            <p className="text-gray-600 text-lg">Keep track of your planning progress</p>
          </div>

          <div className="bg-gradient-to-br from-[#FF6F61]/5 to-[#C084FC]/5 rounded-2xl p-8 border border-[#FF6F61]/10">
            <div className="space-y-4">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white/80 rounded-lg">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    readOnly
                    className="w-5 h-5 text-[#FF6F61] rounded border-gray-300 focus:ring-[#FF6F61]"
                  />
                  <span className={`flex-1 ${item.completed ? 'text-gray-500 line-through' : 'text-[#1B263B]'}`}>
                    {item.task}
                  </span>
                  {item.completed && (
                    <span className="text-green-500 text-sm font-medium">Completed</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-[#FF6F61] to-[#C084FC] rounded-lg text-white">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Progress:</span>
                <span className="text-xl font-bold">
                  {Math.round((checklist.filter(item => item.completed).length / checklist.length) * 100)}%
                </span>
              </div>
              <div className="mt-2 bg-white/20 rounded-full h-2">
                <div 
                  className="bg-white rounded-full h-2 transition-all duration-300"
                  style={{ width: `${(checklist.filter(item => item.completed).length / checklist.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanningToolsPage;