import React from "react";
import Providers from "@/components/providers";
import { Locale, routing } from "@/i18n/routing";
import { LayoutProps } from "@/lib/types/route-props";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Roboto, Inter } from "next/font/google";
import { cn } from "@/lib/utils/cn";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"], // Include specific weights
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"], // Include specific weights
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });
  return {
    title: t("metadata-title"),
    description: t("metadata-description"),
  };
}

// Generate static pages based on the locales to enable static rendering
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ params: { locale }, children }: LayoutProps) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={cn(inter.variable, roboto.variable, inter.className, "antialiased")}>
        <Providers>
          {/* Header */}
          <Header />

          {/* Toaster */}
          <Toaster />

          {/* Main content */}
          {children}
          {/* Footer */}
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
