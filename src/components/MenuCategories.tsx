import React from 'react';

interface Product {
  id: number;
  categoryId: number;
  name: string;
  price: number;
  description: string;
  isVeg: boolean;
  isAvailable: boolean;
  availableTime?: string;
  likes?: number;
  dislikes?: number;
}

interface MenuCategory {
  id: number;
  name: string;
  count: number;
  imageUrl: string;
  isActive?: boolean;
  grayscale?: boolean;
  products: Product[];
}

interface MenuCategoriesProps {
  categories: MenuCategory[];
  onCategoryClick?: (categoryId: string) => void;
}

const MenuCategories: React.FC<MenuCategoriesProps> = ({ categories, onCategoryClick }) => {
  const scrollToSection = (name: string) => {
    if (onCategoryClick) onCategoryClick(name);
    else console.log(`Scrolling to section ${name}`);
  };

  return (
    <div className="inner-toogle-new">
      {categories.map((category) => (
        <div key={category.id} className="sub-part-outer">
          <a
            className={`subcategories ${category.isActive ? 'active' : ''}`}
            onClick={() => scrollToSection(category.name)}
            id={`${category.id}-li`}
          >
            <div className="overlay-tp-hd"></div>
            <span className="sm-img">
              <span>
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  style={{ filter: category.grayscale ? 'grayscale(0.9)' : 'none' }}
                  width="45"
                  height="45"
                />
              </span>
              <span>
                <span style={{ display: 'inline', width: 'auto' }}>{category.name}</span>
              </span>
            </span>
            <span className="count-n">({category.count})</span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default MenuCategories;
