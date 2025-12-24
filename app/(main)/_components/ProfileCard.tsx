import Image from "next/image";
import Link from "next/link";

import { Github } from "lucide-react";

export const ProfileCard = () => {
  return (
    <section
      aria-labelledby="profile-heading"
      className="flex flex-col gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100"
    >
      <div className="flex items-center gap-4">
        <figure className="relative w-16 h-16 rounded-full overflow-hidden border border-slate-200 shrink-0">
          <Image
            src="https://github.com/kimgho.png"
            alt="김건호의 깃허브 프로필 사진"
            fill
            className="object-cover"
          />
        </figure>
        <div>
          <h3 id="profile-heading" className="font-bold text-lg text-gray-main">
            Kimgho
          </h3>
          <p className="text-sm text-gray-sub">Frontend Engineer(가 목표입니다.)</p>
        </div>
      </div>
      <p className="text-xs text-gray-main leading-relaxed">
        사용자 경험을 우선으로 개발하는 프론트엔드 개발자입니다. <br />
        다양한 관점에서 접근하는 것을 좋아해요
        <br />
        해결했다고 끝나는 것이 아닌 끝까지 파는 것을 좋아해요
      </p>
      <ul className="flex gap-3 mt-2" aria-label="소셜 링크">
        <li>
          <Link
            href="https://github.com/kimgho"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-black hover:border-slate-400 transition-all"
            aria-label="GitHub 프로필로 이동"
          >
            <Github size={18} aria-hidden="true" />
          </Link>
        </li>
      </ul>
    </section>
  );
};
