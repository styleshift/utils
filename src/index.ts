import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { type VariantProps, cva } from 'class-variance-authority';
import { tv } from 'tailwind-variants';

/** Re-export types for consumer usage */
export type { ClassValue, VariantProps };

/** Merges Tailwind classes without conflicts */
export const tw = twMerge;

/** Conditionally joins class names */
export const cx = clsx;

/** Creates variant-based className builders */
export const cv = cva;

/** Creates type-safe Tailwind variants */
export { tv };
/** Combines and merges class names efficiently */
export const cn = (...inputs: ClassValue[]): string => tw(cx(inputs));
