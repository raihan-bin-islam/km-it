"use client";

import { GoogleMapComponent } from "@app/components/GoogleMap";
import { CourseSlider } from "@app/components/km-it/CourseSlider";
import { Footer } from "@app/components/km-it/Footer";
import { Header } from "@app/components/km-it/Header";
import { HeroSection } from "@app/components/km-it/HeroSection";
import { Testimonial } from "@app/components/km-it/Testimonial";

export default function KMIT() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between">
      <Header />
      <HeroSection />
      <CourseSlider />
      <Testimonial />
      <div className="max-w-7xl px-20 w-full py-10">
        <div className="p-2 bg-orange-200 rounded-lg">
          <GoogleMapComponent />
        </div>
      </div>
      <Footer />
    </main>
  );
}
