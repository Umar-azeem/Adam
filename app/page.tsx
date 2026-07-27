import Carousel from "./components/Carousel";
import Community from "./components/Community";
import CreditBuild from "./components/CreditBuild";
import Education from "./components/Education";
import FAQ from "./components/FAQ";
import Loan from "./components/Loan";
import MortgageCalculator from "./components/MortgageCalculator";
import MortgageLandingPage from "./components/MortgageLandingPage";

export default function Home() {
  return (
    <>
      <MortgageLandingPage />
      <Community />
      {/* <Consider/> */}
      <Education />
      <CreditBuild />
      <MortgageCalculator />
      <Carousel />
      <Loan />
      {/* <FAQ /> */}
    </>
  );
}
