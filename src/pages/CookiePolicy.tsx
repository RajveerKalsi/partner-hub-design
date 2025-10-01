import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Cookie } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Cookie className="w-10 h-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Cookie Policy</h1>
          </div>
          
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. What Are Cookies?</h2>
              <p className="leading-relaxed text-muted-foreground">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Essential Cookies</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    These cookies are necessary for the website to function properly. They enable basic 
                    functions like page navigation and access to secure areas of the website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Performance Cookies</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    These cookies help us understand how visitors interact with our website by collecting 
                    and reporting information anonymously. This helps us improve our website's performance.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Functionality Cookies</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    These cookies allow our website to remember choices you make (such as your username, 
                    language, or region) and provide enhanced, personalized features.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Marketing Cookies</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    These cookies are used to track visitors across websites to display relevant 
                    advertisements. They may be set by our advertising partners through our site.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. How We Use Cookies</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                We use cookies for various purposes, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>To keep you signed in to your account</li>
                <li>To remember your preferences and settings</li>
                <li>To understand how you use our website</li>
                <li>To improve our services and user experience</li>
                <li>To deliver relevant content and advertisements</li>
                <li>To analyze website traffic and performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. Third-Party Cookies</h2>
              <p className="leading-relaxed text-muted-foreground">
                We may use third-party services such as Google Analytics, social media platforms, and 
                advertising networks that also set cookies on your device. These third parties have 
                their own privacy policies and cookie policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. Managing Cookies</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
                <li>Browser extensions: Use privacy-focused extensions to block cookies</li>
                <li>Opt-out tools: Use industry opt-out tools for advertising cookies</li>
                <li>Clear cookies: Delete existing cookies through your browser settings</li>
              </ul>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Please note that disabling certain cookies may affect the functionality of our website 
                and prevent you from accessing certain features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. Cookie Duration</h2>
              <p className="leading-relaxed text-muted-foreground">
                We use both session cookies (which expire when you close your browser) and persistent 
                cookies (which remain on your device until they expire or you delete them). The duration 
                of persistent cookies varies depending on their purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">7. Updates to This Policy</h2>
              <p className="leading-relaxed text-muted-foreground">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for legal, regulatory, or operational reasons. We encourage you to review this policy 
                periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">8. Contact Us</h2>
              <p className="leading-relaxed text-muted-foreground">
                If you have questions about our use of cookies, please contact us at:
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

export default CookiePolicy;
