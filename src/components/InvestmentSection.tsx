import { TrendingUp, Star, MessageCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const InvestmentSection = () => {
  const handleWhatsAppClick = (tier: string) => {
    window.open(
      `https://wa.me/923339998436?text=Hello! I'm interested in the ${tier} investment plan. Please share more details.`,
      "_blank"
    );
  };

  const investmentPlans = [
    {
      tier: "Tier 1",
      investment: "1 Lac to 5 Lac",
      monthlyProfit: "4% to 5%",
      features: ["Low Entry Point", "Monthly Profits", "Flexible Terms"],
      popular: false,
    },
    {
      tier: "Tier 2",
      investment: "5 Lac to 50 Lac",
      monthlyProfit: "4% to 6%",
      features: ["Best Value", "Higher Returns", "Priority Support"],
      popular: true,
    },
    {
      tier: "Tier 3",
      investment: "50 Lac to 1 Crore",
      monthlyProfit: "5% to 8%",
      features: ["Maximum Returns", "VIP Treatment", "Personal Manager"],
      popular: false,
    },
  ];

  return (
    <section id="investment" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Investment Plans</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Profitable Investment Opportunities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Choose an investment tier that suits your budget and start earning monthly passive income with guaranteed returns.
            </p>
          </div>

          {/* Investment Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {investmentPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? "border-primary shadow-lg scale-105 md:scale-110"
                    : "border-border hover:border-primary/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <Badge className="rounded-none rounded-bl-lg bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{plan.tier}</CardTitle>
                  <p className="text-muted-foreground text-sm">Investment Range</p>
                </CardHeader>

                <CardContent className="text-center space-y-6">
                  {/* Investment Amount */}
                  <div>
                    <p className="text-2xl font-bold text-foreground">{plan.investment}</p>
                    <p className="text-sm text-muted-foreground">PKR</p>
                  </div>

                  {/* Monthly Profit */}
                  <div className="bg-primary/10 rounded-lg py-4 px-6">
                    <p className="text-sm text-muted-foreground mb-1">Monthly Profit</p>
                    <p className="text-3xl font-bold text-primary">{plan.monthlyProfit}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handleWhatsAppClick(plan.tier)}
                    className={`w-full gap-2 ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Start Investing
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-12 p-6 bg-card rounded-xl border border-border">
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">100% Halal Business</span> - All investments are made in compliance with Islamic principles.
              Contact us for detailed terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
