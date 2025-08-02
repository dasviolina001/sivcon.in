import React, { useState } from 'react';

type FormDataType = {
  fullName: string;
  email: string;
  contact: string;
  institution: string;
  experience: string;
  committeePreference: string;
  portfolioPreference: string;
  accommodationNeeded: boolean;
  photo?: File;
};

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    fullName: '',
    email: '',
    contact: '',
    institution: '',
    experience: 'beginner',
    committeePreference: '',
    portfolioPreference: '',
    accommodationNeeded: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, files } = target;

    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: target.checked });
    } else if (type === 'file' && files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.contact ||
      !formData.institution ||
      !formData.experience ||
      !formData.committeePreference ||
      !formData.photo
    ) {
      alert('Please fill in all required fields and upload the payment screenshot.');
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== undefined) {
        data.append(key, value instanceof File ? value : String(value));
      }
    });

    try {
      const response = await fetch('http://sivcon.in/submit.php', {
        method: 'POST',
        body: data,
      });

      const result = await response.text();

      if (result.toLowerCase().includes('failed') || result.toLowerCase().includes('error')) {
        alert(result);
      } else {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Submission failed', error);
      alert('Failed to submit the form.');
    }
  };

  const handleCopyUPI = () => {
    navigator.clipboard.writeText('musabbirislam98@okhdfcbank').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="register"
      className="newspaper-border slide-in max-w-xl mx-auto p-6 bg-amber-50 rounded-md shadow-md"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold border-b-2 border-black pb-2 uppercase">
          Delegate Registration
        </h2>
        <p className="text-sm mt-2">Dates-1st,2nd & 3rd July, 2025</p>
      </div>

      {isSubmitted ? (
        <div className="text-center py-8">
          <h3 className="text-xl font-bold mb-3">Registration Received!</h3>
          <p>Thank you for registering.</p>
          <p className="mt-2">We will contact you shortly with confirmation details.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-5">
          <div>
            <label htmlFor="fullName" className="block text-sm font-bold mb-1">
              Full Name:
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-800 rounded bg-amber-50"
              placeholder="Full Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-1">
              Email Address:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-800 rounded bg-amber-50"
              placeholder="Email Address"
            />
          </div>

          <div>
            <label htmlFor="contact" className="block text-sm font-bold mb-1">
              Contact Number:
            </label>
            <input
              id="contact"
              name="contact"
              type="tel"
              required
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-2 border border-gray-800 rounded bg-amber-50"
              placeholder="Contact Number"
            />
          </div>

          <div>
            <label htmlFor="institution" className="block text-sm font-bold mb-1">
              School/University:
            </label>
            <input
              id="institution"
              name="institution"
              type="text"
              required
              value={formData.institution}
              onChange={handleChange}
              className="w-full p-2 border border-gray-800 rounded bg-amber-50"
              placeholder="School/University"
            />
          </div>

          <div>
            <label htmlFor="experience" className="block text-sm font-bold mb-1">
              MUN Experience:
            </label>
            <select
              id="experience"
              name="experience"
              required
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-2 border border-gray-800 rounded bg-amber-50"
            >
              <option value="beginner">Beginner (0-1 conferences)</option>
              <option value="intermediate">Intermediate (2-5 conferences)</option>
              <option value="advanced">Advanced (6+ conferences)</option>
            </select>
          </div>

          <div>
            <label htmlFor="committeePreference" className="block text-sm font-bold mb-1">
              Committee Preference:
            </label>
            <select
              id="committeePreference"
              name="committeePreference"
              required
              value={formData.committeePreference}
              onChange={handleChange}
              className="w-full p-2 border border-gray-800 rounded bg-amber-50"
            >
              <option value="">Select a committee</option>
              <option value="DISEC">DISEC</option>
              <option value="UNHCR">UNHCR</option>
              <option value="IPC">IPC</option>
              <option value="AIPPM">AIPPM</option>
              <option value="AVS">AVS</option>
              <option value="UNODC">UNODC</option>
              <option value="HISTORIC-COPUOS">HISTORIC-COPUOS</option>
            </select>
          </div>

          <div>
            <label htmlFor="portfolioPreference" className="block text-sm font-bold mb-1">
              Portfolio Preference:
            </label>
            <input
              id="portfolioPreference"
              name="portfolioPreference"
              type="text"
              value={formData.portfolioPreference}
              onChange={handleChange}
              placeholder="List up to 3 portfolios or positions"
              className="w-full p-2 border border-gray-800 rounded bg-amber-50"
            />
          </div>

          <div className="flex items-center">
            <input
              id="accommodationNeeded"
              name="accommodationNeeded"
              type="checkbox"
              checked={formData.accommodationNeeded}
              onChange={handleChange}
              className="h-4 w-4 border border-gray-800 bg-amber-50"
            />
            <label htmlFor="accommodationNeeded" className="ml-2 text-sm">
              I require accommodation assistance
            </label>
          </div>

          <div className="mt-4 text-center">
            <p className="font-semibold text-sm mb-2">Click on or scan the QR to proceed payment</p>
            <a
              href="upi://pay?pa=musabbirislam98@okhdfcbank&pn=Delegate%20Fee&am=1199&cu=INR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/scanner.jpg"
                alt="QR Scanner"
                className="mx-auto w-40 h-auto rounded shadow-md hover:opacity-80 cursor-pointer"
              />
            </a>

            <p className="mt-2 font-semibold">UPI Handle: musabbirislam98@okhdfcbank</p>
            <p className="text-sm mt-1 italic">Registration Fees: ₹1199</p>

            <div className="mt-2">
              <button
                type="button"
                onClick={handleCopyUPI}
                className="text-blue-600 underline text-sm"
              >
                {copied ? 'UPI ID Copied!' : 'Click to Copy UPI ID'}
              </button>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="photo" className="block text-sm font-bold mb-1">
              Upload Payment Screenshot:
            </label>
            <input
              id="photo"
              name="photo"
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="text-sm"
              required
            />
          </div>

          <div className="text-center pt-4 flex justify-center">
            <button
              type="submit"
              className="vintage-button hover:bg-gray-700 px-6 py-2 rounded font-semibold"
            >
              SUBMIT REGISTRATION
            </button>
          </div>
        </form>
      )}

      <div className="text-xs text-center mt-6 pt-4 border-t border-gray-500">
        Early registration deadline: June 15, 2025
      </div>
    </section>
  );
};

export default RegistrationForm;
