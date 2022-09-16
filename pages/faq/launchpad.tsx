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
        description="NFT royalties are automatic payouts to the creators of an NFT made on secondary sales. 
        Total royalty percentage is the percentage of these secondary sales that will be payed to the creators 
        of the NFT as a whole. For instance, if an NFT is sold for 100 SOL and the total royalty percentage is 
        4.2%, then the royalty payout will be 4.2 SOL. This payout can then be distributed amongst the creators 
        by specifying the Creator Share."
        id="total-royalty"
      />
      <FAQSection
        heading="Creator Share"
        description="A creator share is a percentage of the total royalty that 
        a given creator will receive on each secondary sale. For instance, if the royalty 
        payout for a secondary sale is 4.2 SOL and a given creator's share is 10%, they will receive 
        0.42 SOL. The shares of all the creators (maximum 4) should add up to 100%."
        id="creator-share"
      />
    </div>
  );
};

export default Launchpad;
