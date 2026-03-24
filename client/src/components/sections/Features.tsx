import { features } from "@/lib/productData";

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features for Modern Care
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Behave AI combines cutting-edge technology with deep understanding of aged care to deliver features that genuinely improve patient safety and caregiver efficiency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group bg-gradient-to-br from-gray-50 to-white border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-5">
                {feature.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your care facility?
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
