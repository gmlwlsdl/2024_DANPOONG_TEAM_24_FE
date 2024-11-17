import InformationCard from '../components/InformationCard'

function Information() {
  return (
    <>
      <div className="mx-[18px] flex flex-col gap-5 justify-center">
        <InformationCard
          title="건강에 유해한 품목은 구매가 어려워요"
          description="주류,담배 등 아동청소년 판매 금지 품목, 커피, 에너지 음료 (고카페인
            함유 음료) 탄산음료(콜라,사이다 등)"
        />
        <InformationCard
          title="한끼식사로 볼 수 없는 간식,조미류는 구매가 어려워요"
          description="과자류,초콜릿,사탕,아이스크림,안주류,간장 등 양념 종류의 조미료"
        />
        <InformationCard
          title={`학용품 등 급식과 관련 없는 제품은 구매가\n어려워요`}
          description="생활용품,학용품,기타소품 등 식품이 아닌 제품"
        />
        <InformationCard
          title="편의점에서는 종량제 봉투를 결제할 수 있어요"
          description="원칙상 1장 가능만 구매가 가능해요"
          isAccepted={true}
        />
      </div>
    </>
  )
}

export default Information
