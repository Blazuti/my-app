import type { InertiaLinkProps } from '@inertiajs/react';
import { clsx } from 'clsx';
import type { classValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: classValue[]) {
    return twMerge(clsx(inputs));
}

export function toUrl(url: NonNullable<InertiaLinkProps['href']>): string {
    return typeof url === 'string' ? url : url.url;
}
