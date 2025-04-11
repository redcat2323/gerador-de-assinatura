
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Ensures a URL has a protocol (http/https) prefix
 * This prevents URLs from being treated as relative paths
 */
export function ensureUrlProtocol(url: string): string {
  if (!url) return url;
  
  // Check if the URL already has a protocol
  if (url.match(/^https?:\/\//i)) {
    return url;
  }
  
  // Add https:// protocol as default
  return `https://${url}`;
}
