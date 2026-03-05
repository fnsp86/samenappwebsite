import type { Metadata } from "next";
import Link from "next/link";
import { Smartphone, Heart, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Download",
  description: "Download de Samen app voor iPhone of Android. Gratis beschikbaar.",
};

export default function DownloadPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center mb-14">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-terracotta mx-auto mb-6">
          <Heart className="h-8 w-8 text-white" strokeWidth={2.5} />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-nachtblauw mb-4">
          Download Samen
        </h1>
        <p className="text-base text-leisteen max-w-lg mx-auto">
          Beschikbaar voor iPhone en Android. Gratis te downloaden, binnen een
          minuut klaar om te gebruiken.
        </p>
      </div>

      {/* Download buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
        <a
          href="#"
          className="inline-flex items-center justify-center gap-3 rounded-2xl bg-nachtblauw px-8 py-4 text-white transition-transform hover:scale-[0.97]"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <div className="text-left">
            <div className="text-xs opacity-80">Download op de</div>
            <div className="text-base font-bold">App Store</div>
          </div>
        </a>

        <a
          href="#"
          className="inline-flex items-center justify-center gap-3 rounded-2xl bg-nachtblauw px-8 py-4 text-white transition-transform hover:scale-[0.97]"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302L15.396 12l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z"/>
          </svg>
          <div className="text-left">
            <div className="text-xs opacity-80">Beschikbaar op</div>
            <div className="text-base font-bold">Google Play</div>
          </div>
        </a>
      </div>

      {/* What you get */}
      <div className="rounded-2xl border border-zand bg-zand-light p-8">
        <h2 className="text-xl font-bold text-nachtblauw mb-6 text-center">
          Wat krijg je met Samen?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Dagelijkse check-ins",
            "Diepgaande gespreksstarters",
            "Koppel quizzen en spellen",
            "Gedeeld dagboek",
            "Date roulette met 200+ ideeen",
            "Persoonlijke relatiepols",
            "Vergelijk elkaars antwoorden",
            "Dankbaarheidsberichten",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-salie shrink-0" />
              <span className="text-sm text-nachtblauw">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Device requirements */}
      <div className="mt-8 text-center">
        <p className="text-xs text-leisteen">
          Vereist iOS 15+ of Android 10+. De app is gratis te downloaden.
          <br />
          Optioneel: Samen Premium voor toegang tot alle functies.
        </p>
      </div>
    </div>
  );
}
