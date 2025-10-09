import { useState } from 'react';
import { Send, Mail, User, Briefcase, Building } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { PARTNERSHIP_BENEFITS, INITIAL_FORM_DATA } from '@/constants/contact.constants';
import { ContactText } from '@/enums/contact.enums';
import { ContactFormData } from '@/types/contact.types';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: ContactText.SUCCESS_TOAST_TITLE,
      description: ContactText.SUCCESS_TOAST_DESCRIPTION,
    });

    setFormData(INITIAL_FORM_DATA);
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-full mx-auto">
          <div className="text-center mb-16">
            <div className="section-divider">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground pt-8 mb-6">
                {ContactText.SECTION_TITLE}
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto">
              {ContactText.SECTION_DESCRIPTION}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className='text-center lg:text-left'>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                 Don’t wait to simplify your logistics. Reach out now and start a partnership built on speed, reliability, and efficiency.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{ContactText.EMAIL_LABEL}</div>
                    <div className="text-muted-foreground">{ContactText.EMAIL_VALUE}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Building className="text-accent" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{ContactText.OFFICE_LABEL}</div>
                    <div className="text-muted-foreground">{ContactText.OFFICE_VALUE}</div>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-6">
                <h4 className="font-semibold text-foreground mb-4">{ContactText.BENEFITS_TITLE}</h4>
                <ul className="space-y-3">
                  {PARTNERSHIP_BENEFITS.map((benefit, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-elevated p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {ContactText.FORM_NAME_LABEL}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder={ContactText.FORM_NAME_PLACEHOLDER}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-foreground mb-2">
                      {ContactText.FORM_JOB_LABEL}
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder={ContactText.FORM_JOB_PLACEHOLDER}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {ContactText.FORM_EMAIL_LABEL}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder={ContactText.FORM_EMAIL_PLACEHOLDER}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-2">
                    {ContactText.FORM_COMPANY_LABEL}
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder={ContactText.FORM_COMPANY_PLACEHOLDER}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {ContactText.FORM_MESSAGE_LABEL}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder={ContactText.FORM_MESSAGE_PLACEHOLDER}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-hero flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-accent-foreground border-t-transparent rounded-full" />
                      <span>{ContactText.FORM_SUBMITTING}</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>{ContactText.FORM_SUBMIT_BUTTON}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;