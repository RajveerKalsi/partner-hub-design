import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-10 h-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Terms of Service</h1>
          </div>
          
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. Acceptance of Terms</h2>
              <p className="leading-relaxed text-muted-foreground">
                By accessing and using Houston Logistics services, you accept and agree to be bound by 
                these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. Service Description</h2>
              <p className="leading-relaxed text-muted-foreground">
                Houston Logistics provides brand partnership services, product showcasing platforms, and 
                consulting services. We reserve the right to modify, suspend, or discontinue any aspect 
                of our services at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. User Responsibilities</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not engage in any fraudulent or illegal activities</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Not use our services for unauthorized commercial purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. Intellectual Property</h2>
              <p className="leading-relaxed text-muted-foreground">
                All content, trademarks, logos, and intellectual property on our platform are owned by 
                Houston Logistics or our licensors. You may not use, copy, or distribute any content 
                without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. Partnership Agreements</h2>
              <p className="leading-relaxed text-muted-foreground">
                Brand partnerships and collaborations are subject to separate written agreements. 
                These Terms of Service do not constitute a partnership agreement and any partnership 
                arrangements must be formalized through official contracts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. Limitation of Liability</h2>
              <p className="leading-relaxed text-muted-foreground">
                Houston Logistics shall not be liable for any indirect, incidental, special, or 
                consequential damages arising from your use of our services. Our total liability 
                shall not exceed the amount paid by you for our services in the past twelve months.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">7. Indemnification</h2>
              <p className="leading-relaxed text-muted-foreground">
                You agree to indemnify and hold harmless Houston Logistics from any claims, damages, 
                or expenses arising from your use of our services or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">8. Termination</h2>
              <p className="leading-relaxed text-muted-foreground">
                We reserve the right to terminate or suspend your access to our services at any time, 
                with or without cause or notice. Upon termination, your right to use our services 
                will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">9. Governing Law</h2>
              <p className="leading-relaxed text-muted-foreground">
                These Terms of Service shall be governed by and construed in accordance with the laws 
                of the jurisdiction in which Houston Logistics operates, without regard to conflict 
                of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">10. Contact Information</h2>
              <p className="leading-relaxed text-muted-foreground">
                For questions about these Terms of Service, please contact us at:
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

export default TermsOfService;
