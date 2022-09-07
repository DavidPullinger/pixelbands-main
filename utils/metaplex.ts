import { CreateNftInput, Metaplex } from "@metaplex-foundation/js";
import { toast } from "react-toastify";
// custom
import { LaunchpadFormData } from "@/components/Launchpad";

export function mintNFT(
  metaplex: Metaplex,
  properties: CreateNftInput,
  toastMessages?: {
    pending?: string;
    success?: string;
    error?: string;
  }
) {
  // create mint promise
  const mintPromise = metaplex.nfts().create(properties).run();

  // use toast to inform user
  return toast
    .promise(mintPromise, {
      pending: toastMessages?.pending ?? "Loading...",
      success: toastMessages?.success ?? "Success",
      error: toastMessages?.error ?? "Error",
    })
    .then((res) => {
      return {
        success: true,
        response: res,
      };
    })
    .catch((err) => {
      return {
        success: false,
        response: err,
      };
    });
}
