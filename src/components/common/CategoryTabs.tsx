interface CategoryTabsProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onCategorySelect?: (category: string) => void; // 추가적인 액션을 위한 콜백
}

export default function CategoryTabs({
  categories,
  selectedCategory,
  onCategoryChange,
  onCategorySelect,
}: CategoryTabsProps) {
  const handleCategoryClick = (category: string) => {
    onCategoryChange(category);
    onCategorySelect?.(category);
  };

  return (
    <div className="flex gap-0 mb-8 p-1 w-fit">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`p-3 lg:px-4 lg:py-2 text-[12px] lg:text-sm font-bold ${
            selectedCategory === category
              ? 'border-b-2 border-brand-category-selected'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
