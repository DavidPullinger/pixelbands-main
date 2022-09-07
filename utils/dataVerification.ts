// external
import { toast } from "react-toastify";
import { WalletContextState } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
// custom
import { LaunchpadFormData } from "@/components/Launchpad";

function error(message: string) {
  toast.error(message);
  return false;
}

export function verifyFormData(data: LaunchpadFormData, wallet: WalletContextState): boolean {
  // ============= METADATA SECTION =======================
  if ([data["songName"], data["albumName"], data["artistName"], data["genre"], data["royalty"]].includes("")) {
    return error("Metadata is not complete.");
  }

  // ============= CREATORS SECTION =======================
  const c = new CreatorValidation(data["creators"]);
  if (data["creators"].length === 0) {
    return error("Creators have not been specified.");
  }
  if (c.sumShares() !== 100) {
    return error("Creator shares do not sum to 100.");
  }
  if (!wallet.publicKey) {
    return error("Please connect wallet.");
  }
  if (!c.containsSigner(wallet)) {
    return error("Current wallet must be a creator.");
  }
  if (!c.addressesValid()) {
    return error("Creator addresses are not valid.");
  }

  // ============= MEDIA SECTION =========================
  if (data["image"] === null || data["audio"] === null) {
    return error("An image or audio file has not been selected.");
  }

  // ============= T's & C's SECTION =======================
  if (data["termsAgreed"] != "on") {
    return error("Please agree to the Terms and Conditions.");
  }

  return true;
}

class CreatorValidation {
  // attributes
  creators: LaunchpadFormData["creators"];

  // constructor
  constructor(creators: LaunchpadFormData["creators"]) {
    this.creators = creators;
  }

  addressesValid() {
    for (let i = 0; i < this.creators.length; i++) {
      try {
        let key = new PublicKey(this.creators[i].address);
        if (!PublicKey.isOnCurve(key.toBytes())) {
          return false;
        }
      } catch {
        return false;
      }
    }
    return true;
  }

  sumShares() {
    return this.creators.reduce((accumulator, creator) => {
      return accumulator + creator.share;
    }, 0);
  }

  containsSigner(wallet: WalletContextState) {
    return this.creators.find((creator) => creator.address === wallet.publicKey!.toString());
  }
}
