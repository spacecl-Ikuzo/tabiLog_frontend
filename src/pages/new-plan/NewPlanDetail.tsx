import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import SideNavigation from '../../components/layout/side-navigation';
import { ArrowLeft, ArrowRight, Upload, Image as ImageIcon, MapPin } from 'lucide-react';
import { axiosInstance } from '../../api/axios';
import { uploadImage } from '../../api/api';
import Header from '@/components/layout/header';

interface RegionData {
  [key: string]: string[];
}

interface PlanDetailData {
  title: string;
  region: string;
  prefecture: string;
  image: File | null;
  imagePreview: string | null;
}

export default function NewPlanDetail() {
  const navigate = useNavigate();
  const location = useLocation();

  // URL에서 날짜 정보 가져오기
  const searchParams = new URLSearchParams(location.search);
  const startDate = searchParams.get('startDate') || '';
  const endDate = searchParams.get('endDate') || '';

  const [planData, setPlanData] = useState<PlanDetailData>({
    title: '',
    region: '',
    prefecture: '',
    image: null,
    imagePreview: null,
  });

  const [regions, setRegions] = useState<RegionData>({});
  const [prefectures, setPrefectures] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    title: '',
    region: '',
    prefecture: '',
    image: '',
  });

  // 지역 데이터 로드
  useEffect(() => {
    // 일단 하드코딩된 데이터로 시작 (백엔드 연결 문제 해결 후 API 호출로 변경)
    const regionData: RegionData = {
      北日本: ['北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県'],
      東日本: [
        '東京都',
        '神奈川県',
        '埼玉県',
        '千葉県',
        '茨城県',
        '栃木県',
        '群馬県',
        '山梨県',
        '長野県',
        '新潟県',
        '富山県',
        '石川県',
        '福井県',
        '静岡県',
        '愛知県',
      ],
      西日本: [
        '大阪府',
        '京都府',
        '兵庫県',
        '奈良県',
        '三重県',
        '滋賀県',
        '和歌山県',
        '広島県',
        '岡山県',
        '鳥取県',
        '島根県',
        '山口県',
      ],
      南日本: ['福岡県', '熊本県', '長崎県', '佐賀県', '大分県', '宮崎県', '鹿児島県', '沖縄県'],
    };

    console.log('지역 데이터 설정:', regionData);
    setRegions(regionData);

    // 백엔드 API 호출 시도 (선택사항)
    const fetchRegionsFromAPI = async () => {
      try {
        const regionData: RegionData = {
          北日本: [],
          東日本: [],
          西日本: [],
          南日本: [],
        };

        // 각 지역별로 현 목록 가져오기
        for (const region of Object.keys(regionData)) {
          try {
            const response = await axiosInstance.get(`/api/categories/regions?region=${region}`);
            console.log(`${region} 지역 API 응답:`, response.data);
            if (response.data && response.data.data) {
              regionData[region] = response.data.data;
            }
          } catch (error) {
            console.error(`${region} 지역 데이터 로드 실패:`, error);
          }
        }

        console.log('API에서 가져온 지역 데이터:', regionData);
        // API 데이터가 있으면 업데이트
        const hasData = Object.values(regionData).some((prefectures) => prefectures.length > 0);
        if (hasData) {
          setRegions(regionData);
        }
      } catch (error) {
        console.error('지역 데이터 로드 실패:', error);
      }
    };

    // 백엔드 API 호출 (백그라운드에서 실행)
    fetchRegionsFromAPI();
  }, []);

  // 지역 선택 시 현 목록 업데이트
  useEffect(() => {
    if (planData.region && regions[planData.region]) {
      setPrefectures(regions[planData.region]);
      // 지역이 변경되면 현 선택 초기화
      setPlanData((prev) => ({ ...prev, prefecture: '' }));
    } else {
      setPrefectures([]);
    }
  }, [planData.region, regions]);

  const validateForm = () => {
    const newErrors = {
      title: '',
      region: '',
      prefecture: '',
      image: '',
    };

    if (!planData.title.trim()) {
      newErrors.title = 'プラン名を入力してください';
    }

    if (!planData.region) {
      newErrors.region = '地域を選択してください';
    }

    if (!planData.prefecture) {
      newErrors.prefecture = '県を選択してください';
    }

    setErrors(newErrors);
    return !newErrors.title && !newErrors.region && !newErrors.prefecture;
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // 파일 크기 체크 (5MB 제한)
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, image: '画像ファイルは5MB以下にしてください' }));
        return;
      }

      // 파일 타입 체크
      if (!file.type.startsWith('image/')) {
        setErrors((prev) => ({ ...prev, image: '画像ファイルを選択してください' }));
        return;
      }

      setPlanData((prev) => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file),
      }));
      setErrors((prev) => ({ ...prev, image: '' }));
    }
  };

  const handleCreatePlan = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      let imageUrl = null;

      // 이미지가 있으면 먼저 업로드
      if (planData.image) {
        console.log('이미지 업로드 시작...');
        const uploadResponse = await uploadImage(planData.image);
        if (uploadResponse.success) {
          imageUrl = uploadResponse.url;
          console.log('이미지 업로드 성공:', imageUrl);
        } else {
          throw new Error(uploadResponse.message || '이미지 업로드 실패');
        }
      }

      const requestData = {
        title: planData.title,
        startDate: startDate,
        endDate: endDate,
        totalBudget: 1, // 기본값: 1원 (0은 @Positive 검증에서 실패)
        region: planData.region,
        prefecture: planData.prefecture,
        prefectureImageUrl: imageUrl,
      };

      console.log('플랜 생성 데이터:', requestData);

      const response = await axiosInstance.post('/api/plans', requestData);
      console.log('플랜 생성 성공:', response.data);

      alert('旅行計画が作成されました！');
      navigate('/plans');
    } catch (error: any) {
      console.error('플랜 생성 실패:', error);

      if (error.response?.status === 401) {
        alert('로그인이 필요합니다. 다시 로그인해주세요.');
        navigate('/login');
      } else if (error.response?.status === 400) {
        // 400 에러의 경우 백엔드에서 보낸 구체적인 에러 메시지 표시
        const errorMessage = error.response?.data?.message || '입력값을 확인해주세요.';
        alert(`입력 오류: ${errorMessage}`);
      } else if (error.code === 'ERR_NETWORK') {
        alert('서버에 연결할 수 없습니다. 네트워크를 확인해주세요.');
      } else {
        alert('旅行計画の作成に失敗しました。');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/newPlan');
  };

  return (
    <div className="min-h-screen">
      {/* 헤더 */}
      <Header />

      <div className="flex">
        {/* 사이드바 네비게이션 (데스크톱만) */}
        <SideNavigation selectedNav="newPlan" />

        {/* 메인 컨텐츠 */}
        <div className="flex-1 p-6 lg:py-10 lg:px-30">
          <div className="max-w-2xl mx-auto">
            {/* 제목 */}
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">新しい旅行計画</h1>
              <p className="text-lg text-gray-600">旅行の詳細を設定してください</p>
            </div>

            {/* 진행 단계 표시 */}
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full text-sm font-medium">
                  ✓
                </div>
                <span className="text-sm font-medium text-green-500">日程選択</span>
                <div className="w-8 h-px bg-gray-300"></div>
                <div className="flex items-center justify-center w-8 h-8 bg-orange-500 text-white rounded-full text-sm font-medium">
                  2
                </div>
                <span className="text-sm font-medium text-orange-500">詳細設定</span>
              </div>
            </div>

            {/* 선택된 날짜 표시 */}
            <Card className="bg-green-50 border border-green-200 shadow-sm mb-8">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-4">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">選択された日程</h3>
                  <p className="text-green-700">
                    {startDate && endDate
                      ? startDate === endDate
                        ? `${new Date(startDate).toLocaleDateString('ja-JP', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })} (日帰り)`
                        : `${new Date(startDate).toLocaleDateString('ja-JP', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })} ～ ${new Date(endDate).toLocaleDateString('ja-JP', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}`
                      : '日程が選択されていません'}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 상세 설정 폼 */}
            <Card className="bg-[#FFF7F0] border border-gray-200 shadow-sm mb-8">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* 플랜 이름 */}
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-sm font-medium text-gray-700">
                      プラン名 <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="title"
                      type="text"
                      value={planData.title}
                      onChange={(e) => {
                        setPlanData((prev) => ({ ...prev, title: e.target.value }));
                        setErrors((prev) => ({ ...prev, title: '' }));
                      }}
                      placeholder="例: 東京2泊3日旅"
                      className="h-12 border-2 border-gray-200 focus:border-orange-400 focus:ring-orange-200"
                    />
                    {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
                  </div>

                  {/* 지역 선택 */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">
                      地域 <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={planData.region}
                      onValueChange={(value) => {
                        setPlanData((prev) => ({ ...prev, region: value }));
                        setErrors((prev) => ({ ...prev, region: '' }));
                      }}
                    >
                      <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-orange-400 focus:ring-orange-200">
                        <SelectValue placeholder="地域を選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(regions).map((region) => (
                          <SelectItem key={region} value={region}>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-orange-500" />
                              {region}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.region && <p className="text-sm text-red-500">{errors.region}</p>}
                  </div>

                  {/* 현 선택 */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">
                      県 <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={planData.prefecture}
                      onValueChange={(value) => {
                        setPlanData((prev) => ({ ...prev, prefecture: value }));
                        setErrors((prev) => ({ ...prev, prefecture: '' }));
                      }}
                      disabled={!planData.region}
                    >
                      <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-orange-400 focus:ring-orange-200">
                        <SelectValue
                          placeholder={planData.region ? '県を選択してください' : 'まず地域を選択してください'}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {prefectures.map((prefecture) => (
                          <SelectItem key={prefecture} value={prefecture}>
                            {prefecture}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.prefecture && <p className="text-sm text-red-500">{errors.prefecture}</p>}
                  </div>

                  {/* 이미지 업로드 */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">プラン画像</Label>
                    <div className="space-y-4">
                      {/* 이미지 미리보기 */}
                      {planData.imagePreview ? (
                        <div className="relative">
                          <img
                            src={planData.imagePreview}
                            alt="プラン画像プレビュー"
                            className="w-full h-48 object-cover rounded-lg border border-gray-200"
                          />
                          <button
                            onClick={() => {
                              setPlanData((prev) => ({ ...prev, image: null, imagePreview: null }));
                              setErrors((prev) => ({ ...prev, image: '' }));
                            }}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                          >
                            <span className="text-sm">×</span>
                          </button>
                        </div>
                      ) : (
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-orange-400 transition-colors">
                          <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-500 mb-2">画像をアップロード</p>
                          <p className="text-sm text-gray-400">JPG, PNG, GIF (最大5MB)</p>
                        </div>
                      )}

                      {/* 파일 입력 */}
                      <div className="relative">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          className="w-full h-12 border-2 border-gray-200 hover:border-orange-400 hover:bg-orange-50"
                        >
                          <Upload className="w-4 h-4 mr-2" />
                          画像を選択
                        </Button>
                      </div>
                    </div>
                    {errors.image && <p className="text-sm text-red-500">{errors.image}</p>}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 버튼 */}
            <div className="flex justify-between items-center">
              <Button
                onClick={handleBack}
                variant="outline"
                className="px-8 py-3 rounded-xl font-medium flex items-center gap-2 border-2 border-gray-200 hover:border-gray-300"
              >
                <ArrowLeft className="w-4 h-4" />
                戻る
              </Button>

              <Button
                onClick={handleCreatePlan}
                disabled={isLoading}
                className="px-8 py-3 rounded-xl font-medium flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? '作成中...' : '旅行計画を作成'}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
