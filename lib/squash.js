export default function squash(value, maxValue, max, min) {
    return Math.floor(((1 - (value/maxValue)) * (max-min)) + min)
}