import { Card } from "@/components/ui/card";
import { Beaker, Eye, Award } from "lucide-react";

export const HowItWorks = () => {
  const reasons = [
    {
      icon: Beaker,
      title: "Science-Based Formulation",
      description: "Our pain relief cream uses clinically studied ingredients like Emu Oil and Arnica that penetrate deep to provide fast, effective relief.",
    },
    {
      icon: Eye,
      title: "Transparent Processes",
      description: "We use only natural & effective ingredients with no hidden chemicals. Every batch is tested for quality and potency.",
    },
    {
      icon: Award,
      title: "Proven Efficacy And Safety",
      description: "Trusted by thousands of customers. Our formula has been refined over years to maximize relief while remaining gentle on skin.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            3 REASONS WHY TERRAFREEZE WORKS
          </h2>
          <p className="text-muted-foreground">How We Help You Get Relief</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="p-6 text-center border-0 shadow-md hover:shadow-lg transition-shadow bg-card">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};