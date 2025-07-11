"use client";
import Link from "next/link";
import Image from "next/image";
import courseData from "../data/music_courses.json";
import { Button } from "@/components/ui/stateful-button";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-black/100">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn with the best
          </p>
        </div>
      </div>
      <div>
        <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center h-full">
              <BackgroundGradient key={course.id}  className="flex flex-col justify-between rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden max-w-sm w-full h-[370px]">
                <div className="px-4 pt-4 text-center">
                  <h3 className="text-base font-semibold text-black dark:text-white mb-2">
                    {course.title}
                  </h3>

                  <Image
                    src={course.image}
                    alt={course.title}
                    className="h-50 w-full object-cover rounded-md mb-3"
                  />

                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {course.description}
                  </p>
                </div>
                <div className="px-4 pb-4 mt-auto text-center">
                  <Link href={`/courses/${course.slug}`}>
                    <p className="text-cyan-400 hover:underline text-sm font-medium ">
                      Learn More
                    </p>
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href="/courses" className="inline-block">
          <Button>View All Courses</Button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
