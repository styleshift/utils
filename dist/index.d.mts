import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as tailwind_merge from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';
export { ClassValue } from 'clsx';
export { VariantProps } from 'class-variance-authority';
import { TV as TV$1 } from 'tailwind-variants';
export { tv } from 'tailwind-variants';

/** Merges Tailwind classes without conflicts */
declare const tw: (...classLists: tailwind_merge.ClassNameValue[]) => string;
/** Conditionally joins class names */
declare const cx: typeof clsx;
/** Creates variant-based className builders */
declare const cv: <T>(base?: class_variance_authority_dist_types.ClassValue, config?: T extends {
    [x: string]: Record<string, ClassValue>;
} ? {
    variants?: T | undefined;
    defaultVariants?: { [Variant in keyof T]?: class_variance_authority_dist_types.StringToBoolean<keyof T[Variant]> | null | undefined; } | undefined;
    compoundVariants?: (T extends {
        [x: string]: Record<string, ClassValue>;
    } ? ({ [Variant in keyof T]?: class_variance_authority_dist_types.StringToBoolean<keyof T[Variant]> | null | undefined; } | { [Variant_1 in keyof T]?: class_variance_authority_dist_types.StringToBoolean<keyof T[Variant_1]> | class_variance_authority_dist_types.StringToBoolean<keyof T[Variant_1]>[] | undefined; }) & class_variance_authority_dist_types.ClassProp : class_variance_authority_dist_types.ClassProp)[] | undefined;
} : never) => (props?: T extends {
    [x: string]: Record<string, ClassValue>;
} ? { [Variant in keyof T]?: class_variance_authority_dist_types.StringToBoolean<keyof T[Variant]> | null | undefined; } & class_variance_authority_dist_types.ClassProp : class_variance_authority_dist_types.ClassProp) => string;

/** Combines and merges class names efficiently */
declare const cn: (...inputs: ClassValue[]) => string;
type TV = TV$1;

export { type TV, cn, cv, cx, tw };
