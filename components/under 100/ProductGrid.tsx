"use client";

import React, { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import { Search as SearchIcon, X, ChevronDown, ChevronUp, Filter } from "lucide-react";
import { sampleProducts, badgesList, categories } from "./SampleProducts";
import { BadgeType } from "./ProductBardge";

const LT_BG = "var(--color-cream-peach)";
const LT_PRIMARY = "var(--color-royal-blue)";
const LT_SECONDARY = "var(--color-hot-pink)";
const LT_TEXT = "var(--color-soft-black)";
const LT_MUTED_BORDER = "rgba(0,0,0,0.08)";

export default function ProductGrid() {
  const [search, setSearch] = useState("");
  const [selectedBadges, setSelectedBadges] = useState<BadgeType[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [price, setPrice] = useState({ min: "", max: "" });
  const [visibleCount, setVisibleCount] = useState(12);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const [showBadges, setShowBadges] = useState(true);
  const [showCategories, setShowCategories] = useState(true);
  const [showPrice, setShowPrice] = useState(true);

  const filteredProducts = useMemo(() => {
    return sampleProducts.filter((p) => {
      const q = search.toLowerCase();
      const matchSearch =
        q === "" ||
        p.name.toLowerCase().includes(q) ||
        p.category?.toLowerCase().includes(q);

      const matchBadge =
        selectedBadges.length === 0 ||
        selectedBadges.some((b) => p.badges.includes(b));

      const matchCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(p.category || "");

      const matchPrice =
        (price.min === "" || p.price >= Number(price.min)) &&
        (price.max === "" || p.price <= Number(price.max));

      return matchSearch && matchBadge && matchCategory && matchPrice;
    });
  }, [search, selectedBadges, selectedCategories, price]);

  const toggleBadge = (badge: BadgeType) =>
    setSelectedBadges((prev) =>
      prev.includes(badge) ? prev.filter((b) => b !== badge) : [...prev, badge]
    );

  const toggleCategory = (cat: string) =>
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );

  const clearFilters = () => {
    setSelectedBadges([]);
    setSelectedCategories([]);
    setPrice({ min: "", max: "" });
    setSearch("");
  };

  const applyFilters = () => {
    setShowMobileFilter(false);
  };

  return (
    <section className="py-10" style={{ backgroundColor: LT_BG }}>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-12 gap-6">
        {/* DESKTOP FILTER SIDEBAR */}
        <aside className="hidden md:block col-span-3 lg:col-span-2 sticky top-44 h-max pr-4 bg-transparent">
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
        <div className="col-span-12 md:col-span-9 lg:col-span-10 pt-0 md:pt-0">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold" style={{ color: LT_TEXT }}>
              Today&apos;s Hottest Deals
            </h2>
            <span className="text-sm" style={{ color: LT_TEXT }}>
              {filteredProducts.length} products found
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {filteredProducts.slice(0, visibleCount).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {visibleCount < filteredProducts.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount((p) => p + 9)}
                className="px-8 py-3 border-2 border-royal-blue text-royal-blue rounded-full font-semibold hover:bg-royal-blue hover:text-white transition-colors"
              >
                Load More Products
              </button>
            </div>
          )}
        </div>
      </div>

      {/* FLOATING MOBILE BUTTONS */}
      <div className="md:hidden fixed bottom-6 right-6 flex flex-col gap-3 z-50">

        {/* Filter Button */}
        <button
          onClick={() => setShowMobileFilter(true)}
          className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center"
        >
          <Filter size={20} style={{ color: LT_SECONDARY }} />
        </button>
      </div>

      {/* MOBILE SEARCH MODAL */}
      {showMobileSearch && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-30 p-4 md:hidden">
          <div className="bg-white w-full rounded-xl p-4 max-w-md mt-24">
            <div className="flex items-center mb-4">
              <SearchIcon size={18} style={{ color: LT_TEXT, marginRight: 8 }} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent outline-none text-sm py-1"
                placeholder="Search products..."
                style={{ color: LT_TEXT }}
              />
              <button onClick={() => setShowMobileSearch(false)}>
                <X size={22} style={{ color: LT_TEXT }} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE FILTER DRAWER */}
      {showMobileFilter && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 md:hidden">
          <div
            className="absolute left-0 top-16 bottom-0 w-80 p-5 overflow-y-auto"
            style={{
              backgroundColor: "#fff",
              borderTopRightRadius: 24,
              borderBottomRightRadius: 24,
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 style={{ color: LT_TEXT }} className="text-xl font-semibold">
                Filters
              </h3>
              <button onClick={() => setShowMobileFilter(false)}>
                <X size={22} style={{ color: LT_TEXT }} />
              </button>
            </div>

            {renderFilters(true)}

            <button
              onClick={applyFilters}
              className="w-full mt-6 py-2 text-center rounded-md"
              style={{ backgroundColor: LT_PRIMARY, color: "#fff" }}
            >
              Apply
            </button>

            <button
              onClick={clearFilters}
              className="w-full mt-3 py-2 text-center rounded-md"
              style={{ backgroundColor: LT_SECONDARY, color: "#fff" }}
            >
              Clear All Filters
            </button>
          </div>
        </div>
      )}
    </section>
  );

  function renderFilters(isMobile = false) {
    return (
      <div className="space-y-6 p-2">
        {/* Only desktop shows search */}
        {!isMobile && (
          <div
            className="p-2 rounded-xl"
            style={{ backgroundColor: "#fff", border: `1px solid ${LT_MUTED_BORDER}` }}
          >
            <div className="flex items-center gap-2">
              <div style={{ backgroundColor: LT_BG, padding: 6, borderRadius: 6 }}>
                <SearchIcon size={16} style={{ color: LT_TEXT }} />
              </div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-transparent outline-none text-sm py-1"
                style={{ color: LT_TEXT }}
              />
            </div>
          </div>
        )}

        {/* BADGES */}
        <FilterSection title="Badges" isOpen={showBadges} toggle={() => setShowBadges(!showBadges)} textColor={LT_TEXT}>
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

        {/* CATEGORIES */}
        <FilterSection title="Categories" isOpen={showCategories} toggle={() => setShowCategories(!showCategories)} textColor={LT_TEXT}>
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

        {/* PRICE */}
        <FilterSection title="Price Range" isOpen={showPrice} toggle={() => setShowPrice(!showPrice)} textColor={LT_TEXT}>
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

function FilterSection({ title, children, isOpen, toggle, textColor }: { title: string; children: React.ReactNode; isOpen: boolean; toggle: () => void; textColor?: string; }) {
  return (
    <div className="border-b pb-3" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
      <button
        onClick={toggle}
        className="flex items-center justify-between w-full text-left font-medium mb-2"
        style={{ color: textColor }}
      >
        {title} {isOpen ? <ChevronUp size={18} style={{ color: textColor }} /> : <ChevronDown size={18} style={{ color: textColor }} />}
      </button>
      {isOpen && <div className="pl-1">{children}</div>}
    </div>
  );
}
