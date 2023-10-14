export function merge(...classes) {
    return classes.filter(Boolean).join(' ')
}