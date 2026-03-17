import { howItWorks } from "@/lib/productData";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How CareMind AI Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A seamless four-step process that detects behavioral changes and empowers caregivers to respond proactively.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {howItWorks.map((item, index) => (
            <div key={item.step} className="relative">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Alternating Layout */}
                {index % 2 === 0 ? (
                  <>
                    {/* Left: Content */}
                    <div className="space-y-4">
                      <div className="inline-block">
                        <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                          {item.step}
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    {/* Right: Icon */}
                    <div className="flex justify-center md:justify-end">
                      <div className="text-8xl">{item.icon}</div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left: Icon */}
                    <div className="flex justify-center md:justify-start order-2 md:order-1">
                      <div className="text-8xl">{item.icon}</div>
                    </div>
                    {/* Right: Content */}
                    <div className="space-y-4 order-1 md:order-2">
                      <div className="inline-block">
                        <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                          {item.step}
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Connector Line */}
              {index < howItWorks.length - 1 && (
                <div className="hidden md:flex justify-center mt-8">
                  <ArrowRight className="text-primary rotate-90" size={32} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Continuous Learning & Improvement
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our system learns from each facility's unique patient population and patterns, continuously improving accuracy and reducing false positives over time.
          </p>
        </div>
      </div>
    </section>
  );
}
