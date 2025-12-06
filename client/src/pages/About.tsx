import { Layout } from "@/components/layout/Layout";
import aboutImage from "@assets/generated_images/abstract_architectural_detail.png";

export default function About() {
  return (
    <Layout>
      <div className="relative h-[400px] w-full overflow-hidden mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutImage})` }}
        >
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center text-white">
          <h1 className="text-5xl font-serif font-bold">About Alliance Trust Realty</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-3xl space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Alliance Trust Realty is a pioneering real estate investment firm tailored for the modern investor. 
            We bridge the gap between individual capital and institutional-grade real estate assets.
          </p>
          <p>
            Our mission is to democratize access to wealth-building real estate strategies that were previously 
            reserved for ultra-high-net-worth individuals and sovereign wealth funds.
          </p>
        </div>
      </div>
    </Layout>
  );
}
