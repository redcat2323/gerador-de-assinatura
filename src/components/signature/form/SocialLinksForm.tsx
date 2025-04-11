
import React from "react";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { SignatureData } from "../types";

interface SocialLinksFormProps {
  signatureData: SignatureData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, field: string, isNested?: boolean) => void;
}

export const SocialLinksForm = ({ signatureData, handleInputChange }: SocialLinksFormProps) => {
  const iconColor = signatureData.colors?.accent || "#9b87f5";
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Redes Sociais</h3>
      
      <div>
        <Label htmlFor="facebook">
          <Facebook className="inline-block w-4 h-4 mr-2" color={iconColor} />
          Facebook
        </Label>
        <Input
          id="facebook"
          value={signatureData.social.facebook}
          onChange={(e) => handleInputChange(e, "facebook", true)}
          placeholder="URL do Facebook"
        />
      </div>

      <div>
        <Label htmlFor="twitter">
          <Twitter className="inline-block w-4 h-4 mr-2" color={iconColor} />
          Twitter
        </Label>
        <Input
          id="twitter"
          value={signatureData.social.twitter}
          onChange={(e) => handleInputChange(e, "twitter", true)}
          placeholder="URL do Twitter"
        />
      </div>

      <div>
        <Label htmlFor="linkedin">
          <Linkedin className="inline-block w-4 h-4 mr-2" color={iconColor} />
          LinkedIn
        </Label>
        <Input
          id="linkedin"
          value={signatureData.social.linkedin}
          onChange={(e) => handleInputChange(e, "linkedin", true)}
          placeholder="URL do LinkedIn"
        />
      </div>

      <div>
        <Label htmlFor="instagram">
          <Instagram className="inline-block w-4 h-4 mr-2" color={iconColor} />
          Instagram
        </Label>
        <Input
          id="instagram"
          value={signatureData.social.instagram}
          onChange={(e) => handleInputChange(e, "instagram", true)}
          placeholder="URL do Instagram"
        />
      </div>
    </div>
  );
};
