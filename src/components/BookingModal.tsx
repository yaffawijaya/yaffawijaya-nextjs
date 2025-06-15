'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const serviceOptions = [
    { id: 'Project', label: 'Project Collaboration' },
    { id: 'Speaking', label: 'Speakership Session' },
    { id: 'Workshop', label: 'Custom Workshop' },
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
    const [activeService, setActiveService] = useState('Project');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState({ submitting: false, success: false, error: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus({ submitting: true, success: false, error: '' });
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, serviceType: activeService }),
            });
            if (!response.ok) throw new Error('Failed to send message.');
            setFormStatus({ submitting: false, success: true, error: '' });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setFormStatus({ submitting: false, success: false, error: 'An error occurred. Please try again.' });
        }
    };
    
    return (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* --- THIS IS THE DIV WE ARE EDITING --- */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={(e) => e.stopPropagation()}
                // Reverted back to the solid, non-glassy background
                className="relative w-full max-w-2xl bg-stone-900 border border-stone-800 rounded-3xl shadow-2xl shadow-amber-500/10"
              >
                 <div className="p-8 md:p-12 overflow-y-auto max-h-[90vh] modal-content-area">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Let's work together</h2>
                        <p className="mt-4 text-stone-400 max-w-xl mx-auto">Bring cutting-edge AI, Data Science, and Engineering insights to your next project.</p>
                    </div>

                    <div className="flex justify-center my-8">
                        <div className="relative flex p-1 bg-stone-800 rounded-full border border-stone-700">
                            {serviceOptions.map(opt => (
                                <button key={opt.id} onClick={() => setActiveService(opt.id)} className="relative w-28 rounded-full py-2 text-sm font-medium transition-colors z-10 text-stone-300 hover:text-white">{opt.id}</button>
                            ))}
                            <div className="absolute top-1 left-1 h-[calc(100%-0.5rem)] w-[calc(33.33%-0.166rem)] bg-amber-500/20 rounded-full transition-transform duration-300 ease-in-out"
                                style={{ transform: `translateX(${(serviceOptions.findIndex(o => o.id === activeService)) * 100}%)` }} />
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <h3 className="text-xl font-semibold text-white">{serviceOptions.find(o => o.id === activeService)?.label}</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="mx-auto space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-stone-300 mb-2">Full name</label>
                            <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange} className="w-full bg-stone-800 border border-stone-700 rounded-md p-3 text-white focus:ring-amber-500 focus:border-amber-500" placeholder="Enter your full name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-2">Work email</label>
                            <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} className="w-full bg-stone-800 border border-stone-700 rounded-md p-3 text-white focus:ring-amber-500 focus:border-amber-500" placeholder="Enter your work email" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-stone-300 mb-2">Details</label>
                            <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleInputChange} className="w-full bg-stone-800 border border-stone-700 rounded-md p-3 text-white focus:ring-amber-500 focus:border-amber-500" placeholder="Please share some details about your project or event..." />
                        </div>
                        <div>
                            <button type="submit" disabled={formStatus.submitting} className="w-full py-3 px-6 bg-amber-500 text-stone-900 font-semibold rounded-md hover:bg-amber-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                                {formStatus.submitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                    {formStatus.success && <p className="text-center mt-4 text-green-400">Message sent successfully! Thank you.</p>}
                    {formStatus.error && <p className="text-center mt-4 text-red-400">{formStatus.error}</p>}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      );
};
