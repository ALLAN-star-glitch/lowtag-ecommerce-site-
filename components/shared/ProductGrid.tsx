"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";
import { BadgeType } from "@/lib/types/badge/badgeType";
import { Product } from "@/lib/interfaces/product/product";
import ProductCard  from "./ProductCard";
  

/* ---------------------------------------------
   COLOR SYSTEM
---------------------------------------------- */
const LT_BG = "var(--color-cream-peach)";
const LT_PRIMARY = "var(--color-royal-blue)";
const LT_SECONDARY = "var(--color-hot-pink)";
const LT_TEXT = "var(--color-soft-black)";
const LT_MUTED_BORDER = "rgba(0,0,0,0.08)";

/* ---------------------------------------------
   FLASH DEALS LIST
---------------------------------------------- */
const flashDealsList = [
  { name: "Black Friday", color: "#F87171" },
  { name: "Weekend Sale", color: "#60A5FA" },
  { name: "Cyber Monday", color: "#FBBF24" },
  { name: "Holiday Deals", color: "#34D399" },
];

/* ---------------------------------------------
   COMPONENT PROPS
---------------------------------------------- */
interface ProductGridProps {
  products: Product[]; // now accepts a dynamic array of products
  badgesList?: BadgeType[];
  categories?: string[];
}

