export const IntroduceSection = () => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-1 bg-black/50 rounded-full"></div>
        <h2 className="text-3xl font-bold text-gray-main">About Me</h2>
      </div>
      <div className="bg-white p-6 rounded-xl flex flex-col gap-6">
        <p className="text-gray-sub text-lg font-medium">프론트엔드 개발자 김건호입니다.</p>
        <div className="space-y-3">
          <span className="text-2xl font-bold text-gray-main block">저는</span>
          <div className="space-y-2 text-gray-sub text-lg leading-relaxed">
            <p>문제를 해결했다면 왜 그런 문제가 발생했는지 분석하는 것을 좋아해요.</p>
            <p>팀원들과 적극적으로 소통하고, 함께하는 것을 좋아해요.</p>
            <p>최근에는 A/B테스트같은 실험에 관심이 생겨 통계와 실험을 공부하고 있어요.</p>
            <p>프론트엔드뿐 아니라 데이터분석, AI(LLM)도 조금씩 공부하고 있어요.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
