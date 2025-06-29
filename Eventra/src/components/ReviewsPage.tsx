import React, { useState } from 'react';
import { Star, ThumbsUp, Filter, Calendar, User } from 'lucide-react';
import { mockReviews } from '../data/mockData';
import { Review } from '../types';

const ReviewsPage: React.FC = () => {
  const [selectedEventType, setSelectedEventType] = useState<string>('all');
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>('newest');

  const filteredReviews = mockReviews.filter(review => {
    if (selectedEventType !== 'all' && review.eventType.toLowerCase() !== selectedEventType) {
      return false;
    }
    if (selectedRating > 0 && review.rating < selectedRating) {
      return false;
    }
    return true;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'highest-rating':
        return b.rating - a.rating;
      case 'most-helpful':
        return b.helpful - a.helpful;
      default:
        return 0;
    }
  });

  const averageRating = mockReviews.reduce((sum, review) => sum + review.rating, 0) / mockReviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: mockReviews.filter(review => review.rating === rating).length,
    percentage: (mockReviews.filter(review => review.rating === rating).length / mockReviews.length) * 100
  }));

  const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-[#FF6F61]/10">
      <div className="flex items-start space-x-4">
        <img
          src={review.userAvatar}
          alt={review.userName}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h4 className="font-semibold text-[#1B263B]">{review.userName}</h4>
              <p className="text-sm text-gray-600">{review.vendorName} • {review.eventType}</p>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-[#1B263B]">{review.rating}.0</span>
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">{review.comment}</p>

          {review.images && review.images.length > 0 && (
            <div className="grid grid-cols-2 gap-2 mb-4">
              {review.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Review image ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg"
                />
              ))}
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-[#FF6F61] transition-colors">
              <ThumbsUp className="w-4 h-4" />
              <span className="text-sm">Helpful ({review.helpful})</span>
            </button>
            <span className="inline-block px-3 py-1 bg-[#C084FC]/10 text-[#C084FC] text-xs font-medium rounded-full">
              {review.eventType}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-[#C084FC]/3 to-[#FF6F61]/5">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B263B] via-[#1B263B]/90 to-[#C084FC]/20 py-16">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Reviews background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#C084FC]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FF6F61]/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Client Reviews
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            See what our clients say about their amazing event experiences
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{averageRating.toFixed(1)}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
                  />
                ))}
              </div>
              <div className="text-gray-400">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{mockReviews.length}</div>
              <div className="text-gray-400">Total Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-80">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6 sticky top-24 border border-[#FF6F61]/10">
                <h3 className="font-semibold text-[#1B263B] mb-6 flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-[#FF6F61]" />
                  Filter Reviews
                </h3>

                {/* Event Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-[#1B263B] mb-3">Event Type</h4>
                  <select
                    value={selectedEventType}
                    onChange={(e) => setSelectedEventType(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F61] focus:border-transparent bg-white/90"
                  >
                    <option value="all">All Events</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate event">Corporate Event</option>
                    <option value="birthday party">Birthday Party</option>
                    <option value="festival">Festival</option>
                    <option value="anniversary">Anniversary</option>
                  </select>
                </div>

                {/* Rating Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-[#1B263B] mb-3">Minimum Rating</h4>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <label key={rating} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="rating"
                          checked={selectedRating === rating}
                          onChange={() => setSelectedRating(rating)}
                          className="w-4 h-4 text-[#FF6F61] border-gray-300 focus:ring-[#FF6F61]"
                        />
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-1">& up</span>
                        </div>
                      </label>
                    ))}
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        checked={selectedRating === 0}
                        onChange={() => setSelectedRating(0)}
                        className="w-4 h-4 text-[#FF6F61] border-gray-300 focus:ring-[#FF6F61]"
                      />
                      <span className="text-sm text-gray-600">All Ratings</span>
                    </label>
                  </div>
                </div>

                {/* Rating Distribution */}
                <div>
                  <h4 className="font-medium text-[#1B263B] mb-3">Rating Distribution</h4>
                  <div className="space-y-2">
                    {ratingDistribution.map(({ rating, count, percentage }) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <span className="text-sm w-6">{rating}</span>
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-[#FF6F61] to-[#C084FC] h-2 rounded-full"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-8">{count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews List */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-[#1B263B]">
                  {filteredReviews.length} Reviews
                </h2>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F61] focus:border-transparent bg-white/90"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="highest-rating">Highest Rating</option>
                  <option value="most-helpful">Most Helpful</option>
                </select>
              </div>

              <div className="space-y-6">
                {filteredReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>

              {filteredReviews.length === 0 && (
                <div className="text-center py-16">
                  <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No reviews found</h3>
                  <p className="text-gray-500">Try adjusting your filters to see more reviews</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;