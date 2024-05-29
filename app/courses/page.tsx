"use client";
import { Footer } from "@app/components/km-it/Footer";
import { Header } from "@app/components/km-it/Header";
import { Swiper, SwiperSlide } from "@app/components/swiper-wrapper";
import { courseImages } from "@app/data";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {};

const CoursesPage = (props: Props) => {
  const [innerWidth, setInnerWidth] = useState(768);

  useEffect(() => {
    if (typeof window !== undefined) {
      setInnerWidth(window.innerWidth);
    }
  }, []);

  const isDesktop = innerWidth >= 768;

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="w-full">
        <div className="max-w-7xl w-full px-4 lg:px-20 py-32 mx-auto">
          <h2 className="text-6xl text-center mb-10 text-secondary-700">
            Courses
          </h2>
          <Swiper
            slidesPerView={isDesktop ? 2 : 1}
            effect="coverflow"
            centeredSlides
            initialSlide={2}
            coverflowEffect={
              isDesktop
                ? {
                    rotate: 25,
                    stretch: 150,
                    depth: 600,
                    modifier: 1,
                    slideShadows: true,
                  }
                : {}
            }
          >
            {courseImages.map(
              (
                { id, icon: Icon, courseTitle, courseDesc, alt, src },
                index
              ) => (
                <SwiperSlide
                  key={id}
                  style={{ borderRadius: "16px", overflow: "hidden" }}
                >
                  <div
                    className={twMerge(
                      "relative z-0 w-full lg:p-10 p-5 flex flex-col gap-1 aspect-video mx-auto rounded-[inherit] overflow-hidden bg-gradient-to-b",
                      index === 0
                        ? "from-orange-400 to-orange-500"
                        : index === 1
                        ? "from-rose-400 to-rose-500"
                        : index === 2
                        ? "from-sky-400 to-sky-500"
                        : index === 3
                        ? "from-violet-400 to-violet-500"
                        : index === 4
                        ? "from-emerald-400 to-emerald-500"
                        : ""
                    )}
                  >
                    <Icon className="lg:size-12 size-8 text-slate-50 shrink-0" />
                    <h2 className="lg:text-2xl text-xl font-medium text-slate-50 lg:mt-3">
                      {courseTitle}
                    </h2>
                    <p className="text-sm text-slate-200">{courseDesc}</p>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
          <h2 className="text-xl text-secondary-800 font-semibold mt-20 mb-1">
            Web Development Bootcamp
          </h2>
          <p className="text-sm">
            {`Our Web Development Bootcamp is designed to take you from a beginner
            to a professional web developer. You will learn HTML, CSS, and
            JavaScript, along with modern frameworks like React and Angular.
            This course also covers backend development with Node.js and
            Express, database management with MongoDB, and version control with
            Git. By the end of the course, you will have a portfolio of projects
            that demonstrate your skills.`}
          </p>

          <h2 className="text-xl text-secondary-800 font-semibold mt-6 mb-1">
            Data Science & Machine Learning
          </h2>
          <p className="text-sm">
            {`Dive into the world of data with our comprehensive Data Science &
            Machine Learning course. This program covers Python and R
            programming, data manipulation with Pandas and NumPy, data
            visualization with Matplotlib and Seaborn, and machine learning
            algorithms using Scikit-Learn. Advanced topics include neural
            networks and deep learning with TensorFlow and Keras. Ideal for
            those looking to pursue a career in data science.`}
          </p>
          <h2 className="text-xl text-secondary-800 font-semibold mt-6 mb-1">
            Cybersecurity Essentials
          </h2>
          <p className="text-sm">
            {`Our Cybersecurity Essentials course is perfect for anyone looking to
            understand the critical aspects of network security. Learn about
            common threats, vulnerabilities, and how to protect systems against
            attacks. This course includes practical labs on penetration testing,
            ethical hacking, and the use of security tools like Metasploit and
            Wireshark. A must-have for aspiring cybersecurity professionals.`}
          </p>

          <h2 className="text-xl text-secondary-800 font-semibold mt-6 mb-1">
            Mobile App Development
          </h2>
          <p className="text-sm">
            {`In the Mobile App Development course, you'll learn to build mobile
            applications for both Android and iOS platforms. Starting with the
            basics of Kotlin for Android and Swift for iOS, the course also
            introduces you to cross-platform development using Flutter and React
            Native. You'll work on real-world projects, from initial design to
            app store deployment, ensuring you have a comprehensive
            understanding of the app development lifecycle.`}
          </p>
          <h2 className="text-xl text-secondary-800 font-semibold mt-6 mb-1">
            Cloud Computing with AWS
          </h2>
          <p className="text-sm">
            {` Our Cloud Computing with AWS course prepares you for a career in
            cloud technology. Covering the fundamentals of AWS services, cloud
            architecture, and infrastructure management, this course includes
            hands-on labs and projects that mirror real-world scenarios. You'll
            learn to design and deploy scalable, fault-tolerant systems and be
            prepared to take the AWS Certified Solutions Architect exam.`}
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default CoursesPage;
