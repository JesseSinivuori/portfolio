import {
  Skills,
  ThisWebsite,
  Footer,
  ContactBottom,
  DeliveryFeeCalculator,
  GradientGenerator,
  Hero,
  Ecommerce,
  TicTacToe,
  AdManager,
  WelcomeMessage,
} from "./components/index";

export default function Home() {
  return (
    <>
      <WelcomeMessage />
      <Hero />
      <Skills />
      <TicTacToe />
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
