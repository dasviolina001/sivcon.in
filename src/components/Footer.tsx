import React from 'react';
import { Mail, MapPin, Phone, Instagram, Newspaper } from 'lucide-react';

const Footer: React.FC = () => {
  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const email = emailInput.value;

    try {
      const res = await fetch('http://sivcon.in/subscribe.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      alert(data.message);
      form.reset();
    } catch (err) {
      alert('Subscription failed. Please try again later.');
    }
  };

  return (
    <footer id="contact" className="mt-12 pt-8 border-t-2 border-black text-sm scroll-mt-24">
      {/* Flex container */}
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Contact Section */}
        <div className="md:w-1/2">
          <h3 className="text-lg font-bold mb-3 uppercase">Contact</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <Mail size={16} className="mr-2 flex-shrink-0" />
              <a href="mailto:sivcon2025@gmail.com" className="break-all hover:underline">
                sivcon2025@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2 flex-shrink-0" />
              <a href="mailto:musabbirislam98@gmail.com" className="break-all hover:underline">
                musabbirislam98@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="mr-2 flex-shrink-0" />
              <a href="tel:+917002089223" className="hover:underline">
                +91 7002089223 (Musabbir Islam)
              </a>
            </div>
            <div className="flex items-start">
              <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
              <span>
                Sibsagar<br />
              </span>
            </div>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="md:w-1/2">
          <h3 className="text-lg font-bold mb-3 uppercase">Follow Us</h3>
          <div className="flex space-x-6 mb-4">
            <a
              href="https://www.instagram.com/sivcon_?igsh=MWJ1N2pnYXJzbHFwMA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>

          <div className="border-t border-gray-500 pt-4 mt-4">
            <p className="flex items-center justify-center mb-2">
              <Newspaper size={16} className="mr-2" />
              <span>Subscribe to Sivcon'25 for further updates</span>
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                name="email"
                type="email"
                placeholder="Your email"
                className="flex-grow p-2 bg-amber-50 border border-gray-800 text-sm"
                required
              />
              <button
                type="submit"
                className="bg-gray-800 text-white px-4 py-2 text-sm uppercase tracking-wider hover:bg-gray-900 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 pt-4 border-t border-gray-500">
        <div className="mb-2">THE SIVCON TIMES © 2025 Model United Nations</div>
        <div className="text-xs">Project by Projukti-Bazar Private Limited</div>
      </div>
    </footer>
  );
};

export default Footer;
