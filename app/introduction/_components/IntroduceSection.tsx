export const IntroduceSection = () => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-1 bg-black/50 rounded-full"></div>
        <h2 className="text-3xl font-bold text-gray-main">Introduce</h2>
      </div>
      <div className="bg-white p-6 rounded-xl flex flex-col gap-6">
        <p className="text-gray-sub text-lg font-medium">
          사용자 경험을 우선으로 개발하는 프론트엔드 개발자 김건호입니다.
        </p>
        <div className="space-y-3">
          <span className="text-2xl font-bold text-gray-main block">저는</span>
          <div className="space-y-2 text-gray-sub text-lg leading-relaxed">
            <p>다양한 관점에서 접근하는 것을 좋아해요.</p>
            <p>문제를 해결했다면 왜 그런 문제가 발생했는지 분석하는 것을 좋아해요.</p>
            <p>팀원들과 적극적으로 소통하고, 함께하는 것을 좋아해요.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
