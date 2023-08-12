import {
  Skills,
  ThisWebsite,
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
      <ThisWebsite />
      <ContactBottom />
      <Footer />
    </>
  );
}
