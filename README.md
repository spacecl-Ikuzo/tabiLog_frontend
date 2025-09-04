## 🚀 주요 기능

### 핵심 컴포넌트

- **DatePicker**: 날짜 범위 선택 기능이 포함된 달력 컴포넌트
- **Pagination**: 페이지네이션 UI 컴포넌트
- **PrivateRoute**: JWT 기반 인증이 필요한 라우트 보호
- **Spinner**: 로딩 상태 표시 컴포넌트

### 기술 스택

- **Frontend**: React 19, TypeScript, Vite
- **상태관리**: Zustand, TanStack Query
- **스타일링**: TailwindCSS, Radix UI
- **폼 관리**: React Hook Form + Zod
- **라우팅**: React Router DOM
- **HTTP 클라이언트**: Axios
- **날짜 처리**: date-fns, React Day Picker

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── layout/         # 레이아웃 관련 컴포넌트
│   │   ├── DashBoard.tsx
│   │   ├── header.tsx
│   │   ├── side-navigation.tsx
│   │   └── top-navigation.tsx
│   └── common/         # 공통 컴포넌트 (여러 페이지에서 공통으로 사용하는 경우!)
│   └── ui/             # shadcn/ui 기반 컴포넌트
├── pages/              # 페이지 컴포넌트
│   ├── delete-account/ # 회원탈퇴 페이지
│   ├── home/          # 홈 페이지 (비로그인이어도 이용 가능)
│   │   ├── components/ # 홈 페이지 전용 컴포넌트
│   │   └── Home.tsx
│   ├── login/         # 로그인 페이지
│   │   ├── components/ # 로그인 페이지 전용 컴포넌트
│   │   └── Login.tsx
│   ├── plans/         # 여행 계획 관리 페이지
│   ├── register/      # 회원가입 페이지
│   └── spots-intro/   # 관광지 소개 페이지
├── api/                # API 관련 설정
├── lib/                # 유틸리티 함수
├── assets/             # 정적 자원
├── datePicker.tsx      # 날짜 선택 컴포넌트
├── Pagination.tsx      # 페이지네이션 컴포넌트
├── PrivateRoute.tsx    # 인증 보호 라우트
├── Spinner.tsx         # 로딩 스피너 (스켈레톤 UI를 사용할 예정이므로 적용안함)
├── store.ts           # Zustand 상태 관리
├── main.tsx           # 앱 진입점
└── App.tsx            # 메인 라우터
```

## 🛠 설치 및 실행

### 요구사항

- Node.js 18+
- Yarn
- settings.json 파일을 .vscode > settings.json 경로로 이동 필요 (자동 포맷팅 적용)

### 설치

````bash
# 의존성 설치
yarn install

### 환경 설정

`.env.example` 파일을 참고하여 `.env` 파일을 생성하고 필요한 환경 변수를 설정하세요.

### 개발 서버 실행

```bash
yarn dev

### 빌드

```bash
yarn build


## 🔧 주요 컴포넌트 사용법

### DatePicker 컴포넌트

```tsx
import DatePicker from './datePicker';
import { DateRange } from 'react-day-picker';

const MyComponent = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });

  return <DatePicker date={dateRange} setDate={setDateRange} />;
};
````

### Pagination 컴포넌트

```tsx
import CustomPagination from './Pagination';

const MyComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return <CustomPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />;
};
```

### PrivateRoute 사용

```tsx
// App.tsx에서 인증이 필요한 라우트를 보호
<Route element={<PrivateRoute />}>
  <Route path="/dashboard" element={<DashBoard />}>
    {/* 보호된 하위 라우트들 */}
  </Route>
</Route>
```

## 🎨 스타일링

- **TailwindCSS**: 유틸리티 우선 CSS 프레임워크
- **Radix UI**: 접근성을 고려한 헤드리스 UI 컴포넌트
- **shadcn/ui**: 미리 구성된 컴포넌트 라이브러리

## 🔐 인증 시스템

- JWT 토큰 기반 인증
- Zustand를 통한 사용자 상태 관리

## ⭐ API 통신 요청시

### API 통신 요청/응답 코드 예시

```ts
const requestBody = {
  title: values.title,
  content: '예시입니다.',
  isPublished: true,
};

try {
  await axiosInstance.post('/write', requestBody); //API 주소, 요청 데이터
  toast.success('등록 성공하셨습니다.', { position: 'top-center' });
} catch (error) {
  toast.error('등록에 실패하셨습니다.', {
    position: 'top-center',
  });
  console.error(error);
} finally {
  //finally가 필요할 경우 추가, 없으면 삭제
}
```

### 로딩중일때는 스켈레톤 ui 사용

- react-loading-skeleton 사용
- API 사용시 적용
- 응답 결과가 나오기 전, 데이터 표시되는 부분에 적용한다.
- 사용법 (공식 문서를 참고한다)
  | 옵션 | 설명 |
  | ---------------- | ----------------------------------- |
  | `width` | 스켈레톤 가로 길이 |
  | `height` | 스켈레톤 세로 길이 |
  | `count` | 반복할 스켈레톤 개수 (텍스트 줄 수 등) |
  | `circle` | 원형 스켈레톤 생성 여부 |
  | `baseColor` | 기본 색상 |
  | `highlightColor` | 움직이는 하이라이트 색상 |

- 예시 코드

```ts
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; //임포트 필요

const Home = () => {
  return (
    <>
      <Skeleton count={1} height={100} width={100} />
    </>
  );
};
```

## 📝 커스터마이징

### 새로운 페이지 추가

1. `src/pages/` 디렉토리에 새 컴포넌트 생성
2. `App.tsx`에서 라우트 추가
3. 필요시 `side-navigation.tsx`에 네비게이션 메뉴 추가

### 새로운 UI 컴포넌트 추가

1. `src/components/ui/` 디렉토리에 컴포넌트 생성 또는 각 페이지별로 개별 컴포넌트 폴더 생성
2. shadcn/ui CLI 사용 권장: `npx shadcn-ui@latest add [component-name]`
