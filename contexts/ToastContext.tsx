require("@solana/wallet-adapter-react-ui/styles.css");
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// provider for context
export function ToastProvider() {
  return <ToastContainer position="bottom-left" theme="dark"></ToastContainer>;
}
