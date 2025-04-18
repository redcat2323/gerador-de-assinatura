
import React from "react";
import { SignatureData } from "../../types";
import { ensureUrlProtocol } from "../../../../lib/utils";

interface ContactInfoProps {
  data: SignatureData;
}

export const ContactInfo = ({ data }: ContactInfoProps) => {
  return (
    <table cellPadding="0" cellSpacing="0">
      <tbody>
        {data.email && (
          <tr>
            <td style={{ paddingBottom: "5px" }}>
              <a 
                href={`mailto:${data.email}`}
                style={{ 
                  color: data.colors?.accent || "#9b87f5",
                  textDecoration: "none",
                  fontSize: "14px"
                }}
              >
                {data.email}
              </a>
            </td>
          </tr>
        )}
        {data.phone && (
          <tr>
            <td style={{ paddingBottom: "5px" }}>
              <a 
                href={`tel:${data.phone}`}
                style={{ 
                  color: data.colors?.secondary || "#8e9196",
                  textDecoration: "none",
                  fontSize: "14px"
                }}
              >
                {data.phone}
              </a>
            </td>
          </tr>
        )}
        {data.website && (
          <tr>
            <td style={{ paddingBottom: "5px" }}>
              <a 
                href={ensureUrlProtocol(data.website)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: data.colors?.secondary || "#8e9196",
                  textDecoration: "none",
                  fontSize: "14px"
                }}
              >
                {data.website}
              </a>
            </td>
          </tr>
        )}
        {data.customLinks && data.customLinks.length > 0 && 
          data.customLinks.map((link, index) => (
            link.label && link.url && (
              <tr key={index}>
                <td style={{ paddingBottom: "5px" }}>
                  <a 
                    href={ensureUrlProtocol(link.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      color: data.colors?.secondary || "#8e9196",
                      textDecoration: "none",
                      fontSize: "14px"
                    }}
                  >
                    {link.label}
                  </a>
                </td>
              </tr>
            )
          ))
        }
      </tbody>
    </table>
  );
};
