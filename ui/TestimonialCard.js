// components/ui/TestimonialCard.js
export default function TestimonialCard({ quote, author, event }) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg relative">
      <div className="absolute top-0 left-0 transform -translate-x-3 -translate-y-3">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-brand-primary opacity-70">
          <path d="M9.983 3v7.391A3.001 3.001 0 0 0 7 13.011a2.982 2.982 0 0 0-.017.237C6.983 10.61 9.983 3 9.983 3zM19.983 3v7.391A3.001 3.001 0 0 0 17 13.011a2.982 2.982 0 0 0-.017.237C16.983 10.61 19.983 3 19.983 3zM6.983 13.011c0 2.203 1.794 3.997 4 3.997V21c-3.86 0-7-3.131-7-6.989a2.982 2.982 0 0 1 .017-.237c.02.82.05 1.62.05 2.411zm10 0c0 2.203 1.794 3.997 4 3.997V21c-3.86 0-7-3.131-7-6.989a2.982 2.982 0 0 1 .017-.237c.02.82.05 1.62.05 2.411z"></path>
        </svg>
      </div>
      <p className="text-gray-600 italic mb-6 text-md leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div className="text-right">
        <p className="font-semibold text-brand-secondary text-sm">{author}</p>
        {event && <p className="text-xs text-gray-500">{event}</p>}
      </div>
    </div>
  );
}
