import Image from "next/image";

export const EducationSection = () => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-1 bg-black/50 rounded-full"></div>
        <h2 className="text-3xl font-bold text-gray-main">Education</h2>
      </div>
      <div className="bg-white p-6 rounded-xl ">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <Image
            src="/images/school.png"
            alt="Education"
            width={70}
            height={70}
            className="object-cover"
            priority
          />
          <div className="grow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <h3 className="text-xl font-bold text-gray-main">경북대학교</h3>
              <time className="text-lg text-gray-secondary">2023 - 2026.02(졸업 예정)</time>
            </div>
            <p className="text-gray-sub font-medium">컴퓨터학부 심화컴퓨터공학 전공</p>
          </div>
        </div>
      </div>
    </section>
  );
};
