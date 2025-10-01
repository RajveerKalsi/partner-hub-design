import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-10 h-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Privacy Policy</h1>
          </div>
          
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. Information We Collect</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                We collect information you provide directly to us, including when you create an account, 
                subscribe to our newsletter, or contact us for support. This may include your name, email 
                address, phone number, and any other information you choose to provide.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                We also automatically collect certain information about your device when you use our services, 
                including IP address, browser type, operating system, and usage data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>To provide, maintain, and improve our services</li>
                <li>To send you technical notices and support messages</li>
                <li>To communicate with you about products, services, and events</li>
                <li>To monitor and analyze trends, usage, and activities</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. Information Sharing</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Service providers who assist in our operations</li>
                <li>Professional advisors such as lawyers and accountants</li>
                <li>Law enforcement or government authorities when required by law</li>
                <li>Other parties in connection with a business transfer or sale</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. Data Security</h2>
              <p className="leading-relaxed text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. Your Rights</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. Cookies and Tracking</h2>
              <p className="leading-relaxed text-muted-foreground">
                We use cookies and similar tracking technologies to collect information about your browsing 
                activities. You can control cookies through your browser settings. For more details, please 
                see our Cookie Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">7. Contact Us</h2>
              <p className="leading-relaxed text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: partnerships@logistics.com
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
