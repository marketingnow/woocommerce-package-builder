import customerCollage from "@/assets/customer-collage.jpg";

export const GuaranteeSection = () => {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="bg-primary/10 text-primary px-4 py-2 text-sm font-bold uppercase tracking-wider rounded">
            Try It Risk-Free
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 md:mb-16">
          <span className="italic text-primary">Pain Relief Guaranteed</span> or Your Money Back
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img 
              src={customerCollage} 
              alt="Happy TerraFreeze customers showing their results"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 space-y-6">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Science, pain specialists, and our <strong>97,000+ customers</strong> agree: our cream works.
            </p>
            
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              That's why we're offering our <strong>"Empty Tube" Guarantee</strong> — use every last bit, and if you aren't amazed by the results, get a <strong>100% refund!</strong>
            </p>
            
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              In other words: <strong>Love TerraFreeze, or your money back.</strong> No questions asked, no catches.
            </p>
            
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              We're so confident in our Natural Relief Formula because we know what happens when our powerful ingredients penetrate deep. Your muscles relax. Joints move easier. Inflammation subsides. And you feel the difference.
            </p>
            
            <p className="text-lg md:text-xl text-primary font-semibold">
              Thousands of customers already have. Now it's your turn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
