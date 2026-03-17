import { pricingPlans } from "@/lib/productData";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Transparent Pricing for Every Facility
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your facility size and needs. All plans include 24/7 support and continuous system improvements.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? "ring-2 ring-primary shadow-2xl scale-105 md:scale-100"
                  : "border border-border shadow-lg"
              } ${plan.highlighted ? "bg-gradient-to-br from-blue-50 to-white" : "bg-white"}`}
            >
              {/* Highlighted Badge */}
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-bold">
                  Most Popular
                </div>
              )}

              {/* Content */}
              <div className={`p-8 ${plan.highlighted ? "pt-16" : ""}`}>
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    {plan.period}
                  </span>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors mb-8 ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-blue-700"
                      : "border-2 border-primary text-primary hover:bg-blue-50"
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Need a custom plan?
          </h3>
          <p className="text-muted-foreground mb-4">
            For multi-site operations or specialized requirements, we offer custom enterprise solutions.
          </p>
          <button className="text-primary font-semibold hover:underline">
            Contact our sales team →
          </button>
        </div>
      </div>
    </section>
  );
}
