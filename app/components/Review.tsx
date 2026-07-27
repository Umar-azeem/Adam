"use client";

import { useState, useMemo } from "react";
import {
  Star,
  Users,
  Clock,
  Search,
  X,
  ChevronDown,
  ChevronUp,
  Copy,
  Quote,
  FileText,
  FileCheck,
  ExternalLink,
} from "lucide-react";
import { reviewsData } from "@/app/data/reviews-data";

export default function ReviewsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(
    new Set(),
  );
  const [showResponses, setShowResponses] = useState<Set<number>>(new Set());

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    reviewsData.reviews.forEach((review) => {
      review.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter reviews
  const filteredReviews = useMemo(() => {
    return reviewsData.reviews.filter((review) => {
      const searchMatch =
        searchTerm === "" ||
        review.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase()),
        ) ||
        review.name.toLowerCase().includes(searchTerm.toLowerCase());

      const tagMatch =
        activeFilters.length === 0 ||
        activeFilters.some((filter) => review.tags.includes(filter));

      return searchMatch && tagMatch;
    });
  }, [searchTerm, activeFilters]);

  const toggleExpanded = (id: number) => {
    const newExpanded = new Set(expandedReviews);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedReviews(newExpanded);
  };

  const toggleResponse = (id: number) => {
    const newResponses = new Set(showResponses);
    if (newResponses.has(id)) {
      newResponses.delete(id);
    } else {
      newResponses.add(id);
    }
    setShowResponses(newResponses);
  };

  const copyLink = (id: number) => {
    navigator.clipboard.writeText(
      `${window.location.origin}/reviews#review-${id}`,
    );
    // You can add a toast notification here
  };

  const toggleFilter = (tag: string) => {
    const newFilters = activeFilters.includes(tag)
      ? activeFilters.filter((t) => t !== tag)
      : [...activeFilters, tag];
    setActiveFilters(newFilters);
  };

  const clearFilters = () => {
    setActiveFilters([]);
    setSearchTerm("");
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <div className="relative bg-gradient-to-b rounded-2xl from-[#04205D] to-[#04405D] text-white py-16 sm:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Real Clients. Real Results.
          </h1>
          <p className="text-xl text-green-200 mb-3">
            Reviews of Billy Watkins
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Buying or refinancing is a big deal. I focus on communication,
            speed, and clarity so you can close with confidence. Here{`'`}s what
            clients say.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-green-50 rounded-2xl p-6 border border-green-200 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="bg-[#04205D] p-2 rounded-full">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {reviewsData.stats.averageRating}
                </p>
                <p className="text-sm text-gray-600">Average Rating</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#04205D] p-2 rounded-full">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {reviewsData.stats.totalReviews}
                </p>
                <p className="text-sm text-gray-600">Verified Reviews</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#04205D] p-2 rounded-full">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">✓</p>
                <p className="text-sm text-gray-600">Fast Closings</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href="/contact-us"
            className="flex-1 bg-[#04205D] hover:bg-[#1c58d1] text-white text-center px-6 py-4 rounded-xl font-semibold transition transform hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2"
          >
            <FileText className="w-5 h-5" />
            Contact us
          </a>
          <a
            href="https://app.mloflo.com/sl/:BillyWatkins"
            target="_blank"
            className="flex-1 bg-white hover:bg-gray-50 text-[#04205D] text-center px-6 py-4 rounded-xl font-semibold transition border-2 border-[#04205D] flex items-center justify-center gap-2"
          >
            <FileCheck className="w-5 h-5" />
            Start Pre-Approval
          </a>
        </div>

        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search reviews (e.g., 'VA loan', 'fast closing', 'first-time')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04205D] bg-white text-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-700 mr-2">
              Filter:
            </span>
            {allTags.slice(0, 12).map((tag) => (
              <button
                key={tag}
                onClick={() => toggleFilter(tag)}
                className={`px-3 py-1.5 text-sm rounded-full transition ${
                  activeFilters.includes(tag)
                    ? "bg-[#04205D] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tag}
              </button>
            ))}
            {activeFilters.length > 0 && (
              <button
                onClick={clearFilters}
                className="text-sm text-red-600 hover:text-red-800 font-medium"
              >
                Clear All
              </button>
            )}
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-4">
          Showing {filteredReviews.length} of {reviewsData.reviews.length}{" "}
          reviews
        </p>

        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              id={`review-${review.id}`}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {review.location} • {review.date}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    {review.platform}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">
                      {review.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h4 className="font-semibold text-gray-800 mb-2">
                {review.title}
              </h4>

              {/* Content */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {expandedReviews.has(review.id)
                  ? review.content
                  : `${review.content.slice(0, 200)}...`}
              </p>

              {review.content.length > 200 && (
                <button
                  onClick={() => toggleExpanded(review.id)}
                  className="text-[#04205D] text-sm font-medium hover:underline mt-1 flex items-center gap-1"
                >
                  {expandedReviews.has(review.id) ? (
                    <>
                      Read less <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Read full review <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {review.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-green-50 text-[#04205D] text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                {review.response && (
                  <button
                    onClick={() => toggleResponse(review.id)}
                    className="text-sm text-[#04205D] font-medium hover:underline flex items-center gap-1"
                  >
                    {showResponses.has(review.id)
                      ? "Hide Response"
                      : "View Response"}
                    {showResponses.has(review.id) ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                )}
                <button
                  onClick={() => copyLink(review.id)}
                  className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
                >
                  <Copy className="w-4 h-4" />
                  Copy Link
                </button>
                <a
                  href={`#review-${review.id}`}
                  className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Permalink
                </a>
              </div>

              {/* Response */}
              {showResponses.has(review.id) && review.response && (
                <div className="mt-4 p-4 bg-green-50 rounded-lg border-l-4 border-[#04205D]">
                  <p className="text-sm font-semibold text-[#04205D] mb-2">
                    Response from Billy Watkins
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {review.response}
                  </p>
                </div>
              )}
            </div>
          ))}

          {filteredReviews.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <p className="text-gray-500 text-lg">
                No reviews found matching your criteria.
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 text-[#04205D] font-medium hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        <div className="mt-12 bg-[#04205D] rounded-2xl p-8 text-white">
          <Quote className="w-10 h-10 text-green-300 mb-4 opacity-50" />
          <h3 className="text-xl font-bold mb-2">Client Spotlight</h3>
          <p className="text-lg font-medium mb-2">
            {reviewsData.clientSpotlight.name}
          </p>
          <p className="text-sm text-green-200 mb-4">
            {reviewsData.clientSpotlight.location}
          </p>
          <p className="text-gray-100 leading-relaxed">
            "{reviewsData.clientSpotlight.content}"
          </p>
          <div className="mt-4 pt-4 border-t border-green-600">
            <a
              href="#review-4"
              className="text-green-200 hover:text-white transition font-medium text-sm"
            >
              Jump to Full Review →
            </a>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Testimonials may not be representative of all clients and are not a
            guarantee of future performance. Loan approvals are subject to
            underwriting. Rates, terms, and programs are subject to change
            without notice. Equal Housing Lender. NMLS #384700.
          </p>
        </div>
      </div>
    </div>
  );
}
