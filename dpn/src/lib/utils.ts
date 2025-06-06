// Utility function for className merging (shadcn/ui style)
export function cn(...classes: (string | undefined | false)[]) {
    return classes.filter(Boolean).join(' ');
}
