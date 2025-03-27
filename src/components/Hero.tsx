

import { ArrowRight, Twitch, Play, Clock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
  //  <section className="pt-32 pb-16 container-padding bg-gradient-to-b from-[#0e0e0e] to-[#9146FF] text-white">
  //  <section className="pt-32 pb-16 container-padding bg-black text-white"> 
  <section className="pt-32 pb-16 container-padding bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/40 rounded-full border border-purple-600/30 mb-6">
          <Twitch className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-purple-200">
            {t("streaming_service_24_7")}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
          {t('your_content')} <span className="text-white">Twitch</span> <span className="text-purple-400">{t('twentyFourSeven')}</span> 
          {/* {t('your_content')} <span className="text-purple-400">Twitch</span> {t('twentyFourSeven')} */}
        </h1>

        <div className="text-white font-normal text-base md:text-lg mt-12 mb-8 max-w-3xl mx-auto">
          {t("maximize_presence").split("\n").map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </div>


        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
            {t("startNow")}
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
            {t("seeDemos")}
            <Play className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-purple-400" />
            <span>{t("streaming24_7")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Twitch className="w-4 h-4 text-purple-400" />
            <span>{t("twitchIntegration")}</span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-purple-400" />
            <span>{t("guaranteedIncome")}</span>
          </div>
        </div>
      </div>

      <div className="mt-16 glass-card rounded-xl p-4 max-w-4xl mx-auto animate-float border border-purple-600/30 bg-neutral-900/60">
        <div className="relative group">
          <div className="overflow-hidden rounded-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              // className="w-full transition-transform duration-700 ease-in-out delay-150 group-hover:scale-150"
              className="w-full origin-[67%_40%] transition-transform duration-700 ease-in-out delay-150 group-hover:scale-150"

            >
              <source src="/videos/Performance.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="absolute -top-3 -right-3 bg-purple-600 text-white px-3 py-1 rounded-full flex items-center gap-1 z-10">
            <Twitch className="w-4 h-4" />
            <span className="font-bold">{t("live24_7")}</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
