"use client";

import React, { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import { Search as SearchIcon, X, ChevronDown, ChevronUp, Filter } from "lucide-react";


import { badgesList, subCategories, sampleProducts } from "./SampleProducts";
import { BadgeType } from "@/lib/types/badge/badgeType";

/* ---------------------------------------------
   LOWTAG ELECTRONICS THEME COLORS
---------------------------------------------- */
const LT_BG = "var(--color-cream-peach)";
const LT_PRIMARY = "var(--color-royal-blue)";
const LT_SECONDARY = "var(--color-hot-pink)";
const LT_TEXT = "var(--color-soft-black)";
const LT_MUTED_BORDER = "rgba(0,0,0,0.08)";

export default function ProductGrid() {
  const [search, setSearch] = useState("");
  const [selectedBadges, setSelectedBadges] = useState<BadgeType[]>([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);
  const [price, setPrice] = useState({ min: "", max: "" });
  const [visibleCount, setVisibleCount] = useState(12);

  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const [showBadges, setShowBadges] = useState(true);
  const [showSubCategories, setShowSubCategories] = useState(true);
  const [showPrice, setShowPrice] = useState(true);

  /* ---------------------------------------------
     FILTERED PRODUCTS
  ---------------------------------------------- */
  const filteredProducts = useMemo(() => {
    return sampleProducts.filter((p) => {
      const q = search.toLowerCase();
      const matchSearch =
        q === "" ||
        p.name.toLowerCase().includes(q) ||
        p.subCategory?.toLowerCase().includes(q);

      const matchBadge =
        selectedBadges.length === 0 ||
        selectedBadges.some((b) => p.badges.includes(b));

      const matchSubCategory =
        selectedSubCategories.length === 0 ||
        selectedSubCategories.includes(p.subCategory || "");

      const matchPrice =
        (price.min === "" || p.price >= Number(price.min)) &&
        (price.max === "" || p.price <= Number(price.max));

      return matchSearch && matchBadge && matchSubCategory && matchPrice;
    });
  }, [search, selectedBadges, selectedSubCategories, price]);

  /* ---------------------------------------------
     TOGGLE HELPERS
  ---------------------------------------------- */
  const toggleBadge = (badge: BadgeType) =>
    setSelectedBadges((prev) =>
      prev.includes(badge) ? prev.filter((b) => b !== badge) : [...prev, badge]
    );

  const toggleSubCategory = (subCat: string) =>
    setSelectedSubCategories((prev) =>
      prev.includes(subCat) ? prev.filter((s) => s !== subCat) : [...prev, subCat]
    );

  const clearFilters = () => {
    setSelectedBadges([]);
    setSelectedSubCategories([]);
    setPrice({ min: "", max: "" });
    setSearch("");
  };

  const applyFilters = () => setShowMobileFilter(false);

  /* ---------------------------------------------
     RENDER PAGE
  ---------------------------------------------- */
  return (
    <section className="py-10" style={{ backgroundColor: LT_BG }}>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-12 gap-6">
        {/* DESKTOP FILTER SIDEBAR */}
        <aside className="hidden md:block col-span-3 lg:col-span-2 sticky top-44 h-max pr-4">
          {renderFilters(false)}
          <button
            onClick={clearFilters}
            className="w-full mt-6 py-2 text-center rounded-md font-semibold"
            style={{ backgroundColor: LT_SECONDARY, color: "#fff" }}
          >
            Clear All Filters
          </button>
        </aside>

        {/* PRODUCT GRID */}
        <div className="col-span-12 md:col-span-9 lg:col-span-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: LT_TEXT }}>
              Electronics Deals — Today&apos;s Top Picks
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
                className="px-8 py-3 border-2 text-sm rounded-full font-semibold transition-colors"
                style={{ borderColor: LT_PRIMARY, color: LT_PRIMARY }}
              >
                Load More Electronics
              </button>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE FILTER BUTTON */}
      <div className="md:hidden fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <button
          onClick={() => setShowMobileFilter(true)}
          className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center"
          style={{ border: `1px solid ${LT_MUTED_BORDER}` }}
        >
          <Filter size={22} style={{ color: LT_SECONDARY }} />
        </button>
      </div>

      {/* MOBILE SEARCH MODAL */}
      {showMobileSearch && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 md:hidden">
          <div className="bg-white w-full rounded-xl p-4 max-w-md mt-24 shadow-xl">
            <div className="flex items-center mb-4">
              <SearchIcon size={18} style={{ color: LT_TEXT, marginRight: 8 }} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent outline-none text-sm py-1"
                placeholder="Search electronics..."
                style={{ color: LT_TEXT }}
              />
              <button onClick={() => setShowMobileSearch(false)}>
                <X size={20} style={{ color: LT_TEXT }} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE FILTER DRAWER */}
      {showMobileFilter && (
        <div className="fixed inset-0 bg-black/40 z-50 md:hidden">
          <div
            className="absolute left-0 top-16 bottom-0 w-80 p-5 overflow-y-auto shadow-xl"
            style={{ backgroundColor: "#fff", borderTopRightRadius: 24, borderBottomRightRadius: 24 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold" style={{ color: LT_TEXT }}>
                Filters
              </h3>
              <button onClick={() => setShowMobileFilter(false)}>
                <X size={22} style={{ color: LT_TEXT }} />
              </button>
            </div>

            {renderFilters(true)}

            <button
              onClick={applyFilters}
              className="w-full mt-6 py-2 text-center rounded-md font-semibold"
              style={{ backgroundColor: LT_PRIMARY, color: "#fff" }}
            >
              Apply Filters
            </button>

            <button
              onClick={clearFilters}
              className="w-full mt-3 py-2 text-center rounded-md font-semibold"
              style={{ backgroundColor: LT_SECONDARY, color: "#fff" }}
            >
              Clear All Filters
            </button>
          </div>
        </div>
      )}
    </section>
  );

  /* ---------------------------------------------
     FILTERS (Desktop + Mobile)
  ---------------------------------------------- */
  function renderFilters(isMobile = false) {
    return (
      <div className="space-y-6 p-2">
        {/* DESKTOP SEARCH BAR */}
        {!isMobile && (
          <div className="p-2 rounded-xl" style={{ backgroundColor: "#fff", border: `1px solid ${LT_MUTED_BORDER}` }}>
            <div className="flex items-center gap-2">
              <div style={{ backgroundColor: LT_BG, padding: 6, borderRadius: 6 }}>
                <SearchIcon size={16} style={{ color: LT_TEXT }} />
              </div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search electronics..."
                className="w-full bg-transparent outline-none text-sm py-1"
                style={{ color: LT_TEXT }}
              />
            </div>
          </div>
        )}

        {/* BADGES */}
        <FilterSection
          title="Badges"
          isOpen={showBadges}
          toggle={() => setShowBadges(!showBadges)}
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

        {/* SUBCATEGORIES */}
        <FilterSection
          title="Subcategories"
          isOpen={showSubCategories}
          toggle={() => setShowSubCategories(!showSubCategories)}
          textColor={LT_TEXT}
        >
          <div className="flex flex-col gap-2">
            {subCategories.map((subCat) => (
              <label key={subCat} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={selectedSubCategories.includes(subCat)}
                  onChange={() => toggleSubCategory(subCat)}
                  className="w-4 h-4 accent-[var(--color-royal-blue)]"
                />
                <span style={{ color: LT_TEXT }}>{subCat}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* PRICE */}
        <FilterSection
          title="Price Range"
          isOpen={showPrice}
          toggle={() => setShowPrice(!showPrice)}
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
   SMALL FILTER SECTION COMPONENT
---------------------------------------------- */
function FilterSection({
  title,
  children,
  isOpen,
  toggle,
  textColor,
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
  textColor?: string;
}) {
  return (
    <div className="border-b pb-3" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
      <button
        onClick={toggle}
        className="flex items-center justify-between w-full text-left font-semibold mb-2"
        style={{ color: textColor }}
      >
        {title}
        {isOpen ? <ChevronUp size={18} style={{ color: textColor }} /> : <ChevronDown size={18} style={{ color: textColor }} />}
      </button>
      {isOpen && <div className="pl-1">{children}</div>}
    </div>
  );
}
