# TripPlannerPage 리팩토링 가이드

## 분리된 컴포넌트

### 1. Components (`components/`)

#### SortableSpotItem.tsx

- 드래그 가능한 개별 스팟 아이템 컴포넌트
- 사용자 역할에 따라 편집/삭제 버튼 표시
- Props: spot, spotIndex, onEdit, onDelete, onMoveUp, onMoveDown, onCalculateCost 등

#### MobileSpotList.tsx

- 모바일 뷰용 스팟 리스트 컴포넌트
- Props: spots, travelSegments, spotExpenses, activeDay, onAddSpot 등

#### ItineraryPlanner.tsx

- 데스크톱 뷰용 일정 계획 컴포넌트
- 드래그 앤 드롭 기능 포함
- Props: planData, spots, travelSegments, onBackClick 등

#### EditSpotDialog.tsx

- 스팟 편집 다이얼로그
- 이동 수단 및 체류시간 변경 기능
- Props: isOpen, spot, onClose, onChangeSpot, onUpdateTransportMode 등

#### CostDialog.tsx

- 비용 추가/수정 다이얼로그
- 카테고리 선택 및 금액 입력
- Props: isOpen, spot, expenseInputs, onSave, onClose 등

#### SaveConfirmationDialog.tsx

- 저장 확인 팝업
- Props: isOpen, onSave, onCancel, isSaving

#### DepartureTimeDialog.tsx (기존)

- 출발 시간 설정 다이얼로그

### 2. Utilities (`utils/`)

#### tripPlannerUtils.ts

- `getEndTime()`: 종료시간 계산
- `parseDurationToMinutes()`: 시간 텍스트를 분으로 변환
- `calculateTotalCost()`: 총 비용 계산
- `getDayDate()`: 날짜 계산
- `getLastSpotEndTime()`: 마지막 관광지 종료 시간
- `convertTransitToWalking()`: TRANSIT 모드를 WALKING으로 변환

## 사용 방법

### TripPlannerPage.tsx에서

```tsx
import SortableSpotItem from './components/SortableSpotItem';
import MobileSpotList from './components/MobileSpotList';
import ItineraryPlanner from './components/ItineraryPlanner';
import EditSpotDialog from './components/EditSpotDialog';
import CostDialog from './components/CostDialog';
import SaveConfirmationDialog from './components/SaveConfirmationDialog';
import { getEndTime, calculateTotalCost, ... } from './utils/tripPlannerUtils';

// 컴포넌트 렌더링
<MobileSpotList
  spots={spots}
  travelSegments={travelSegments}
  spotExpenses={spotExpenses}
  activeDay={activeDay}
  // ... 기타 props
/>

<ItineraryPlanner
  planData={planData}
  spots={spots}
  travelSegments={travelSegments}
  // ... 기타 props
/>
```

## 리팩토링 이점

1. **코드 가독성**: 3001줄 -> 각 컴포넌트 100-300줄로 분리
2. **유지보수성**: 각 컴포넌트의 역할이 명확
3. **재사용성**: 독립된 컴포넌트로 다른 곳에서도 사용 가능
4. **테스트 용이성**: 각 컴포넌트를 독립적으로 테스트 가능
5. **성능**: 컴포넌트별 최적화 가능

## 주의사항

- 유틸리티 함수들은 순수 함수로 작성되어 side effect 없음
- 컴포넌트 Props 인터페이스는 명확히 정의됨
- 기존 기능은 모두 유지됨
