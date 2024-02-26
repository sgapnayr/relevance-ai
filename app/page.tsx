import BaseBanner from "@/components/BaseBanner";
import BaseEcosystem from "@/components/BaseEcosystem";
import Default from "@/layout/default";
import Banner from "@/assets/banner.jpg";

export default function Home() {
  const pageContents = {
    image: Banner,
    title: "Introducing Relevance.",
    subTitle: "We're better than you, and we know it.",
    accentTitle: "Ever wanted to use AI to predict the future of everything?",
    symbol: "US TOO",
    hasButtons: true,
    buttons: [
      {
        text: "Buy",
        className: "bg-purple-500 text-white",
      },
      {
        text: "AI",
        className:
          "border-2 border-purple-500 text-purple-500 text-sentiment-purple",
      },
    ],
  };

  return (
    <Default>
      <BaseBanner pageContents={pageContents} />
      <BaseEcosystem />
    </Default>
  );
}
