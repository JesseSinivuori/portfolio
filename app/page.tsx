import {
  Skills,
  Website,
  Footer,
  ContactBottom,
  DeliveryFeeCalculator,
  GradientGenerator,
  Hero,
  Ecommerce,
  AdManager,
  WelcomeMessage,
} from "./components/index";

export default function Home() {
  return (
    <>
      <WelcomeMessage />
      <Hero />
      <Skills />
      <Ecommerce />
      <AdManager />
      <GradientGenerator />
      <DeliveryFeeCalculator />
      <Website />
      <ContactBottom />
      <Footer />
    </>
  );
}