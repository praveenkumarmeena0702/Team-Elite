import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function ContactPage() {
  const { setPage } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Wholesale Inquiry',
    message: ''
  });
  const [showSummary, setShowSummary] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePreview = (e) => {
    e.preventDefault();
    setShowSummary(true);
  };

  const submitToDatabase = async () => {
    setIsSubmitting(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSuccess(true);
        setShowSummary(false);
        setFormData({ name: '', email: '', phone: '', subject: 'Wholesale Inquiry', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert("Failed to submit inquiry.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while submitting.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className="bg-surface text-on-surface selection:bg-tertiary-fixed selection:text-on-tertiary-fixed font-body-md relative">
        
        {/* Success Alert overlay */}
        {success && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-on-tertiary-container text-white px-8 py-4 rounded shadow-2xl z-[100] flex items-center gap-3 animate-fade-in-up">
            <span className="material-symbols-outlined text-tertiary-fixed">check_circle</span>
            <span className="font-label-caps uppercase tracking-widest text-sm">Inquiry sent successfully!</span>
          </div>
        )}

        {/* Summary Modal */}
        {showSummary && (
          <div className="fixed inset-0 bg-stone-900/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
            <div className="bg-surface max-w-lg w-full p-8 shadow-2xl border border-outline-variant/30">
              <div className="flex justify-between items-center mb-6 border-b border-outline-variant/30 pb-4">
                <h3 className="font-headline-md text-primary text-2xl">Review Your Inquiry</h3>
                <button onClick={() => setShowSummary(false)} className="text-outline hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              
              <div className="space-y-4 mb-8">
                <div>
                  <span className="block font-label-caps text-xs text-outline mb-1 uppercase">From</span>
                  <p className="font-body-md text-on-surface-variant">{formData.name} ({formData.email})</p>
                </div>
                <div>
                  <span className="block font-label-caps text-xs text-outline mb-1 uppercase">Phone</span>
                  <p className="font-body-md text-on-surface-variant">{formData.phone || 'Not provided'}</p>
                </div>
                <div>
                  <span className="block font-label-caps text-xs text-outline mb-1 uppercase">Subject</span>
                  <p className="font-body-md text-on-surface-variant font-medium">{formData.subject}</p>
                </div>
                <div className="bg-surface-container-lowest p-4 border border-outline-variant/20">
                  <span className="block font-label-caps text-xs text-outline mb-2 uppercase">Message</span>
                  <p className="font-body-md text-on-surface-variant whitespace-pre-wrap">{formData.message}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => setShowSummary(false)}
                  className="flex-1 border border-primary text-primary font-label-caps py-4 tracking-widest uppercase hover:bg-surface-container transition-colors"
                  disabled={isSubmitting}
                >
                  Edit Message
                </button>
                <button 
                  onClick={submitToDatabase}
                  className="flex-1 bg-primary text-white font-label-caps py-4 tracking-widest uppercase hover:bg-on-tertiary-container transition-colors flex justify-center items-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Confirm & Send'}
                  {!isSubmitting && <span className="material-symbols-outlined text-sm">send</span>}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-8 overflow-hidden">
          <div className="absolute top-10 left-10 opacity-10 pointer-events-none transform -rotate-12">
            <span className="material-symbols-outlined text-[120px]" data-icon="coffee_bean">coffee</span>
          </div>
          <div className="absolute bottom-10 right-10 opacity-10 pointer-events-none transform rotate-45">
            <span className="material-symbols-outlined text-[160px]" data-icon="local_cafe">local_cafe</span>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="font-label-caps text-label-caps text-on-tertiary-container mb-4 block uppercase">Get In Touch</span>
            <h1 className="font-headline-xl text-headline-xl mb-6 text-primary">Contact Us</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Whether you're curious about our roast profiles, wholesale opportunities, or just want to share your morning ritual, we're here to listen over a virtual cup of coffee.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-8 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Contact Form Side */}
            <div className="lg:col-span-7 bg-surface-container-low p-10 lg:p-16 border border-outline-variant/30 shadow-[0px_20px_40px_rgba(198,150,82,0.04)]">
              <h2 className="font-headline-md text-headline-md mb-12 border-b border-outline-variant pb-4">Send a Message</h2>
              <form className="space-y-8" onSubmit={handlePreview}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase">Full Name</label>
                    <input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-on-tertiary-container transition-all py-3 px-0 font-body-md text-body-md placeholder:text-outline-variant/60" 
                      placeholder="E.g. Arthur Morgan" type="text" />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase">Email Address</label>
                    <input 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-on-tertiary-container transition-all py-3 px-0 font-body-md text-body-md placeholder:text-outline-variant/60" 
                      placeholder="arthur@roastery.com" type="email" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase">Phone Number</label>
                    <input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-on-tertiary-container transition-all py-3 px-0 font-body-md text-body-md placeholder:text-outline-variant/60" 
                      placeholder="+1 (555) 000-0000" type="tel" />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase">Subject</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-on-tertiary-container transition-all py-3 px-0 font-body-md text-body-md text-on-surface-variant">
                      <option>Wholesale Inquiry</option>
                      <option>General Feedback</option>
                      <option>Roastery Tours</option>
                      <option>Careers</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase">Your Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-on-tertiary-container transition-all py-3 px-0 font-body-md text-body-md placeholder:text-outline-variant/60 resize-none" 
                    placeholder="Tell us about your project or inquiry..." rows="4"></textarea>
                </div>

                <button className="bg-primary text-on-primary font-label-caps text-label-caps px-12 py-5 uppercase tracking-widest hover:bg-on-tertiary-container transition-colors duration-300 active:scale-95 w-full md:w-auto" type="submit">
                  Review Inquiry
                </button>
              </form>
            </div>

            {/* Info Side */}
            <div className="lg:col-span-5 space-y-12">
              <div className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img className="w-full h-full object-cover" data-alt="A warm, atmospheric shot of an artisanal roastery interior during golden hour." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1kCqca8J78hnVmtj9s_JsG5cD0Bs1mJnsIrCg8HcOz4TGMmr5RvrJmW5d416RMWexqOB-OfTTv7uYXF360SiVsfgB2V833wMGcFw4vLivJRWwrkOxc7rQGG85CL17Q4odwGPG145zH4gN6jLatyjqtZL3_yoo307oQPRdX4P8gIL7-3lRUx_PUTPUeVGen7mIXsPbjXn2IM_ORP9MPALFQuowjF-jf6byOaTbhI8a3iz_UdbQ2lLn75j2mKLkgG8lLk6vxiKKr60h" />
              </div>

              <div className="bg-primary-container p-10 text-on-primary">
                <div className="flex items-center gap-4 mb-8">
                  <span className="material-symbols-outlined text-tertiary-fixed" data-icon="schedule">schedule</span>
                  <h3 className="font-headline-md text-headline-md">Opening Hours</h3>
                </div>
                <ul className="space-y-4 font-body-md text-body-md">
                  <li className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                    <span className="font-bold text-tertiary-fixed">Monday - Thursday</span>
                    <span>07:00 AM — 08:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                    <span className="font-bold text-tertiary-fixed">Friday</span>
                    <span>07:00 AM — 09:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                    <span className="font-bold text-tertiary-fixed">Saturday</span>
                    <span>08:00 AM — 09:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-bold text-tertiary-fixed">Sunday</span>
                    <span>09:00 AM — 06:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#12100E] dark:bg-stone-900 border-t border-stone-800 full-width bottom-0">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-16 max-w-7xl mx-auto gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold text-[#C69652] uppercase font-label-caps">Cafena</span>
            <p className="font-serif text-sm tracking-wide text-stone-400">© 2024 Cafena Artisanal Roastery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
