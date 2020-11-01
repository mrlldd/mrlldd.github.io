import createPseudoRandomPicker from "@/app/(public)/components/quotes/create-pseudo-random-picker";

const energies: ReadonlyArray<string> = [
    'Using force to',
    'Using cursed energy to',
    'Using mind to',
    'Using common sense to',
    'Using logic to',
    'Using knowledge to',
    'Using power of thought to'
] as const;

const picker = createPseudoRandomPicker(0, energies.length - 1, [0]);


export const getRandomEnergyValue = () => {
    return energies[picker()]
}
