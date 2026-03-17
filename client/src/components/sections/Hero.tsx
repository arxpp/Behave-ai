import { ArrowRight, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20 pb-12 md:pb-20">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
              <Shield size={16} />
              Trusted by 150+ Care Facilities
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Predict. Alert. Protect.
            </h1>

            {/* Subheading */}
            <p className="text-xl text-muted-foreground leading-relaxed">
              CareMind AI uses advanced facial recognition to detect early signs of anger and distress in dementia patients, enabling caregivers to respond proactively and prevent behavioral incidents before they escalate.
            </p>

            {/* Key Benefits */}
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <div className="text-green-600 font-bold text-lg mt-1">✓</div>
                <span className="text-foreground">Real-time detection with 94% accuracy</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-600 font-bold text-lg mt-1">✓</div>
                <span className="text-foreground">Instant alerts to caregivers in 45 seconds</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-600 font-bold text-lg mt-1">✓</div>
                <span className="text-foreground">HIPAA-compliant and privacy-first design</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                Start Free Trial
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Request Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="text-sm text-muted-foreground pt-4">
              <p>✓ 30-day free trial • No credit card required • Easy setup</p>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative hidden md:block">
            <div className="bg-gradient-to-br from-blue-400 to-green-400 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-xl p-8 space-y-6">
                {/* Mockup Dashboard */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-foreground">Patient Alert</h3>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">HIGH RISK</span>
                  </div>
                  <div className="bg-gray-100 rounded-lg h-40 flex items-center justify-center">
                    <span className="text-gray-400">Patient Facial Analysis</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Detection Confidence</span>
                      <span className="font-semibold">94%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "94%" }}></div>
                    </div>
                  </div>
                  <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors">
                    View Patient Details
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <p className="text-2xl font-bold text-primary">35%</p>
              <p className="text-sm text-muted-foreground">Reduction in behavioral incidents</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
