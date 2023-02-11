export enum Spacing {
    ExtraSmall = 'xs',
    Small = 's',
    Medium = 'm',
    Large = 'l',
    ExtraLarge = 'xl'
}

export function createSpacingClass(prefix: string, spacing?: Spacing): string {
    if (spacing) {
        return `${prefix}--spacing-${spacing}`;
    }

    return ''
}