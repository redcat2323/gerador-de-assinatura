
import React from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { SignatureData } from "../types";

interface ColorCustomizationFormProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background?: string;
  };
  onColorChange: (colorType: 'primary' | 'secondary' | 'accent' | 'background', value: string) => void;
}

export const ColorCustomizationForm = ({ colors, onColorChange }: ColorCustomizationFormProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Cores</h3>
      
      <div>
        <Label htmlFor="primaryColor">Cor Principal</Label>
        <div className="flex gap-2 items-center">
          <Input
            id="primaryColor"
            type="color"
            value={colors.primary}
            onChange={(e) => onColorChange('primary', e.target.value)}
            className="w-12 h-12 p-1 cursor-pointer"
          />
          <Input
            type="text"
            value={colors.primary}
            onChange={(e) => onColorChange('primary', e.target.value)}
            placeholder="#000000"
            className="font-mono"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="secondaryColor">Cor Secundária</Label>
        <div className="flex gap-2 items-center">
          <Input
            id="secondaryColor"
            type="color"
            value={colors.secondary}
            onChange={(e) => onColorChange('secondary', e.target.value)}
            className="w-12 h-12 p-1 cursor-pointer"
          />
          <Input
            type="text"
            value={colors.secondary}
            onChange={(e) => onColorChange('secondary', e.target.value)}
            placeholder="#666666"
            className="font-mono"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="accentColor">Cor de Destaque (Ícones)</Label>
        <div className="flex gap-2 items-center">
          <Input
            id="accentColor"
            type="color"
            value={colors.accent}
            onChange={(e) => onColorChange('accent', e.target.value)}
            className="w-12 h-12 p-1 cursor-pointer"
          />
          <Input
            type="text"
            value={colors.accent}
            onChange={(e) => onColorChange('accent', e.target.value)}
            placeholder="#9b87f5"
            className="font-mono"
          />
          <div className="flex items-center ml-2 space-x-1">
            <Facebook size={16} color={colors.accent} />
            <Twitter size={16} color={colors.accent} />
            <Linkedin size={16} color={colors.accent} />
            <Instagram size={16} color={colors.accent} />
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="backgroundColor">Cor de Fundo</Label>
        <div className="flex gap-2 items-center">
          <Input
            id="backgroundColor"
            type="color"
            value={colors.background || "#ffffff"}
            onChange={(e) => onColorChange('background', e.target.value)}
            className="w-12 h-12 p-1 cursor-pointer"
          />
          <Input
            type="text"
            value={colors.background || "#ffffff"}
            onChange={(e) => onColorChange('background', e.target.value)}
            placeholder="#ffffff"
            className="font-mono"
          />
          <div 
            className="w-6 h-6 rounded ml-2 border border-gray-300"
            style={{ backgroundColor: colors.background || "#ffffff" }}
          ></div>
        </div>
      </div>
    </div>
  );
};