/* ---------------------------------------------
   MAIN COMPONENT
---------------------------------------------- */
export function ProductGrid({
  products,
  badgesList = [],
  categories = [],
}: ProductGridProps) {
  const [search, setSearch] = useState("");
  const [selectedBadges, setSelectedBadges] = useState<BadgeType[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [price, setPrice] = useState({ min: "", max: "" });
  const [visibleCount, setVisibleCount] = useState(12);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const [showBadges, setShowBadges] = useState(true);
  const [showCategories, setShowCategories] = useState(true);
  const [showPrice, setShowPrice] = useState(true);

  /* ---------------------------------------------
     FILTERED PRODUCTS
  ---------------------------------------------- */
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const q = search.toLowerCase();
      const matchSearch =
        q === "" ||
        p.name.toLowerCase().includes(q) ||
        p.category?.name.toLowerCase().includes(q);

      const matchBadge =
        selectedBadges.length === 0 ||
        selectedBadges.some((b) => p.badges?.includes(b));

      const matchCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(p.category?.name || "");

      const matchPrice =
        (price.min === "" || (p.discountPrice ?? p.price) >= Number(price.min)) &&
        (price.max === "" || (p.discountPrice ?? p.price) <= Number(price.max));

      return matchSearch && matchBadge && matchCategory && matchPrice;
    });
  }, [products, search, selectedBadges, selectedCategories, price]);

  const toggleBadge = (badge: BadgeType) => {
    setSelectedBadges((prev) =>
      prev.includes(badge) ? prev.filter((b) => b !== badge) : [...prev, badge]
    );
  };

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const clearFilters = () => {
    setSelectedBadges([]);
    setSelectedCategories([]);
    setPrice({ min: "", max: "" });
    setSearch("");
  };

  const applyFilters = () => setShowMobileFilter(false);

  /* ---------------------------------------------
     RENDER
  ---------------------------------------------- */
  return (
    <section className="py-10" style={{ backgroundColor: LT_BG }}>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-12 gap-6">
        {/* MOBILE SEARCH */}
        <div className="col-span-12 mb-4 md:hidden">
          <div
            className="flex items-center px-3 py-1.5 rounded-xl shadow-sm"
            style={{
              backgroundColor: "#fff",
              border: `1px solid ${LT_MUTED_BORDER}`,
            }}
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent outline-none text-sm py-1"
              placeholder="Search products..."
              style={{ color: LT_TEXT }}
            />
          </div>
        </div>

        {/* FLASH DEAL PILLS */}
        <div className="col-span-12 mb-6">
          <div className="overflow-x-auto no-scrollbar">
            <div className="flex gap-3 sticky top-40 bg-cream-peach py-2 z-20 px-2">
              {flashDealsList.map((deal) => (
                <Link
                  key={deal.name}
                  href={`/flash-deals/${deal.name.toLowerCase().replace(/ /g, "-")}`}
                  className="flex-shrink-0 px-4 py-2 rounded-full text-white font-medium transition"
                  style={{ backgroundColor: deal.color }}
                >
                  {deal.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP FILTER SIDEBAR */}
        <aside
          className="hidden md:block col-span-3 lg:col-span-2 sticky top-40 pr-4"
          style={{
            backgroundColor: LT_BG,
            paddingTop: 4,
            paddingBottom: 4,
            maxHeight: "calc(100vh - 4rem)",
            overflowY: "auto",
          }}
        >
          {renderFilters(false)}
          <button
            onClick={clearFilters}
            className="w-full mt-6 py-2 text-center rounded-md"
            style={{ backgroundColor: LT_SECONDARY, color: "#fff" }}
          >
            Clear All Filters
          </button>
        </aside>

        {/* PRODUCTS */}
        <div className="col-span-12 md:col-span-9 lg:col-span-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold" style={{ color: LT_TEXT }}>
              Products
            </h2>
            <span className="text-sm" style={{ color: LT_TEXT }}>
              {filteredProducts.length} products found
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.slice(0, visibleCount).map((product) => (
              <ProductCard
                key={product.id}
                id={product.id.toString()}
                name={product.name}
                price={product.discountPrice ?? product.price}
                originalPrice={product.price}  // optional, now included
                image={product.images[0]?.url || ''}
                badges={product.badges ?? []}
                rating={
                  product.reviews?.length
                    ? product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length
                    : 0
                }
                reviewsCount={product.reviews?.length ?? 0}
              />
            ))}
          </div>

          {visibleCount < filteredProducts.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount((p) => p + 9)}
                className="px-8 py-3 rounded-lg transition"
                style={{
                  border: `2px solid ${LT_PRIMARY}`,
                  color: LT_PRIMARY,
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = LT_PRIMARY;
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = LT_PRIMARY;
                }}
              >
                Load More Products
              </button>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE FLOATING FILTER ICON */}
      <button
        className="fixed bottom-5 right-5 z-50 p-4 rounded-full shadow-lg bg-white md:hidden"
        onClick={() => setShowMobileFilter(true)}
        style={{ border: `1px solid ${LT_MUTED_BORDER}` }}
      >
        <Filter size={20} style={{ color: LT_SECONDARY }} />
      </button>
    </section>
  );

  /* ---------------------------------------------
     FILTER RENDER FUNCTION
  ---------------------------------------------- */
  function renderFilters(isMobile: boolean) {
    return (
      <div className="space-y-6 p-2">
        {!isMobile && (
          <div
            className="p-2 rounded-xl shadow-sm"
            style={{ backgroundColor: "#fff", border: `1px solid ${LT_MUTED_BORDER}` }}
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-transparent outline-none text-sm py-1"
              style={{ color: LT_TEXT }}
            />
          </div>
        )}

        {/* BADGES */}
        {badgesList.length > 0 && (
          <FilterSection
            title="Badges"
            isOpen={showBadges}
            toggle={() => setShowBadges(!showBadges)}
            accentColor={LT_PRIMARY}
            textColor={LT_TEXT}
          >
            <div className="flex flex-col gap-2">
              {badgesList.map((badge) => (
                <label key={badge} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedBadges.includes(badge)}
                    onChange={() => toggleBadge(badge)}
                    className="w-4 h-4 accent-[var(--color-royal-blue)]"
                  />
                  <span style={{ color: LT_TEXT }}>{badge}</span>
                </label>
              ))}
            </div>
          </FilterSection>
        )}

        {/* CATEGORIES */}
        {categories.length > 0 && (
          <FilterSection
            title="Categories"
            isOpen={showCategories}
            toggle={() => setShowCategories(!showCategories)}
            accentColor={LT_PRIMARY}
            textColor={LT_TEXT}
          >
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <label key={cat} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    className="w-4 h-4 accent-[var(--color-royal-blue)]"
                  />
                  <span style={{ color: LT_TEXT }}>{cat}</span>
                </label>
              ))}
            </div>
          </FilterSection>
        )}

        {/* PRICE */}
        <FilterSection
          title="Price Range"
          isOpen={showPrice}
          toggle={() => setShowPrice(!showPrice)}
          accentColor={LT_PRIMARY}
          textColor={LT_TEXT}
        >
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              value={price.min}
              onChange={(e) => setPrice({ ...price, min: e.target.value })}
              className="w-1/2 px-2 py-1 rounded-lg"
              style={{ backgroundColor: "#fff", border: `1px solid ${LT_MUTED_BORDER}`, color: LT_TEXT }}
            />
            <input
              type="number"
              placeholder="Max"
              value={price.max}
              onChange={(e) => setPrice({ ...price, max: e.target.value })}
              className="w-1/2 px-2 py-1 rounded-lg"
              style={{ backgroundColor: "#fff", border: `1px solid ${LT_MUTED_BORDER}`, color: LT_TEXT }}
            />
          </div>
        </FilterSection>
      </div>
    );
  }
}

/* ---------------------------------------------
   COLLAPSIBLE FILTER SECTION
---------------------------------------------- */
function FilterSection({
  title,
  children,
  isOpen,
  toggle,
  accentColor,
  textColor,
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
  accentColor?: string;
  textColor?: string;
}) {
  return (
    <div className="border-b pb-3" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
      <button
        onClick={toggle}
        className="flex items-center justify-between w-full text-left font-medium mb-2"
        style={{ color: textColor }}
      >
        {title}
        {isOpen ? (
          <ChevronUp size={18} style={{ color: textColor }} />
        ) : (
          <ChevronDown size={18} style={{ color: textColor }} />
        )}
      </button>

      {isOpen && <div className="pl-1">{children}</div>}
    </div>
  );
}
