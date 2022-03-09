import Lottie from "react-lottie";
import loadingLottie from "../../assets/lotties/loading.json";

function LoadingIndicator() {
  const lottieOptions = {
    loop: false,
    animationData: loadingLottie,
  };

  return (
    <Lottie options={lottieOptions} width={400} />
  );
}

export default LoadingIndicator;
