import React from 'react';
import { useNavigate } from 'react-router-dom';
import KinkakujiImg from '../../assets/Kinkakuji.jpg';
import TokyoImg from '../../assets/Tokyo.jpg';
import OsakaCastleImg from '../../assets/OsakaCastle.jpg';

const CreatePlan = () => {
  const navigate = useNavigate();

  const handleCreatePlan = () => {
    // TODO: 로그인 상태 확인 로직 추가
    // 현재는 임시로 로그인 페이지로 이동
    navigate('/newPlan');
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-16">
          {/* 왼쪽 이미지 콜라주 */}
          <div className="flex-1 relative">
            <div className="flex items-center justify-center">
              {/* 첫 번째 이미지 */}
              <div className="relative z-10 w-64 h-80 bg-gray-200 rounded-lg shadow-lg transform rotate-3">
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat rounded-lg"
                  style={{ backgroundImage: `url(${KinkakujiImg})` }}
                ></div>
              </div>

              {/* 두 번째 이미지 (중앙, 가장 크게) */}
              <div className="relative z-20 w-72 h-96 bg-gray-200 rounded-lg shadow-xl transform -translate-x-4 -translate-y-2">
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat rounded-lg"
                  style={{ backgroundImage: `url(${TokyoImg})` }}
                ></div>
              </div>

              {/* 세 번째 이미지 */}
              <div className="relative z-10 w-64 h-80 bg-gray-200 rounded-lg shadow-lg transform -rotate-3 -translate-x-8">
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat rounded-lg"
                  style={{ backgroundImage: `url(${OsakaCastleImg})` }}
                ></div>
              </div>
            </div>
          </div>

          {/* 오른쪽 텍스트 및 버튼 */}
          <div className="flex-1">
            <div className="max-w-lg">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">旅をデザインしよう</h2>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">最高の瞬間を、プランに。</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                複雑な旅行計画も、タビログなら驚くほどかんたん。あなたの「好き」を詰め込んで、忘れられない旅を今すぐ作り始めましょう。
              </p>
              <button
                className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg"
                onClick={handleCreatePlan}
              >
                自分だけのプランを作成する
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePlan;
