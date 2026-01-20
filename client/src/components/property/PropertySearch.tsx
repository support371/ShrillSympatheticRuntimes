import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, MapPin } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";

export function PropertySearch() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="w-full space-y-4" data-testid="property-search-container">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Main Search Input */}
        <div className="relative flex-grow group">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
          <Input 
            placeholder="City, Neighborhood, or Zip..." 
            className="pl-12 h-14 bg-slate-900 border-white/10 text-white rounded-xl focus-visible:ring-blue-500 shadow-2xl"
            data-testid="input-property-search"
          />
        </div>

        {/* Quick Filters */}
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-[140px] h-14 bg-slate-900 border-white/10 text-white rounded-xl">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border-white/10 text-white">
              <SelectItem value="0-500k">$0 - $500k</SelectItem>
              <SelectItem value="500k-1m">$500k - $1M</SelectItem>
              <SelectItem value="1m-2m">$1M - $2M</SelectItem>
              <SelectItem value="2m+">$2M+</SelectItem>
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="h-14 px-6 bg-slate-900 border-white/10 text-white rounded-xl hover:bg-slate-800">
                <SlidersHorizontal className="mr-2 h-5 w-5" />
                Filters
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 bg-slate-900 border-white/10 p-6 text-white shadow-2xl" align="end">
              <div className="space-y-6">
                <h4 className="font-black uppercase tracking-widest text-xs text-blue-500">Advanced Filters</h4>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">Property Type</label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Single Family", "Multifamily", "Condo", "Commercial"].map((type) => (
                        <button key={type} className="px-3 py-2 text-[10px] font-bold rounded-lg border border-white/5 bg-slate-950 hover:border-blue-500/50 transition-all">
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">Beds</label>
                      <Select defaultValue="any">
                        <SelectTrigger className="h-10 bg-slate-950 border-white/5">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-950 border-white/5">
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="1+">1+</SelectItem>
                          <SelectItem value="2+">2+</SelectItem>
                          <SelectItem value="3+">3+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">Baths</label>
                      <Select defaultValue="any">
                        <SelectTrigger className="h-10 bg-slate-950 border-white/5">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-950 border-white/5">
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="1+">1+</SelectItem>
                          <SelectItem value="2+">2+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 font-black uppercase text-xs tracking-widest h-12 rounded-xl">
                  Apply 12 Filters
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          <Button className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black shadow-lg shadow-blue-600/20" data-testid="button-search-submit">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Popular Tags */}
      <div className="flex gap-2 items-center overflow-x-auto pb-2 no-scrollbar">
        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mr-2 whitespace-nowrap">Popular:</span>
        {["Newly Listed", "Price Reduced", "Fix & Flip", "Tenanted", "High ROI"].map((tag) => (
          <button key={tag} className="px-4 py-1.5 rounded-full bg-slate-900/50 border border-white/5 text-[10px] font-bold text-slate-400 hover:text-white hover:border-blue-500/30 transition-all whitespace-nowrap">
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
