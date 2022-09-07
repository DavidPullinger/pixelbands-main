// external components
import { NextPage } from "next";
// custom components
import { FAQSection } from "@/components/FAQ";

const Launchpad: NextPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1>Launchpad FAQ</h1>
      <FAQSection
        heading="Total Royalty Percentage"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
        voluptate architecto itaque atque, eum amet sed doloribus nemo
        perferendis cupiditate, hic reprehenderit quod aliquid nostrum numquam
        consequatur non iste tempore."
        id="total-royalty"
      />
    </div>
  );
};

export default Launchpad;
