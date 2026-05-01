import React from 'react';

const reviewsData = [
  {
    id: 1,
    name: "Sarah Jenkins",
    rating: 5,
    text: "The best artisanal coffee in town! The caramel macchiato is an absolute dream, and the ambiance is so warm and welcoming.",
    initial: "S"
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    text: "I come here everyday before work. Consistently great espresso and the staff always greets me with a huge smile.",
    initial: "M"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    rating: 4,
    text: "Beautiful latte art and incredibly smooth blends. The pastries are absolutely to die for as well. Highly recommend!",
    initial: "E"
  }
];

export default function ReviewsSection() {
  return (
    <section className="reviews-section">
      <h2 className="section-title">What Our Customers Say</h2>
      <div className="reviews-container">
        {reviewsData.map(review => (
          <div key={review.id} className="review-card">
            <div className="review-avatar">{review.initial}</div>
            <div className="review-stars">
              {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
            </div>
            <p className="review-text">"{review.text}"</p>
            <h4 className="review-author">— {review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
