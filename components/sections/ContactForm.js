// components/sections/ContactForm.js
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // Try to parse error message from response, otherwise use a default
        let errorMessage = 'Submission failed. Please try again.';
        try {
            const errorData = await response.json();
            errorMessage = errorData.message || errorMessage;
        } catch (e) {
            // If response is not JSON or doesn't have message, use the default
        }
        throw new Error(errorMessage);
      }
      
      setSubmitStatus('success');
      reset(); // Reset form fields
    } catch (error) {
      setSubmitStatus('error');
      // It's good practice to log the actual error to the console for debugging
      console.error('Form submission error:', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Updated form container styling
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-lg shadow-xl border border-gray-200">
      {/* Updated form title styling */}
      <h2 className="font-serif text-3xl font-bold text-brand-secondary mb-8">Send Us a Message</h2>

      {submitStatus === 'success' && (
        <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
          Message sent successfully! We'll get back to you soon.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
          There was an error sending your message. Please try again or contact us directly via email.
        </div>
      )}

      {/* Ensuring labels and inputs use font-sans (global style should cover, but can be explicit if needed) */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-sans">Full Name</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Full name is required' })}
          // Updated input field styling (focus states)
          className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm font-sans`}
        />
        {errors.name && <p className="mt-2 text-sm text-red-600 font-sans">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-sans">Email Address</label>
        <input
          type="email"
          id="email"
          {...register('email', { 
            required: 'Email is required', 
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm font-sans`}
        />
        {errors.email && <p className="mt-2 text-sm text-red-600 font-sans">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 font-sans">Phone Number (Optional)</label>
        <input
          type="tel"
          id="phone"
          {...register('phone')}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm font-sans"
        />
      </div>

      <div>
        <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 font-sans">Event Date (Optional)</label>
        <input
          type="date"
          id="eventDate"
          {...register('eventDate')}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm font-sans"
        />
      </div>
      
      <div>
        <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 font-sans">Type of Event (Optional)</label>
        <input
          type="text"
          id="eventType"
          {...register('eventType')}
          placeholder="e.g., Wedding, Corporate, Birthday"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm font-sans"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 font-sans">Message</label>
        <textarea
          id="message"
          rows="4"
          {...register('message', { required: 'Message is required' })}
          className={`mt-1 block w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm font-sans`}
        ></textarea>
        {errors.message && <p className="mt-2 text-sm text-red-600 font-sans">{errors.message.message}</p>}
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          // Updated button styling
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-brand-primary hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary disabled:bg-orange-300 font-sans"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
