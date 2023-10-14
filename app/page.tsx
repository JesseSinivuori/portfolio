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
  News,
} from "./components/index";

export default function Home() {
  return (
    <>
      <WelcomeMessage />
      <Hero />
      <Skills />
      <News />
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
